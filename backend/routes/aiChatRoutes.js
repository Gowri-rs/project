const express = require("express");
const detectCrisis = require("../crisisDetection");
const getBotResponse = require("../chatbot");

const router = express.Router();

router.post("/chat", (req, res) => {

  const { message } = req.body;

  // Crisis detection
  if (detectCrisis(message)) {
    return res.json({
      crisis: true,
      reply:
        "It sounds like you might be going through a very difficult time. Please consider contacting a trusted person or a mental health helpline."
    });
  }

  // Normal chatbot response
  const reply = getBotResponse(message);

  res.json({
    crisis: false,
    reply: reply
  });

});

module.exports = router;