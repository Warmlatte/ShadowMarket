import express from "express";
import cors from "cors";
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

export { app };
