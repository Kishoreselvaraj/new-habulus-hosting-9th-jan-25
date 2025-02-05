import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import videoFooter from "../assets/footer/footer vedio.mp4";
import Animation from "../assets/footer/footer.gif";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = ({ refs }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (itemName, ref) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    const isMobileOrTablet = window.innerWidth <= 768;
    if (ref && isMobileOrTablet) {
      window.open(`/#${itemName}`, "_self");
      ref.current?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    } else {
      if (ref) {
        ref.current?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }
    }
  };

  return (
    <section
      className="min-h-screen flex flex-col justify-start items-center relative"
      id="contact"
      ref={refs.contactRef}
    >
      {location.pathname === "/" && (
        <img
          src={Animation}
          className="absolute z-50 -top-[180px] md:-top-[195px] -left-[90px] w-[460px]"
        />
      )}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover h-full w-full z-0"
      >
        <source src={videoFooter} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <div className="w-full min-h-screen flex flex-col bg-black/70 py-14 px-4 z-40">
      <div className="row">
        <div className="col-md-6">
          <p className="text-white font-bold flex flex-col justify-start text- relative z-10 mb-5 text-2xl w-[90%]">
            Habulus Group
          </p>
        </div>
        <div className="col-md-6">
          <p className="text-white font-bold flex flex-col justify-start text- relative z-10 mb-5 text-2xl w-[90%]">
            Habulus Group
          </p>
        </div>
      </div> */}
    <div className="w-full min-h-screen flex flex-col bg-black/70 py-14 px-4 z-40">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 mb-5">
          <p className="text-white font-bold text-2xl w-[90%] relative z-10 mb-2">
            Habulus Group
          </p>
          <p className="text-white  text-1.5xl w-[50%] relative z-10 ">
            <Link className="hover:text-[#FAFF00]" to="/ready-to-move-in">1BHK flats in Bangalore</Link><br />
            <Link className="hover:text-[#FAFF00]" to="/ready-to-move-in">2BHK flats in Bangalore</Link><br />
            <Link className="hover:text-[#FAFF00]" to="/ready-to-move-in">3BHK flats in Bangalore</Link><br />
            <Link className="hover:text-[#FAFF00]" to="/ready-to-move-in">4BHK flats in Bangalore</Link><br />
          </p>
        </div>
        <div className="w-full md:w-1/2 mb-5">
          <p className="text-white font-bold text-2xl w-[90%] relative z-10 mb-2">
            Habulus Group
          </p>
          <p className="text-white  text-1.5xl w-[90%] relative z-10">
          <Link className="hover:text-[#FAFF00]" to="/ready-to-move-in">Appartments between 20L - 30L in bangalore<br /></Link>
            <Link className="hover:text-[#FAFF00]" to="/ready-to-move-in">Appartments between 30L - 40L in bangalore<br /></Link>
            <Link className="hover:text-[#FAFF00]" to="/ready-to-move-in">Appartments between 40L - 50L in bangalore<br /></Link>
            <Link className="hover:text-[#FAFF00]" to="/ready-to-move-in">Appartments between 50L - 60L in bangalore</Link>
          </p>
        </div>
      </div>


        <p className="text-justify text-white justify-start flex flex-col text-xl text- relative z-10 mb-10 w-[90%]">
          Habulus Groups is an epitome of class, quality and luxury. We work and
          innovate consistently to raise the bar of providing luxurious living
          spaces for our customers.
        </p>
        <div className="md:flex w-[90%]">
          <div className="md:w-[40%] w-full md:h-[40vh] flex flex-col justify-start text-left self-start relative z-10">
            <p className="mb-5 text-2xl font-semibold text-white">
              QUICK LINKS
            </p>
            <li
              className="mb-2 text-xl font-medium cursor-pointer list-none text-white"
              onClick={() => handleItemClick("home", refs.homeRef)}
            >
              Home
            </li>
            <li
              className="mb-2 text-xl font-medium cursor-pointer list-none text-white"
              onClick={() => handleItemClick("companies", refs.companiesRef)}
            >
              Companies
            </li>
            <li
              className="mb-2 text-xl font-medium cursor-pointer list-none text-white"
              onClick={() => handleItemClick("projects", refs.aboutRef)}
            >
              Project
            </li>
            <li
              className="mb-2 text-xl font-medium cursor-pointer list-none text-white"
              onClick={() => handleItemClick("property", refs.propertyRef)}
            >
              Property
            </li>
            <li
              className="mb-2 text-xl font-medium cursor-pointer list-none text-white"
              onClick={() => handleItemClick("contact", refs.contactRef)}
            >
              Contact Us
            </li>
          </div>
          <div className="w-full flex justify-start text-left self-start relative z-10 flex-col">
            <p className="flex mb-5 mt-10 md:mt-0 md:ml-8 text-2xl font-semibold text-white">
              CONTACT DETAILS
            </p>
            <p className="md:ml-8 text-white text-xl mt-0 md:pl-6">
              Address :-{" "}
            </p>
            <p className="md:ml-8 text-xl  md:w-[80%] text-white md:pl-6 hover:text-[#FAFF00] cursor-pointer">
              Flat no 501,Site No 1482,1483, sri nilaya residency 2, deccan
              palms layout,Ananth nagar,electronic city phase
              2,Bengaluru(Bangalore) urban, karnataka ,560100
            </p>
            <p className="md:ml-8 text-white md:pl-6 text-xl mt-2">
              Email -{" "}
              <span className="hover:text-[#FAFF00] text-xl cursor-pointer">
                enquiry@habulus.com
              </span>
            </p>
            <p className="md:ml-8 text-white md:pl-6 text-xl mt-2">
              Phone - +91 8989899393
            </p>
          </div>
          
        </div>
        <p className="mb-5 text-2xl font-semibold text-white">
        DISCLAIMER
            </p>
        <p className="text-justify text-white justify-start flex flex-col text-xl text- relative z-10 mb-10 w-[90%]">
        Thank you for visiting The Habulus Groups website.
        By accessing this site, you agree to the Disclaimer. Designs, plans, and specifications are subject to change without notice. Images and walkthroughs are artistic impressions and may differ from actual designs. The Company, its management, or employees are not liable for claims arising from inaccuracies, though efforts are made to ensure accuracy. By sharing your contact details, you authorize Habulus Groups to contact you via calls, SMS, and emails. For more details, please call or visit our sales office. 
        </p>
        <div className="flex md:w-[90%] mt-10 text-xl md:mt-0 justify-center md:justify-between items-center flex-col md:flex-row gap-3">
          <div className="flex md:block flex-col justify-center items-center">
            <img
              src={logo}
              className="h-[38px] rounded-full mb-4 object-cover"
              alt=""
            />
            <p className="text-xl font-bold text-white">
              Designed by Phoenix Tech
            </p>
          </div>
          <div className="flex gap-4">
            <FaFacebook size={24} className="cursor-pointer text-white" />
            <FaYoutube size={26} className="cursor-pointer text-white" />
            <FaInstagram size={24} className="cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
