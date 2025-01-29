# 🌑 Shadow Market —— 暗影市集 🏹🔮  

> **「冒險者啊，歡迎來到暗影市集…… 這裡交易的不只是物品，還有故事與命運。」**  

Shadow Market 是一個 **神秘的黑市風格魔法道具商城**，專為 **Dungeons & Dragons（D&D）** 世界觀打造！🧙‍♂️✨  
在這裡，你可以輕鬆瀏覽、管理**魔法物品、傳奇武器、神秘藥水**等稀世珍寶，打造屬於你的冒險裝備！💎⚔️  

---  

## 🏗 技術架構  

🖥 **前端**：Vue 3 + Tailwind CSS + DaisyUI  
🛠 **後端**：Express + Prisma + MySQL  
🚀 **部署**：Railway  

---  

## 🎩 主要功能  

✅ **商品展示** —— 探索神秘的魔法道具 🛒🔮  
✅ **關鍵字搜尋** —— 迅速找到你的夢幻裝備 🔍✨  
✅ **後台管理** —— 新增、編輯、刪除商品 🏗🔧  
✅ **安全機制** —— 使用 Token 保護編輯權限 🔑🔐  
✅ **未來計畫** —— 更多篩選與排序功能 🛠️📜  

---  

## 🚀 快速啟動  

### 1️⃣ 安裝專案  

```sh
git clone https://github.com/你的GitHub/shadow-market.git  
cd ShadowMarket  
```

### 2️⃣ 安裝依賴
```sh
# 安裝前端
cd frontend
npm install

# 安裝後端
cd backend
npm install
```

### 3️⃣ 環境變數設定
請在 `backend/.env` 中設定你的 MySQL 資料庫 及 JWT_SECRET。

```env
DATABASE_URL="mysql://user:password@host:port/database"
JWT_SECRET="your_secret_key"
```

### 4️⃣ 啟動開發環境

```sh
# 啟動前端
cd client
npm run dev

# 啟動後端
cd ../server
npm run dev
```
## 📜 許可協議
本專案採用 MIT License，歡迎自由使用與貢獻！💡🤝
