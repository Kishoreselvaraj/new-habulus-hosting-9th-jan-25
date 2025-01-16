const express = require("express");
const {
  addCarouselAdvertisement,
  getCarouselAdvertisements,
  deleteCarouselAdvertisement,
} = require("../Controller/curosel.controller.js");
const upload = require("../Middleware/multer.middleware.js");

const router = express.Router();

// Route to get all carousel items
router.get("/get-carousels", getCarouselAdvertisements);

// Route to add a new carousel item
router.post("/add-carousel", upload.single("image"), addCarouselAdvertisement);

// Route to delete a carousel item by ID
router.delete("/delete-carousel/:id", deleteCarouselAdvertisement);

module.exports = router;
