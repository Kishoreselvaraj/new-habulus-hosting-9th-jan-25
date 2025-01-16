import React, { useState } from "react";
import UploadFile from "../../components/uploadFile";
import toast from "react-hot-toast";
import { API_LINK } from "../../utils/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [file, setFile] = useState(null); // Store the file for image upload
  const [title, setTitle] = useState(""); // Store title input
  const [description, setDescription] = useState(""); // Store description input
  const navigate = useNavigate();

  // Handle file change (image upload)
  const handleFileChange = (file) => {
    setFile(file); // Update file state
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file || !title || !description) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }

    toast.loading("Processing...");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", file);
      formDataToSend.append("title", title);
      formDataToSend.append("description", description);

      // Send request to add the carousel
      const resp = await axios.post(
        `${API_LINK}/carousel/add-carousel`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.dismiss();
      toast.success("Carousel image added successfully!");
      navigate("/dashboard/carousel"); // Navigate to the carousel list page
    } catch (error) {
      toast.dismiss();
      console.error(error);
      toast.error("Failed to save carousel data");
    }
  };

  return (
    <form className="flex relative justify-center items-center flex-col w-full bg-[#212020] md:w-[80%] min-h-full">
      <UploadFile setFile={handleFileChange} /> {/* File upload component */}

      <div className="mt-4 w-full max-w-md">
        {/* Title input */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter carousel title"
          className="w-full p-3 mb-4 text-white bg-gray-800 rounded-md"
        />
        {/* Description input */}
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter carousel description"
          rows="4"
          className="w-full p-3 mb-4 text-white bg-gray-800 rounded-md"
        />
      </div>

      <Link
        to={`/dashboard/carousel`}
        className="absolute top-10 left-0 text-white p-3"
      >
        <IoArrowBack size={25} />
      </Link>

      {/* Submit button */}
      <button
        type="submit"
        onClick={handleSubmit}
        className={`mt-8 font-semibold py-2 px-4 rounded w-[10%] md:w-[15%] mx-auto block ${
          file && title && description
            ? "bg-[#437730] text-[#212020] cursor-pointer"
            : "bg-gray-500 text-white cursor-not-allowed"
        }`}
        disabled={!file || !title || !description} // Disable if any field is missing
      >
        Publish
      </button>
    </form>
  );
};

export default Carousel;
