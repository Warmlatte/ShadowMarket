import { app } from "./app.js";
import http from "http";
import "dotenv/config";
import { prisma } from "./src/config/improved-prisma.js";

const port = process.env.PORT || 3032;

const server = http.createServer(app);

server.listen(port, "::", () => {
  console.log(`Server running on port ${port}`);
});

// 在進程結束時關閉 Prisma 連接
["SIGINT", "SIGTERM"].forEach((signal) => {
  process.on(signal, async () => {
    console.log(`收到 ${signal} 信號，關閉 HTTP 伺服器和 Prisma 連接`);
    server.close(() => {
      console.log("HTTP 伺服器已關閉");
    });

    try {
      await prisma.$disconnect();
      console.log("Prisma 連接已關閉");
      process.exit(0);
    } catch (error) {
      console.error("關閉 Prisma 連接時出錯:", error);
      process.exit(1);
    }
  });
});
