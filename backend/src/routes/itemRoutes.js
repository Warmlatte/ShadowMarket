import express from "express";
import * as ItemController from "../controllers/itemController.js";

const router = express.Router();

router.get("/", ItemController.fetchAllItems);
router.post("/", ItemController.addItem);
router.put("/:id", ItemController.editItem);
router.delete("/:id", ItemController.removeItem);

export default router;
