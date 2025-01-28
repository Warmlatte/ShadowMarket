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

export const verifyToken = async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "未提供授權 token",
    });
  }
  try {
    await authService.verifyToken(token);

    res.status(200).json({
      status: 200,
      message: "token 驗證成功",
      data: [],
    });
  } catch (error) {
    res.status(403).json({
      status: 403,
      message: "無效或過期的 token",
      data: [],
    });
  }
};
