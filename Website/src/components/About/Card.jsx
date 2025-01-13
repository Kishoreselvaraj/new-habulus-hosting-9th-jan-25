import React, { useState, useEffect } from "react";

const Card = ({ imageSrc, nameof, designation, description, company, education, textColor }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

  // Update isLargeScreen on window resize
  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDescription = () => {
    setIsExpanded((prev) => !prev);
  };

  // Dynamically set color based on the `textColor` prop
  const dynamicTextColor = textColor === "blue" ? "text-blue-500" : "text-[#FC7D5F]";
  const dynamicTextColor1 = textColor === "blue" ? "text-[#154166]" : "text-[#FC7D5F]";

  const truncatedDescription = description?.length > 150
    ? `${description.substring(0, 150)}...`
    : description;

  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8 p-4 bg-gray-100 border rounded-lg w-full mb-8">
      {/* Image Section */}
      <div className="w-full sm:w-1/6 flex justify-center sm:justify-start">
        <img
          src={imageSrc}
          alt="Card"
          className="w-24 h-24 sm:w-full sm:h-[250px] object-cover object-top rounded-full sm:rounded-lg lg:h-auto"
        />
      </div>

      {/* Content Section */}
      <div className="flex-1">
        <h2 className={`text-xl sm:text-2xl font-bold ${dynamicTextColor}`}>{company}</h2>
        <div className="flex flex-col sm:flex-row gap-2 justify-center sm:justify-start">
          <p className={`text-lg sm:text-2xl font-bold ${dynamicTextColor1}`}>{nameof}</p>
          <p className={`text-sm sm:pt-1 sm:text-base ${dynamicTextColor1}`}>{designation}</p>
        </div>
        <p className={`text-sm sm:pt-1 sm:text-base ${dynamicTextColor1}`}>{education}</p>
        <br />
        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base whitespace-pre-wrap">
          {isExpanded || isLargeScreen
            ? description || "No description available"
            : truncatedDescription || "No description available"}
        </p>

        {/* Toggle Button (Visible only on small screens) */}
        {!isLargeScreen && description?.length > 150 && (
          <button
            onClick={toggleDescription}
            className="mt-2 text-blue-500 text-sm sm:text-base font-medium"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
