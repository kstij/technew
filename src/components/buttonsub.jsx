import React from "react";
import { GoArrowRight } from "react-icons/go";

const Button = ({ children, onClick }) => {
  return (
    <button
      type="button"
      className="text-white rounded-lg font-semibold bg-gradient-to-br from-green-400 to-green-600 group sm:px-5 sm:py-3 px-3 py-2 flex items-center gap-x-1 flex-shrink-0 transition-all duration-200 text-base xl:text-lg 2xl:text-xl relative overflow-hidden"
      onClick={onClick} // Propagate onClick event to parent component
    >
      <span>{children}</span>
      <div className="absolute inset-0 flex items-center justify-center group-hover:translate-x-1 transition-all duration-300">
        <GoArrowRight className="group-hover:translate-x-2 transition-all duration-300" size={18} />
      </div>
    </button>
  );
};

export default Button;
