import { authService } from "../services/authService.js";
import jwt from "jsonwebtoken";
export const verifyPassword = async (req, res) => {
  try {
    const { password } = req.body;

    const response = await authService.verifyStaticPassword(password);

    if (!response) {
      return res.status(401).json({
        status: 401,
        message: "密碼驗證失敗",
      });
    }
    const token = jwt.sign({}, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });

    res.status(200).json({
      status: 200,
      message: "密碼驗證成功",
      token,
    });
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "伺服器內部錯誤",
    });
  }
};
