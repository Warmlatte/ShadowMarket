import express from "express";
import * as AuthController from "../controllers/authController.js";

const router = express.Router();

router.post("/verify-password", AuthController.verifyPassword);
router.get("/verify-token", AuthController.verifyToken);

export default router;
