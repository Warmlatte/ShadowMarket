# Zeabur環境變數設置指南

在Zeabur控制台中，找到你的後端服務，點擊"Environment Variables"標籤，然後添加以下環境變數：

```
DATABASE_URL=mysql://用戶名:密碼@資料庫主機:端口/資料庫名稱
```

注意，如果你在Zeabur中創建了MySQL服務，可以在資料庫服務的"Details"頁面找到連接字符串。或者使用Zeabur的預設綁定變數（在服務詳情頁檢查可用的綁定變數）。

其他重要環境變數：

```
PORT=8080
STATIC_PASSWORD=你的安全密碼
JWT_SECRET=安全的JWT密鑰
JWT_EXPIRATION=15m
OPENAI_API_KEY=你的OpenAI API密鑰
```

## 前端設置

對於前端服務，需要設置以下環境變數：

```
VITE_API_BASE_URL=https://你的後端服務域名.zeabur.app
```

## 設置自定義域名

1. 在Zeabur控制台中，找到你的服務
2. 點擊"Domains"標籤
3. 添加你的自定義域名
4. 按照Zeabur提供的說明在你的DNS提供商那裡添加DNS記錄
5. 等待域名生效

## 綁定服務

如果你的項目包含前端和後端服務，可以在Zeabur控制台中將它們放在同一個專案內，並為每個服務分配不同的子域名或路徑。 