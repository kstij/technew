import React from "react";
import Logosimplewhite from "./Logosimplewhite";
import Button from "./Buttons";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="absolute top-0 z-50 w-full bg-opacity-90 backdrop-blur-sm shadow-md">
      <div className="border-b-2 border-b-dim-gray border-opacity-30 px-0 sm:px-8 lg:px-16 font-cabinG">
        <nav className="flex items-center justify-between py-2 sm:py-4 lg:py-6">
          <div className="flex items-center gap-2">
            <Logosimplewhite />
            <Link to="/">
              <h1 className="hidden sm:block font-bold text-h2 font-cabinG text-gray-700">
                TechAways
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/about" className="text-base xl:text-h6 2xl:text-h5 font-medium text-gray-800 hover:text-gray-600 transition-colors duration-300">
              About
            </Link>
            <Button
              target="_blank"
              href="https://forms.gle/MQHZajvzBzC1ks1r7"
              className="text-sm sm:text-base px-3 py-1 sm:px-4 sm:py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors duration-300"
            >
              Add Program
            </Button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
