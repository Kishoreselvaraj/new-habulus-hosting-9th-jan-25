import React, { useState } from "react";
import UploadFile from "../../components/uploadFile";
import toast from "react-hot-toast";
import { API_LINK } from "../../utils/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [file, setFile] = useState(null); // Single file instead of array if uploading one at a time
  const navigate = useNavigate();

  const handleFileChange = (file) => {
    setFile(file); // Update the file state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      toast.error("Please upload an image before submitting.");
      return;
    }

    toast.loading("Processing...");
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("image", file);

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
      navigate("/dashboard/carousel");
    } catch (error) {
      toast.dismiss();
      console.error(error);
      toast.error("Failed to save carousel data");
    }
  };

  return (
    <form className="flex relative justify-center items-center flex-col w-full bg-[#212020] md:w-[80%] min-h-full">
      <UploadFile setFile={handleFileChange} />
      <Link
        to={`/dashboard/carousel`}
        className="absolute top-10 left-0 text-white p-3"
      >
        <IoArrowBack size={25} />
      </Link>
      <button
        type="submit"
        onClick={handleSubmit}
        className={`mt-8 font-semibold py-2 px-4 rounded w-[10%] md:w-[15%] mx-auto block ${
          file
            ? "bg-[#437730] text-[#212020] cursor-pointer"
            : "bg-gray-500 text-white cursor-not-allowed"
        }`}
        disabled={!file} // Disable the button if no file is selected
      >
        Publish
      </button>
    </form>
  );
};

export default Carousel;
