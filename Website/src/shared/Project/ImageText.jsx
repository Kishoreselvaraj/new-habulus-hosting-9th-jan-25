import { MEDIA_LINK } from "../../utils/api";

const ImageText = ({ image, description }) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center md:items-start mx-auto gap-5">
      {/* Full-width image */}
      <img
        src={MEDIA_LINK + image}
        alt=""
        className="w-full h-[50vh] object-contain"
      />
      {/* Description */}
      <p className="w-full md:w-[50%] mt-4 md:mt-0 text-justify">
        {description}
      </p>
    </div>
  );
};

export default ImageText;
