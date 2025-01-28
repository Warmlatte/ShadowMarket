import jwt from "jsonwebtoken";

export const authService = {
  async verifyStaticPassword(password) {
    return password === process.env.STATIC_PASSWORD;
  },

  async verifyToken(token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      return decoded;
    } catch (error) {
      throw new Error("無效或過期的 token");
    }
  },
};
