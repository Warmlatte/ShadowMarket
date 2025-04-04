#!/bin/sh

# 安裝依賴
npm install

# 生成Prisma客戶端
npx prisma generate

# 部署遷移
npx prisma migrate deploy

# 輸出成功訊息
echo "Prisma schema和遷移設置完成！" 