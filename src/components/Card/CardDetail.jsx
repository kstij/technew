import React from "react";
import { useParams, Link } from "react-router-dom";
import getContent from "../../utils/getContent";
import { useState, useEffect, memo } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import Navbar from "../Navbar";
import Button from "../Buttons";
import Footer from "../Footer";
import { IoArrowBack } from "react-icons/io5";
import NotFound from "../404/NotFound";

const Badge = memo(({ text }) => (
  <div className="flex items-center justify-center px-3 py-2 bg-primary rounded-full text-super-dark-gray font-bold text-xs xl:text-sm 2xl:text-base">
    <span className="flex">
      {text}
      <GoArrowUpRight />
    </span>
  </div>
));

function CardDetail() {
  const { cardSlug } = useParams();
  const [content, setContent] = useState([]);
  const [card, setCard] = useState(null);
  const { getOpporunities } = getContent();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getOpporunities().then((response) => {
      setContent(response);
      const matchedCard = response.find((card) => card.slug === cardSlug);
      setCard(matchedCard);
      setIsLoading(false);
    });
    window.scrollTo(0, 0);
  }, [cardSlug]);

  if (isLoading) {
    return null;
  }

  if (!card) {
    return <NotFound />;
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 font-cabinG px-6 md:grid-cols-2 gap-4 justify-items-center items-center" style={{ marginTop: "180px" }}>
        <Link
          to="/opportunity"
          className="font-semibold text-sm sm:text-base absolute flex top-0 left-0 text-gradient2 m-6 pt-20 sm:m-4 sm:pl-16 md:pt-24 xl:pt-28 xl:pl-20 2xl:pt-32 2xl:pl-28 hover:text-outline transition-colors duration-150 ease-in"
        >
          <IoArrowBack className="size-6 sm:size-7" />
          Back
        </Link>

        {/* left side */}
        <div className="bg-dark-charcoal border-4 mt-10 border-outline rounded-xl border-opacity-15 overflow-hidden w-full sm:w-3/4 hover:border-opacity-50 transition-colors duration-150 ease-in group container">
          <div className="bg-super-dark-gray flex relative items-center justify-center pb-[40%] pt-[40%] rounded-b-2xl">
            <div className="absolute w-3/4 rounded-3xl overflow-hidden transition-all shadow-shine group-hover:shadow-bright bg-transparent bg-opacity-0">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="flex p-6">
            <a href={card.blog} target="_blank" rel="noopener noreferrer">
              <Badge text="Read Blog" />
            </a>
          </div>
        </div>

        {/* right side */}
        <div className="pr-10 space-y-8 justify-items-center font-cabinG">
          <h1 className="text-xl ml-6 font-bold text-center mt-4 max-w-[30w] sm:text-3xl sm:font-bold sm:mt-10 2xl:text-5xl">
            {card.title}
          </h1>
          <p className="pl-10 text-base sm:text-left sm:pl-4 sm:text-lg lg:p-0 2xl:text-xl 2xl:p-0">
            {card.description}
          </p>
          <Button href={card.apply}>Visit Official Website</Button>
          <div>
            <div className="gap-x-1 grid grid-cols-12 border-t-2 border-outline border-opacity-20 py-2">
              <h2 className="font-semibold col-span-4 2xl:text-lg">Program</h2>
              <span className="col-span-8 text-text px-1 2xl:text-lg">
                {card.program}
              </span>
            </div>
            <div className="gap-x-1 grid border-t-2 border-t-dim-gray grid-cols-12">
              <h2 className="font-semibold col-span-4 pt-2 2xl:text-lg">
                Month
              </h2>
              <span className="flex flex-col col-span-8 text-text">
                <span className="py-2 border-b-2 border-outline border-opacity-20 px-1 2xl:text-lg">
                  {card.month}
                </span>
                <span className="flex space-x-6 py-2 border-b-2 border-outline border-opacity-20 px-1">
                  <a
                    href={card.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDiscord size={25} />
                  </a>
                  <a
                    href={card.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaYoutube size={25} />
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CardDetail;
