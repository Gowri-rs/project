const express = require("express");
const Volunteer = require("../models/volunteerModel");

const router = express.Router();

// router.get("/volunteers", async (req, res) => {

//   const volunteers = await Volunteer.find({ available: true });

//   res.json(volunteers);

// });

router.get("/pending-volunteers", async (req, res) => {
  const volunteers = await Volunteer.find({
    status: "pending"
  });

  res.json(volunteers);
});

router.put("/approve-volunteer/:id", async (req, res) => {
  await Volunteer.findByIdAndUpdate(req.params.id, {
    verified: true,
    status: "approved"
  });

  res.json({
    message: "Volunteer approved"
  });
});

module.exports = router;