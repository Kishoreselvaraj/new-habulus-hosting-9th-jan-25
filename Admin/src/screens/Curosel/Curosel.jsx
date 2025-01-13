import React, { useEffect, useState } from "react";
import ImageCard from "../../components/ImageCard";
import toast from "react-hot-toast";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import Loading from "../../components/Loading";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

const Carousel = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCarousel();
  }, []);

  const getCarousel = async () => {
    try {
      const resp = await axios.get(`${API_LINK}/carousel/get-carousels`);
      setData(resp.data.data || []); // Ensure `data` is always an array
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  const deleteCarousel = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this carousel?"
    );
    if (!confirmed) return;

    try {
      toast.loading("Deleting...");
      await axios.delete(`${API_LINK}/carousel/delete-carousel/${id}`);
      await getCarousel(); // Refresh the data after deletion
      toast.success("Carousel deleted successfully");
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    } finally {
      toast.dismiss();
    }
  };

  return (
    <section className="bg-[#212020] h-[100vh] w-full md:w-[80%] py-10 overflow-y-scroll relative">
      <p className="mb-3 text-white font-semibold text-2xl text-center">
        Carousel
      </p>

      {loading && <Loading />}
      
      {/* "Add" Button */}
      <Link
        to={"/dashboard/carousel/modify"}
        className="absolute bottom-10 right-10 bg-white text-black p-3 rounded-full shadow-lg"
      >
        <IoAdd size={28} />
      </Link>

      {!loading && data.length === 0 && (
        <div className="flex justify-center items-center h-[60vh]">
          <p className="text-gray-400 text-lg">No carousel items available.</p>
        </div>
      )}

      {!loading && data.length > 0 && (
        <div className="w-full flex justify-center items-center flex-wrap gap-6">
          {data.map((item) => (
            <ImageCard
              id={item._id}
              key={item._id}
              editpath={`/dashboard/carousel/modify/${item._id}`}
              image={item.image}
              deleteHandler={deleteCarousel}
              edit={false}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Carousel;
