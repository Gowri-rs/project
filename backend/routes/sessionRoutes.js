const express = require("express");
const Session = require("../models/sessionModel");

const router = express.Router();

router.post("/book-session", async (req, res) => {

  const session = new Session(req.body);

  await session.save();

  res.json({ message: "Session booked successfully" });

});

module.exports = router;