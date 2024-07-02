// Navbar.jsx
import React, { useState } from "react";
import Logosimplewhite from "./Logosimplewhite";
import Button1 from "./Buttons1";
import Button from "./Buttons";
import { Link } from "react-router-dom"; // Import Link for navigation
import { FaBars } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="absolute top-0 z-50 w-full bg-opacity-90 backdrop-blur-sm shadow-md">
      <div className="border-b-2 border-b-dim-gray border-opacity-30 px-4 sm:px-8 lg:px-16 font-cabinG">
        <nav className="flex items-center justify-between py-2 sm:py-4 lg:py-6">
          <div className="flex items-center gap-2">
            <Logosimplewhite />
            <Link to="/">
              <h1 className="hidden sm:block font-bold text-h2 font-cabinG text-gray-700">
                TechAways
              </h1>
            </Link>
          </div>
          <div className="flex items-center lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-gray-600 transition-colors duration-300"
            >
              <FaBars size={24} />
            </button>
          </div>
          <div className="hidden lg:flex items-center gap-4 flex-1 justify-center">
            <Link
              to="/about"
              className="text-base xl:text-h6 2xl:text-h5 font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-base xl:text-h6 2xl:text-h5 font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300"
            >
              Blog
            </Link>
            <Link to="/opportunity">
              <Button1
                className="text-base xl:text-h6 2xl:text-h5 font-medium text-green-400 hover:text-green-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Opportunity
              </Button1>
            </Link>
          </div>
          <div className="hidden lg:flex items-center gap-4">
            <Button
              target="_blank"
              href="https://forms.gle/MQHZajvzBzC1ks1r7"
              className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              Organize
            </Button>
            <Button
              to="/signup"
              className="text-base xl:text-h6 2xl:text-h5 font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300"
            >
              Sign Up
            </Button>
          </div>
        </nav>
        <div className={`lg:hidden ${isOpen ? "block" : "hidden"} bg-[#0C0D0E]`}>
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              to="/about"
              className="text-base xl:text-h6 2xl:text-h5 font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/blog"
              className="text-base xl:text-h6 2xl:text-h5 font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link to="/opportunity">
              <Button1
                className="text-base xl:text-h6 2xl:text-h5 font-medium text-green-400 hover:text-green-600 transition-colors duration-300"
                onClick={toggleMenu}
              >
                Opportunity
              </Button1>
            </Link>
            <Button
              target="_blank"
              href="https://forms.gle/MQHZajvzBzC1ks1r7"
              className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
              onClick={toggleMenu}
            >
              Organize
            </Button>
            <Button
              to="/signup"
              className="text-base xl:text-h6 2xl:text-h5 font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
