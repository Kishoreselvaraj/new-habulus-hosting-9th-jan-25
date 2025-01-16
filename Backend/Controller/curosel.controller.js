const express = require("express");
const Carousel = require("../Model/curosel.model");
const ApiResponse = require("../Utils/apiResponse");

// Get all carousel items
const getCarouselAdvertisements = async (req, res) => {
  try {
    const advertisements = await Carousel.find();
    res
      .status(200)
      .json(new ApiResponse(200, advertisements, "Carousel items fetched successfully!"));
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

// Add a new carousel item
const addCarouselAdvertisement = async (req, res) => {
  try {
    const { title, description } = req.body;
    const image = req.file ? req.file.filename : "";

    if (!title || !description || !image) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "Title, description, and image are required."));
    }

    const advertisement = await Carousel.create({ title, description, image });

    res
      .status(201)
      .json(new ApiResponse(201, advertisement, "Carousel item added successfully!"));
  } catch (err) {
    res.status(400).json(new ApiResponse(400, null, err.message));
  }
};

// Delete a carousel item
const deleteCarouselAdvertisement = async (req, res) => {
  try {
    const advertisement = await Carousel.findByIdAndDelete(req.params.id);

    if (!advertisement) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Carousel item not found."));
    }

    res
      .status(200)
      .json(new ApiResponse(200, {}, "Carousel item deleted successfully!"));
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

module.exports = {
  getCarouselAdvertisements,
  addCarouselAdvertisement,
  deleteCarouselAdvertisement,
};
