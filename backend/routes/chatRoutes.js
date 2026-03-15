const express = require("express");
const detectCrisis = require("../crisisDetection");

const router = express.Router();

router.post("/chat", async (req, res) => {

  const { message } = req.body;

  const crisis = detectCrisis(message);

  if (crisis) {
    return res.json({
      crisis: true,
      message: "We detected you may need urgent support.",
      help: "Please contact a helpline or talk to a therapist immediately."
    });
  }

  res.json({
    crisis: false,
    reply: "I'm here to support you. Tell me more about how you feel."
  });

});

module.exports = router;