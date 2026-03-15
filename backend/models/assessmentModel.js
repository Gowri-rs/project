const mongoose = require("mongoose");

const assessmentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  answers: {
    q1: Number,
    q2: Number,
    q3: Number,
    q4: Number,
    q5: Number,
    q6: Number,
    q7: Number,
    q8: Number,
    q9: Number,
    q10: Number
  },

  score: Number,

  level: String,

  recommendation: String

}, { timestamps: true });

module.exports = mongoose.model("Assessment", assessmentSchema);