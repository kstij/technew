import React from "react";
import { Link } from "react-router-dom";
import Button1 from "./Buttons1";

const HeaderSection = () => {
  return (
    <section className="mx-auto flex flex-col items-center justify-center h-screen">
      <h2 className="text-center text-accent font-bold text-4xl lg:text-5xl xl:text-6xl mt-12" style={{ fontFamily: 'Poppins' }}>
        The OG
        <span className="text-light-gray pl-2" style={{ fontFamily: 'Poppins' }}>Student Program Hub</span>
      </h2>
      <p className="mx-auto text-lg text-center xl:text-xl 2xl:text-2xl max-w-[50ch] lg:max-w-[80ch] mt-6 mb-8" style={{ fontFamily: 'Poppins' }}>
        Discover Mentorships, Fellowships, Hackathons, Internships and More in One Place to
        enhance your experience in tech. Updated Weekly
      </p>
      <Link to="/opportunity">
        <Button1
          className="text-base xl:text-h6 2xl:text-h5 font-medium text-green-400 hover:text-green-600 transition-colors duration-300"
        >
          Find An Opportunity
        </Button1>
      </Link>
    </section>
  );
};

export default HeaderSection;
