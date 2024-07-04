import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar"; // Adjust path if necessary
import Footer from "./Footer";
import Sidenavigationbar from "./Sidenavigationbar";
import Card from "./Card/Card";
import Skeleton from "./Card/Skeleton";
import Custombutton from "./Custombutton";
import PlusIcon from "./Plusicon";
import getContent from "../utils/getContent";

const OpportunityPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [content, setContent] = useState([]);
  const [selectedButton, setSelectedButton] = useState("All");
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [selectedMonths, setSelectedMonths] = useState(new Date().toLocaleString('default', { month: 'long' }));

  const { getOpporunities } = getContent();
  const programs = ["All", "Internships", "Open Source Programs", "Women", "Student Programs", "Hackathons", "Mentorships"];

  useEffect(() => {
    setIsLoading(true);
    getOpporunities().then((response) => {
      setContent(response);
      setIsLoading(false);
    });
  }, []);

  const location = useLocation();

  const handleButtonClick = (text) => {
    setSelectedButton(selectedButton === text ? "All" : text);
  };

  return (
    <>
      <Navbar />
      <div className="mt-28 px-5 sm:px-10 lg:px-16 py-8">
        <section>
          <div className="sticky top-6 z-50 bottom-0 left-0 right-0 bg-bg p-4 flex flex-col sm:flex-row justify-center gap-x-2 gap-y-2 sm:hidden">
            <button
              className="py-4 px-4 flex gap-x-1 font-bold border bg-dark-charcoal border-dim-gray rounded-md hover:border-text transition-all text-sm items-center w-full justify-between text-accent"
              onClick={() => setIsButtonClicked(!isButtonClicked)}
            >
              All
              <span>
                <PlusIcon />
              </span>
            </button>
            {isButtonClicked &&
              programs.map((program) => (
                <Custombutton
                  key={program}
                  text={program}
                  count={program === "All" ? content.length : content.filter((item) => item.program === program).length}
                  isSelected={selectedButton === program}
                  onClick={() => handleButtonClick(program)}
                />
              ))}
          </div>
          <div className="sticky top-0 z-50 mb-8 justify-center gap-x-2 flex-wrap gap-y-2 hidden sm:flex">
            <div className="flex gap-x-0 bg-dark-charcoal rounded-xl border border-outline border-opacity-15">
              {programs.map((program) => (
                <Custombutton
                  key={program}
                  text={program}
                  count={program === "All" ? content.length : content.filter((item) => item.program === program).length}
                  isSelected={selectedButton === program}
                  onClick={() => handleButtonClick(program)}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="flex flex-col 2xl:mr-12 md:grid md:grid-cols-3 gap-2">
          <div className="order-1 md:order-2">
            <Sidenavigationbar selectedMonths={selectedMonths} setSelectedMonths={setSelectedMonths} />
          </div>
          <div className="order-1 md:order-2 col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 gap-y-6 px-14 md:pl-0 md:pr-14 md:ml-36px 2xl:ml-4">
            {isLoading ? (
              <Skeleton />
            ) : (
              content
                .filter((card) => (selectedButton === "All" || card.program === selectedButton) && (selectedMonths.length === 0 || selectedMonths.includes(card.month)))
                .map((card, index) => (
                  <div key={index}>
                    <Link to={{ pathname: `/programs/${card.slug}`, state: { month: card.month, title: card.title } }}>
                      <Card month={card.month} title={card.title} program={card.program} picUrl={card.image ? `https:${card.image}` : ""} />
                    </Link>
                  </div>
                ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OpportunityPage;
