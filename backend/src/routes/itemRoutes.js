import express from "express";
import * as ItemController from "../controllers/itemController.js";
import { authMiddleware } from "../middlewares/authMiddlewares.js";

const router = express.Router();

// Item Management
router.get("/", ItemController.fetchAllItems);
router.post("/", authMiddleware, ItemController.addItem);
router.put("/:id", authMiddleware, ItemController.editItem);
router.delete("/:id", authMiddleware, ItemController.removeItem);

// Search
router.get("/search", ItemController.lookupItem);

export default router;
