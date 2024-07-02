// components/HeaderSection.jsx
import React from "react";

const HeaderSection = () => {
  return (
    <section className="mx-auto flex flex-col items-center justify-center h-screen">
      <h2 className="text-center text-accent font-bold text-4xl lg:text-5xl xl:text-6xl mt-12">
        The OG
        <span className="text-light-gray pl-2">Student Program Hub</span>
      </h2>
      <p className="mx-auto text-lg text-center xl:text-xl 2xl:text-2xl max-w-[50ch] lg:max-w-[80ch] mt-6 mb-8">
        Discover Mentorships, Fellowships, Hackathons, Internships and More in One Place to
        enhance your experience in tech. Updated Weekly
      </p>
    </section>
    
  );
};

export default HeaderSection;
