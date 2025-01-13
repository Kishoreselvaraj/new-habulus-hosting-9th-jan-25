const { Schema, model } = require("mongoose");

const carouselSchema = new Schema({
  image: {
    type: String,
  },
});

module.exports = model("Carousel", carouselSchema);
