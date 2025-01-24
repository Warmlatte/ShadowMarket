import express from "express";

const router = express.Router();

// test
router.get("/", (req, res) => {
  res.send("接收到訊號了喔 ✅");
});

export default router;
