import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaChevronDown } from "react-icons/fa";
import Logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ refs }) => {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (itemName, ref) => {
    if (location.pathname !== "/") {
      navigate("/");
    }

    if (window.innerWidth <= 900) {
      const newWindow = window.open(`/#${itemName}`, "_self");
      newWindow.onload = () => {
        const targetElement = newWindow.document.getElementById(itemName);
        if (targetElement) {
          const topOffset = targetElement.getBoundingClientRect().top;
          newWindow.scrollTo(0, topOffset + 10);
        }
      };
    } else if (ref) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }

    setOpen(false);
  };

  const toggleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <header className="bg-white sm:flex md:justify-between md:shadow-md sm:items-center px-8 sm:py-1 fixed top-0 left-0 w-full z-[100]">
      <div className="flex justify-between py-2 sm:p-0 items-center">
        <Link to="/" className="flex items-center">
          <img
            src={Logo}
            className="md:h-[40px] h-[46px] relative z-10 object-contain"
            alt="Logo"
          />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          type="button"
          className="sm:hidden text-gray-500 hover:text-black focus:outline-none flex items-center"
        >
          <GiHamburgerMenu size={28} className="text-black" />
        </button>
      </div>
      <ul
        className={`${
          open ? "flex" : "hidden"
        } sm:flex w-full lg:w-[55%] sm:h-auto sm:w-auto flex-col md:flex-row items-center justify-center md:justify-end bg-white sm:bg-transparent transition-all duration-300 ease-in-out`}
      >
        <li
          className={`p-2 lg:p-3 mx-2 lg:mx-3 text-black text-sm lg:text-base cursor-pointer text-center font-semibold hover:bg-[#509FCF] md:hover:text-blue-500 md:hover:bg-transparent ${
            location.hash === "#home" ? "text-blue-500" : ""
          }`}
          onClick={() => handleItemClick("home", refs.homeRef)}
        >
          Home
        </li>
        <li className="relative p-2 lg:p-3 mx-2 lg:mx-3 text-black text-sm lg:text-base cursor-pointer text-center font-semibold hover:bg-[#509FCF] md:hover:text-blue-500 md:hover:bg-transparent z-10">
          <div
            className="flex items-center justify-between"
            onClick={() => toggleDropdown("about")}
          >
            About Us
            <FaChevronDown
              className={`ml-2 transition-transform ${
                dropdownOpen === "about" ? "rotate-180" : ""
              }`}
            />
          </div>
          {dropdownOpen === "about" && (
  <ul className="absolute top-full left-0 w-[250px] text-start bg-white shadow-md rounded-md mt-2">
    <li className="p-2 text-black hover:bg-[#509FCF] cursor-pointer">
      <Link to="/about" className="block w-full h-full">
        Founder and Directors
      </Link>
    </li>
    <li className="p-2 text-black hover:bg-[#509FCF] cursor-pointer">
      <Link to="/donation" className="block w-full h-full">
        Habulus Foundation
      </Link>
    </li>
  </ul>
)}

        </li>
        <li
          className={`p-2 lg:p-3 mx-2 lg:mx-3 text-black text-sm lg:text-base cursor-pointer text-center font-semibold hover:bg-[#509FCF] md:hover:text-blue-500 md:hover:bg-transparent ${
            location.hash === "#home" ? "text-blue-500" : ""
          }`}
          onClick={() => handleItemClick("companies", refs.companiesRef)}
        >
          Companies
        </li>
        <li className="relative p-2 lg:p-3 mx-2 lg:mx-3 text-black text-sm lg:text-base cursor-pointer text-center font-semibold hover:bg-[#509FCF] md:hover:text-blue-500 md:hover:bg-transparent">
          <div
            className="flex items-center justify-between"
            onClick={() => toggleDropdown("projects")}
          >
            Projects
            <FaChevronDown
              className={`ml-2 transition-transform ${
                dropdownOpen === "projects" ? "rotate-180" : ""
              }`}
            />
          </div>
          {dropdownOpen === "projects" && (
  <ul className="text-start absolute top-full left-3 w-[250px] bg-white shadow-md rounded-md mt-2">
    <li className="p-2 text-black hover:bg-[#509FCF] cursor-pointer">
      <Link to="/completed-projects" className="block w-full h-full">
        Completed Project
      </Link>
    </li>
    <li className="p-2 text-black hover:bg-[#509FCF] cursor-pointer">
      <Link to="/under-construction" className="block w-full h-full">
        Under Construction Project
      </Link>
    </li>
    <li className="p-2 text-black hover:bg-[#509FCF] cursor-pointer">
      <Link to="/ready-to-move-in" className="block w-full h-full">
        Ready to Move In
      </Link>
    </li>
    <li className="p-2 text-black hover:bg-[#509FCF] cursor-pointer">
      <Link to="/upcoming-projects" className="block w-full h-full">
        Upcoming
      </Link>
    </li>
  </ul>
)}

        </li>
        <li
          className={`p-2 lg:p-3 mx-2 lg:mx-3 text-black text-sm lg:text-base cursor-pointer text-center font-semibold hover:bg-[#509FCF] md:hover:text-blue-500 md:hover:bg-transparent ${
            location.hash === "#home" ? "text-blue-500" : ""
          }`}
          onClick={() => handleItemClick("property", refs.propertyRef)}
        >
          Property
        </li>
        <li
          className={`p-2 lg:p-3 mx-2 lg:mx-3 text-black text-sm lg:text-base cursor-pointer text-center font-semibold hover:bg-[#509FCF] md:hover:text-blue-500 md:hover:bg-transparent ${
            location.hash === "#contact" ? "text-blue-500" : ""
          }`}
          onClick={() => handleItemClick("contact", refs.contactRef)}
        >
          Contact Us
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
