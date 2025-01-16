const { Schema, model } = require("mongoose");

const carouselSchema = new Schema({
  image: {
    type: String,
    required: true, // Ensures the image field is mandatory
  },
  title: {
    type: String,
    required: true, // Ensures the title field is mandatory
    trim: true, // Removes any extra whitespace
  },
  description: {
    type: String,
    required: true, // Ensures the description field is mandatory
    trim: true, // Removes any extra whitespace
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the creation date
  },
});

module.exports = model("Carousel", carouselSchema);
