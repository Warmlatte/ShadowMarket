import { PrismaClient } from "@prisma/client";

// 避免在開發環境下創建多個 PrismaClient 實例
const globalForPrisma = global;

// 設置重連策略
const prismaClientSingleton = () => {
  return new PrismaClient({
    log: ["error", "warn"],
    errorFormat: "pretty",
    // 增加連接超時設置
    datasourceUrl: process.env.DATABASE_URL,
  });
};

// 導出 prisma 實例 (在全局範圍或創建新的)
export const prisma = globalForPrisma.prisma || prismaClientSingleton();

// 僅在非生產環境下將 prisma 保存到全局對象
if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}

// 輔助函數: 自動重試失敗的 Prisma 操作
export const withRetry = async (operation, maxRetries = 3, delayMs = 200) => {
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error;

      // 檢查是否為連接斷開錯誤
      const isConnectionError =
        error.message.includes("Server has closed the connection") ||
        error.message.includes("Can't reach database server") ||
        error.message.includes("Connection lost") ||
        error.message.includes("Connection timed out");

      if (isConnectionError) {
        console.warn(`資料庫連接錯誤，嘗試重試 (${attempt}/${maxRetries})...`);

        // 在重試之前稍微等待
        if (attempt < maxRetries) {
          await new Promise((resolve) =>
            setTimeout(resolve, delayMs * attempt)
          );
        }
      } else {
        // 非連接錯誤，直接拋出
        throw error;
      }
    }
  }

  // 如果所有嘗試都失敗，拋出最後的錯誤
  throw lastError;
};

// 資料庫操作包裝器
export const db = {
  // 查詢函數包裝
  query: async (operation) => {
    return withRetry(operation);
  },

  // 捕獲所有的 prisma 屬性和方法，返回帶重試功能的版本
  ...new Proxy(prisma, {
    get(target, prop) {
      // 原始屬性或方法
      const originalValue = target[prop];

      // 如果不是函數，直接返回原始值
      if (
        typeof originalValue !== "function" ||
        prop === "$connect" ||
        prop === "$disconnect"
      ) {
        return originalValue;
      }

      // 否則，返回一個包裝函數，添加自動重試功能
      return (...args) => {
        return withRetry(() => originalValue.apply(target, args));
      };
    },
  }),
};

// 捕獲未處理的異常，確保 Prisma 連接在進程終止時關閉
["SIGINT", "SIGTERM", "uncaughtException"].forEach((signal) => {
  process.on(signal, async () => {
    console.log(`收到 ${signal} 信號，正在關閉 Prisma 連接...`);
    try {
      await prisma.$disconnect();
      console.log("Prisma 連接已關閉");
    } catch (e) {
      console.error("關閉 Prisma 連接時出錯:", e);
    }
    process.exit(signal === "uncaughtException" ? 1 : 0);
  });
});

export default prisma;
