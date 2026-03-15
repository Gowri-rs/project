const express = require("express");
const Therapist = require("../models/therapistModel");

const router = express.Router();

router.get("/therapists", async (req, res) => {

  const therapists = await Therapist.find({
    available: true,
    verified: true,
    status: "approved"
  });

  res.json(therapists);

});

module.exports = router;