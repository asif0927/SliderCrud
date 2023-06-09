const mongoose = require("mongoose");

const SliderModel = new mongoose.model(
  "Sliders",
  new mongoose.Schema({
    name: String,
    imageURL: String,
  })
);

module.exports = SliderModel