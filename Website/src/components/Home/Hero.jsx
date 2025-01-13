import React, { useEffect, useState } from "react";
import IntroImage from "../../assets/Front photo.jpg"; // Intro image remains the same
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import { MEDIA_LINK, API_LINK } from "../../utils/api";

const Hero = ({ refs }) => {
  const [count, setCount] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [data, setData] = useState([]);

  // Fetch carousel data
  useEffect(() => {
    const fetchCarouselData = async () => {
      try {
        const response = await axios.get(`${API_LINK}/carousel/get-carousels`);
        setData(response.data?.data || []); // Handle possible undefined structure
      } catch (error) {
        console.error("Failed to fetch carousel data:", error);
      }
    };

    fetchCarouselData();
  }, []);

  // Automatic sliding effect
  useEffect(() => {
    if (!isPaused && data.length > 0) {
      const intervalId = setInterval(() => {
        setCount((prevCount) => (prevCount + 1) % data.length);
      }, 3000);
      return () => clearInterval(intervalId); // Cleanup interval
    }
  }, [data.length, isPaused]);

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const handleIndicatorClick = (index) => setCount(index);

  const handleItemClick = (itemName, ref) => {
    const isMobileOrTablet = window.innerWidth <= 768;
    if (ref) {
      if (isMobileOrTablet) {
        window.open(`/#${itemName}`, "_self");
      } else {
        ref.current?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }
    }
  };

  const handleCloseIntro = () => setShowIntro(false);

  return (
    <>
      {showIntro ? (
        <div className="relative h-[100vh] w-full">
          <img
            src={IntroImage}
            className="w-full h-full object-cover"
            alt="Intro"
          />
          <div className="absolute inset-0 flex justify-center items-center">
            <div className="bg-black bg-opacity-50 text-white py-11 px-8 rounded-lg text-center mx-auto w-full md:w-[70%] animate-slide-up">
              <p className="text-lg">
                Welcome to Habulus Groups, where precision meets passion in the
                realm of construction excellence. Transforming dreams into
                concrete reality, we build with innovation, integrity, and a
                commitment to quality that stands the test of time.
              </p>
            </div>
            <button
              className="bg-white text-black p-2 rounded-full absolute top-20 md:top-24 right-6 md:right-10"
              onClick={handleCloseIntro}
            >
              <AiOutlineClose />
            </button>
          </div>
        </div>
      ) : (
        <div
          className="relative"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {data.length > 0 ? (
            <div className="relative w-full h-[100vh] bg-black overflow-hidden">
  <img
    src={`${MEDIA_LINK}/${data[count]?.image}`}
    className="w-full h-full object-fill" // you may use object-contain
    alt={data[count]?.title || "Carousel Image"}
    loading="lazy"
  />
</div>
          ) : (
            <div className="flex justify-center items-center h-[100vh]">
              <p className="text-white">Loading...</p>
            </div>
          )}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {data.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-1 bg-white cursor-pointer rounded-sm ${
                  index === count ? "bg-opacity-100" : "bg-opacity-50"
                }`}
                onClick={() => handleIndicatorClick(index)}
              ></div>
            ))}
          </div>
        </div>
      )}
      <section className="bg-black w-full justify-center items-center flex-col py-16 hidden md:flex">
        <p className="text-white text-center font-medium text-2xl md:text-3xl">
          Welcome to our <br /> Construction Field website!
        </p>
        <p className="text-white text-center mt-4 mb-6 text-sm">
          Learn more about our company and our expertise.
        </p>
        <div className="gap-x-4 flex">
          <button
            className="border border-white text-white px-6 py-2 rounded-md text-sm"
            onClick={() => handleItemClick("contact", refs.contactRef)}
          >
            Contact Us
          </button>
          <button
            className="bg-white border border-white text-black px-6 py-2 rounded-md text-sm"
            onClick={() => handleItemClick("projects", refs.aboutRef)}
          >
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
