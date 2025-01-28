import express from "express";
import * as ItemController from "../controllers/itemController.js";

const router = express.Router();

// Item Management
router.get("/", ItemController.fetchAllItems);
router.post("/", ItemController.addItem);
router.put("/:id", ItemController.editItem);
router.delete("/:id", ItemController.removeItem);

// Search
router.get("/search", ItemController.lookupItem);

export default router;
