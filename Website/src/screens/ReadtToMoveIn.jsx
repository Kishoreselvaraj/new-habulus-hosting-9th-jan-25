import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { API_LINK, MEDIA_LINK } from "../utils/api";
import toast from "react-hot-toast";
import Video from "../assets/video/ready-to-move-in.mp4";
import ImageOne from "../assets/2d-3d/image1.png";

const ReadyToMoveIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [visibleProjects, setVisibleProjects] = useState(3);

  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/project/get-projects?type=Ready to move in `
      );
      setData(resp.data.data);
    } catch (error) {
      console.log("Error in loading Ready to move in");
      toast.error("Error in Loading Ready to move in");
    }
    setLoading(false);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  return (
    <main className="bg-black md:bg-white">
      {/* <section className="h-[90vh] mt-12 w-full relative">
        <Link
          to={"/"}
          className="text-white absolute top-6 left-6 z-20 text-2xl"
        >
          <FaArrowLeft />
        </Link>
        <video
          src={Video}
          className="w-full h-full absolute top-0 left-0 object-cover"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="relative w-[90%] mx-auto h-full flex justify-center items-center flex-col z-10">
          <p className=" text-3xl md:text-5xl text-white font-bold w-full text-center md:text-left">
            A Ready-to-Move-In Marvel by Habulus Groups
          </p>
          <p className="text-white w-full text-lg text-center md:text-left mx-auto mt-4">
            Just Buy Your Dream home
          </p>
        </div>
      </section> */}
      <section className="mt-[100px] m-6">
        <p className="text-2xl font-bold">Ready To Move In Projects</p>
      </section>
      <section className="w-full my-10">
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-full gap-8 mx-auto max-w-6xl">
            {" "}
            {data &&
              data.slice(0, visibleProjects).map((item) => {
                return (
                  <Link
                    to={`/project/${item._id}?type=ready-to-move-in`}
                    key={item._id}
                  >
                    <div className="w-full h-[320px] overflow-hidden group relative shadow-xl">
                      <img
                        src={MEDIA_LINK + item.image}
                        className="w-full h-[320px] object-cover rounded-md"
                      />
                      <div className="absolute bottom-0 p-4 lg:translate-y-72 lg:group-hover:translate-y-0 rounded-t-2xl bg-white w-full z-20 transition-animate">
                        <p className="font-semibold">{item.title}</p>
                        <p className="line-clamp-2 text-xs mt-1">
                          {item.description}
                        </p>
                        <span className="uppercase bg-[#2e7b27] text-xs text-white font-medium px-4 py-1 rounded-full absolute -top-3 right-5 ">
                          Ready To Move In
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </section>
      {data && data.length > visibleProjects && (
        <button
          onClick={loadMoreProjects}
          className="border block mx-auto mt-10 bg-black border-white text-white px-6 py-2 rounded-md"
        >
          Load More
        </button>
      )}
      {data && data.length > 3 && visibleProjects >= data?.length && (
        <button
          onClick={showLessProjects}
          className="border block mx-auto mt-10 bg-black border-white text-white px-6 py-2 rounded-md"
        >
          Show Less
        </button>
      )}
      <section className="max-w-6xl mx-auto ">
        <div className="md:w-[90%] mx-auto  bg-black md:bg-white px-4 md:px-10 py-14">
          <p className="font-bold text-2xl uppercase  text-white md:text-black mb-3">
            Immerse Yourself in a 360-Degree Experience
          </p>
          <p className="font-medium text-justify  text-white md:text-black mb-10">
            At Habulus Groups, we believe that the journey to your dream home
            should be as immersive as the living experience itself. Introducing
            our state-of-the-art 360-degree view technology, we invite you to
            explore every nook and cranny of your future residence before
            construction even begins.Our 360-degree panoramas offer a holistic
            view of your home, allowing you to navigate seamlessly through each
            room and space. Immerse yourself in the layout, get a feel for room
            dimensions, and appreciate the flow of design—all from the comfort
            of your device. It&apos;s like being inside your home before
            it&apos;s even built.
          </p>

          <div className="flex justify-center md:justify-start">
            <Link
              to={"/view-360"}
              className="border bg-white md:bg-black  border-black md:border-white text-black md:text-white px-6 py-2 rounded-md"
            >
              360 view
            </Link>
          </div>
          <img
            src={ImageOne}
            alt=""
            className="w-full mx-auto mt-10 rounded hidden md:block object-cover"
          />
        </div>
      </section>
    </main>
  );
};

export default ReadyToMoveIn;
