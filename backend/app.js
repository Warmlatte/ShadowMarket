import express from "express";
import cors from "cors";
// import errorMiddleware from ""
import Items from "./src/routes/itemRoutes.js";

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("/items", Items);

// error
// app.use(errorMiddleware)

export { app };
