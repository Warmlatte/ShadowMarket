# 手動在Zeabur容器中解決Prisma問題

如果自動部署方案仍然出現問題，請在Zeabur控制台中打開服務的"Terminal"，然後執行以下命令：

```bash
# 創建prisma目錄
mkdir -p prisma

# 進入prisma目錄
cd prisma

# 創建schema.prisma文件
cat > schema.prisma << 'EOF'
generator client {
  provider = "prisma-client-js"
  binaryTargets = ["native", "debian-openssl-3.0.x"]
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Item {
  id         Int      @id @default(autoincrement())
  name       String   @unique(map: "name_UNIQUE")
  type       String
  effect     String
  price      Float
  weight     Float
  rarity     String
  detail_url String
  created_at DateTime @default(now())
  updated_at DateTime @updatedAt
}
EOF

# 生成prisma客戶端
cd ..
npx prisma generate

# 執行遷移
npx prisma migrate deploy

# 重新啟動服務
# 注意: 這個命令可能會因Zeabur的實現而異，如果不起作用，請在Zeabur控制台手動重啟服務
```

注意：手動解決後，記得為下次部署更新你的代碼庫以包含正確的文件。 