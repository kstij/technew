import React from "react";
import { GoArrowRight } from "react-icons/go";

export default function Button1({ children, href }) {
  return (
    <a
      href={href}
      className="text-white rounded-lg font-semibold border-white border-2 hover:bg-gray-800 group sm:px-5 sm:py-3 px-3 py-2 flex items-center gap-x-1 flex-shrink-0 transition-all duration-200 text-base xl:text-h6 2xl:text-h5"
      style={{ backgroundColor: "transparent" }}
    >
      <span className="text-green-400">{children}</span>
      <div className="relative overflow-hidden">
        <GoArrowRight
          className="group-hover:translate-x-5 transition-all ease-in-out-circ duration-500"
          size={18}
        />
        <GoArrowRight
          className="absolute top-0 -translate-x-5 group-hover:translate-x-0 transition-all duration-500 ease-in-out-circ"
          size={18}
        />
      </div>
    </a>
  );
}
