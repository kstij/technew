import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GoCheckCircle } from "react-icons/go";
import { useState, useEffect } from "react";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavbarMemo = React.memo(Navbar);
const FooterMemo = React.memo(Footer);

function About() {
  const [copied, setCopied] = useState(false);

  /* Noted in Notion */

  const copyToClipboard = () => {
    navigator.clipboard.writeText("kshitijvarma21@gmail.com");
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => {
        setCopied(false);
      }, 2000); // Change duration of the message display as needed

      return () => clearTimeout(timer);
    }
  }, [copied]);
  return (
    <>
      {/*  flex text-display text-h5 md:text-h2 max-w-[20ch] text-center text-accent mb-4 md:mb-0*/}

      {/* text-h6 md:text-h5 space-y-2 md:space-y-7 */}

      <section className="grid grid-cols-1 md:grid-cols-2 font-cabinG text-light-gray p-4 md:p-12">
        <header className="font-extrabold p-4 text-5xl text-accent space-y-2 lg:flex md:space-y-0 lg:space-x-4 2xl:pl-16">
          <Link
            to="/"
            className="font-semibold text-sm sm:text-base absolute flex top-0 left-0 text-gradient2 m-8 pt-20 sm:m-4 sm:pl-16 md:pt-24 lg:m-6 xl:pt-28 xl:pl-20 2xl:pt-36 2xl:pl-28 hover:text-outline transition-colors duration-150 ease-in"
          >
            <IoArrowBack className="size-" />
            Back
          </Link>
          <h1>About</h1>
          <h2 className=" text-light-gray">TechAways</h2>
        </header>
        <article className="text-h6 2xl:text-2xl p-4 2xl:pr-32 space-y-5">
          <p>
            Being a Tech Student, We need to keep ourselves updated with the
            latest opportunities in the tech industry. But it's hard to find all
            the opportunities in one place. We have to go through multiple
            websites to find the right opportunity for us.{" "}
            <strong>thats why</strong>
          </p>
          <p>
            {" "}
            I created <strong>TechAways</strong> to help students find all the
            opportunities in one place. Here you can find all the latest
            Mentorships, Fellowships, Hackathons, Internships and more in one
            place.
            <strong>[Check out the Footer for feedback form]</strong>
          </p>
          <p>
            The Design of this website is inspired by the{" "}
            <strong>huyNG</strong>
          </p>

          <div className="flex items-center gap-x-3 py-8">
            <div className="w-20 h-20 rounded-full overflow-hidden">
              <img
                src="./assets/profile.jpeg"
                alt="Profile Picture"
                className="rounded-full w-100 h-100"
              />
            </div>
            <div className="text-primary text-base xl:text-h6 2xl:text-h5 font-medium flex flex-col">
              <p className=" leading-tight">Kshitij Varma</p>
              <span
                className="leading-tight text-light-gray font-cabinG  cursor-pointer hover:underline relative"
                onClick={copyToClipboard}
              >
                kshitijvarma21@gmai.com
                {copied && (
                  <span className="animate-pulse text-light-gray absolute right-[-10px]  mt-[-70px] text-xs ">
                    Copied to clipboard!{" "}
                    <GoCheckCircle className="fill-green-500 stroke-[0.2] " />
                  </span>
                )}
              </span>
            </div>
          </div>
        </article>
        <div className="flex justify-center items-center"></div>
      </section>

      <FooterMemo />
    </>
  );
}

export default About;
