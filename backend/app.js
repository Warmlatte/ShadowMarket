import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { errorMiddleware } from "./src/middlewares/errorMiddleware.js";
import ItemsRotes from "./src/routes/itemRoutes.js";
import AuthRoutes from "./src/routes/authRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/items", ItemsRotes);
app.use("/auth", AuthRoutes);

// Error Handler
app.use(errorMiddleware);

// 讓 Express 服務前端靜態文件
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// 處理前端路由
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

export { app };
