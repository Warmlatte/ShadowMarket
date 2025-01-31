import { getAIResponse } from "../services/aiService.js";

export const askAI = async (req, res, next) => {
  try {
    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        status: 400,
        message: "請提供問題",
        data: [],
      });
    }

    const answer = await getAIResponse(question);
    res.json({ question, answer });
  } catch (error) {
    next(error);
  }
};
