const mongoose = require("mongoose");

const volunteerSchema = new mongoose.Schema({
  name:
  {
    type: String,
    required: true
  } ,
  language: 
  {
    type: String,
    required: true
  } ,
  rating:
  {
    type: Number,
    required: true
  } ,
  available: 
  {
    type: Boolean,
    required: true
  } 
});

const volunteers = mongoose.model("Volunteer", volunteerSchema);
module.exports = volunteers