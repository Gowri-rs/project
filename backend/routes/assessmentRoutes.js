const express = require("express");
const Assessment = require("../models/assessmentModel");

const router = express.Router();

router.post("/assessment", async (req, res) => {
  try {
    const { userId, answers } = req.body;

    const score =
      answers.q1 +
      answers.q2 +
      answers.q3 +
      answers.q4 +
      answers.q5 +
      answers.q6 +
      answers.q7 +
      answers.q8 +
      answers.q9 +
      answers.q10;

    let level = "";
    let recommendation = "";

    if (score <= 15) {
      level = "Low";
      recommendation = "AI Chat Support";
    } else if (score <= 22) {
      level = "Moderate";
      recommendation = "Volunteer Support";
    } else {
      level = "High";
      recommendation = "Professional Therapist";
    }

    const assessment = new Assessment({
      userId,
      answers,
      score,
      level,
      recommendation
    });

    await assessment.save();

    res.json({
      score,
      level,
      recommendation,
      message: "Assessment completed successfully"
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;