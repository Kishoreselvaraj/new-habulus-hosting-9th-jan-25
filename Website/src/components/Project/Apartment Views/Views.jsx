import { useEffect, useState } from "react";
import axios from "axios";
import { API_LINK, MEDIA_LINK } from "../../../utils/api";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import { IoClose } from "react-icons/io5";

const Views = ({ id }) => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    const GetDataHandler = async () => {
      try {
        const resp = await axios.get(
          `${API_LINK}/apartment/views/get-views/${id}`
        );
        setImages(resp.data.data.images);
      } catch (error) {
        console.log(error);
      }
    };
    id && GetDataHandler();
  }, [id]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const openModal = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center w-full mx-auto justify-center">
      {images && images.length > 0 && (
        <div className="relative w-full max-w-[800px] h-[250px] sm:h-[450px] flex justify-center items-center overflow-hidden">
          <AiFillLeftCircle
            size={30}
            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-white bg-black/50 rounded-full"
            onClick={handlePrev}
          />
          <img
            src={MEDIA_LINK + images[currentIndex]}
            alt="Carousel View"
            className="w-full h-full object-cover rounded-lg cursor-pointer"
            onClick={() => openModal(MEDIA_LINK + images[currentIndex])}
          />
          <AiFillRightCircle
            size={30}
            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 cursor-pointer z-10 text-white bg-black/50 rounded-full"
            onClick={handleNext}
          />
        </div>
      )}
      {images && images.length > 0 && (
        <div className="flex justify-center mt-2 sm:mt-4">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 sm:h-3 sm:w-3 rounded-full mx-1 sm:mx-2 cursor-pointer ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      )}

      {/* Modal for Image Pop-Up */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-[9999] pt-10">
          <div className="relative w-full max-w-[90vw] max-h-[90vh] flex justify-center items-center">
            <IoClose
              size={40}
              className="absolute top-4 right-4 text-white cursor-pointer bg-black/60 p-1 rounded-full"
              onClick={closeModal}
            />
            <img
              src={modalImage}
              alt="Modal View"
              className="w-full h-full max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Views;
