const express = require("express");
const Advertisement = require("../Model/curosel.model");
const ApiResponse = require("../Utils/apiResponse");

const addCarouselAdvertisement = async (req, res) => {
  try {
    let image = req.file ? req.file.filename : "";
    const advertisement = await Advertisement.create({
      ...req.body,
      image,
    });
    res
      .status(200)
      .json(new ApiResponse(200, advertisement, "Carousel Added Successfully!"));
  } catch (err) {
    res.status(400).json(new ApiResponse(400, null, err.message));
  }
};

const getCarouselAdvertisements = async (req, res) => {
  try {
    const advertisements = await Advertisement.find();
    res
      .status(200)
      .json(new ApiResponse(200, advertisements, "Carousel Fetched Successfully!"));
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const getCarouselAdvertisementById = async (req, res) => {
  try {
    const advertisement = await Advertisement.findById(req.params.id);
    if (!advertisement) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Carousel not found"));
    }
    res
      .status(200)
      .json(new ApiResponse(200, advertisement, "Carousel Fetched Successfully!"));
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const updateCarouselAdvertisement = async (req, res) => {
  try {
    const updateFields = { ...req.body };
    if (req.file) {
      updateFields.image = req.file.filename; // Only update if a new image is provided
    }
    const advertisement = await Advertisement.findByIdAndUpdate(
      req.params.id,
      updateFields,
      { new: true, runValidators: true }
    );
    if (!advertisement) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Carousel not found"));
    }
    res
      .status(200)
      .json(new ApiResponse(200, advertisement, "Carousel Updated Successfully!"));
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

const deleteCarouselAdvertisement = async (req, res) => {
  try {
    const advertisement = await Advertisement.findByIdAndDelete(req.params.id);
    if (!advertisement) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Carousel not found"));
    }
    res
      .status(200)
      .json(new ApiResponse(200, {}, "Carousel Deleted Successfully!"));
  } catch (err) {
    res.status(500).json(new ApiResponse(500, null, err.message));
  }
};

module.exports = {
  addCarouselAdvertisement,
  getCarouselAdvertisements,
  getCarouselAdvertisementById,
  updateCarouselAdvertisement,
  deleteCarouselAdvertisement,
};
