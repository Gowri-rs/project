const express = require("express");
const router = express.Router();
const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const api_key = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(api_key);

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "You are a compassionate mental wellness assistant. Give short supportive advice."
    });

    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    res.json({ reply: text });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "AI is sleeping right now..." });
  }
});

module.exports = router;