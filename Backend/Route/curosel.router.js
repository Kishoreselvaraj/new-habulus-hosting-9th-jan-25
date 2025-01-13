const express = require("express");
const {
  addCarouselAdvertisement,
  getCarouselAdvertisements,
  getCarouselAdvertisementById,
  updateCarouselAdvertisement,
  deleteCarouselAdvertisement,
} = require("../Controller/curosel.controller.js");
const upload = require("../Middleware/multer.middleware.js");

const router = express.Router();

// Routes for carousel management
router.get("/get-carouselById/:id", getCarouselAdvertisementById);
router.post("/add-carousel", upload.single("image"), addCarouselAdvertisement);
router.get("/get-carousels", getCarouselAdvertisements);
router.put(
  "/update-carousel/:id",
  upload.single("image"),
  updateCarouselAdvertisement
);
router.delete("/delete-carousel/:id", deleteCarouselAdvertisement);

module.exports = router;
