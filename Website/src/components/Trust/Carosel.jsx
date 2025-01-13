import React, { useState, useEffect } from "react";

const ResponsiveCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000); // Change slide every 3 seconds

      return () => clearInterval(interval); // Cleanup on component unmount
    }
  }, [images.length, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="relative w-full max-w-4xl mx-auto overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex transition-transform duration-500 ease-in-out">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-full h-[300px] sm:h-[400px] flex-shrink-0 transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-30 blur-sm"
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              display: "inline-block",
            }}
          >
            <img
              src={window.innerWidth < 768 ? image.smallSrc : image.src}
              alt={image.alt}
              className="w-full h-full object-cover border-4 border-blue-300"
            />
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full p-2"
      >
        ❯
      </button>
    </div>
  );
};

export default ResponsiveCarousel;
