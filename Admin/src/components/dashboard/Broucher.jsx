import React, { useEffect, useState } from "react";
import UploadFile from "../uploadFile";
import axios from "axios";
import { API_LINK, MEDIA_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import Title from "./Title";

const Broucher = ({ id }) => {
  const [formData, setFormData] = useState({
    file: null,
    pdf: "",
  });
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));

    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Uploading!!");
    try {
      const sendformData = new FormData();
      sendformData.append("pdf", formData.file);
      const resp = await axios.post(
        `${API_LINK}/brochure/modify-brochure/${id}`,
        sendformData
      );
      toast.dismiss();
      toast.success("Changes Are Saved!");
    } catch (error) {
      toast.dismiss();
      console.log(error);
    }
  };

  useEffect(() => {
    const getDataHandler = async () => {
      try {
        const resp = await axios.get(`${API_LINK}/brochure/get-brochure/${id}`);
        setFormData(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    id && getDataHandler();
  }, [id]);

  return (
    <form className="w-[90%] md:w-[50%] mt-10 mx-auto" onSubmit={handleSubmit}>
      <Title title={"Broucher"} />
      <UploadFile
        setFile={handleFileChange}
        type={"pdf"}
        image={formData?.image}
      />

      {previewUrl && (
        <button
          type="button"
          className="mt-6 border-2 text-blue-600 px-4 py-2 rounded-md text-xs cursor-pointer block mx-auto"
          onClick={() => window.open(previewUrl, "_blank")}
        >
          Preview Selected PDF
        </button>
      )}

      {formData?.pdf && (
        <button
          className="mt-6 border-2 text-green-600 px-4 py-2 rounded-md text-xs cursor-pointer block mx-auto"
          onClick={(e) => {
            e.preventDefault();
            window.open(`${MEDIA_LINK}/${formData?.pdf}`, "_blank");
          }}
        >
          View Uploaded Brochure
        </button>
      )}

      <button
        type="submit"
        className="mt-6 bg-[#437730] text-[#212020] font-semibold py-2 px-4 rounded w-[30%] mx-auto block mb-10"
      >
        Save Changes
      </button>
    </form>
  );
};

export default Broucher;
