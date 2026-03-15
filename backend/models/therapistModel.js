const mongoose = require("mongoose");

const therapistSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  specialization: {
    type: String,
    required: true
  },

  experience: {
    type: Number
  },

  sessionFee: {
    type: Number
  },

  available: {
    type: Boolean,
    default: true
  },

  licenseNumber: {
    type: String,
    required: true
  },

  certificate: {
    type: String
  },

  idProof: {
    type: String
  },

  verified: {
    type: Boolean,
    default: false
  },

  status: {
    type: String,
    default: "pending"
  }

}, { timestamps: true });

const therapist = mongoose.model("Therapist", therapistSchema);
module.exports = therapist;