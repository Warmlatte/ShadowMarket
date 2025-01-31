import express from "express";
import * as aiAskController from "../controllers/aiController.js";
const router = express.Router();

router.post("/", aiAskController.askAI);

export default router;
