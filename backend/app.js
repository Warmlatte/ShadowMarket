import express from "express";
import cors from "cors";
import errorMiddleware from "./src/middlewares/errorMiddleware.js";
import Items from "./src/routes/itemRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Routes
app.use("/items", Items);

// Error Handler
app.use(errorMiddleware);

export { app };
