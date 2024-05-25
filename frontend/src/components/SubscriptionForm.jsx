import React, { useState } from "react";
import Navbar from "./Navbar";
import { GoArrowRight } from "react-icons/go";
import './subscription.css';
import axios from 'axios';

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/subscribe', { email });
      if (response.status === 200) {
        setMessage("Thanks, You'll receive notification now onwards");
      } else {
        setMessage('Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting email:', error);
      setMessage('Something went wrong');
    }

    setEmail("");
  };

  return (
    <>
      <Navbar />
      <main className="font-cabinG">
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-16">
          <h2 className="text-center text-accent mx-auto font-bold text-4xl max-w-[15ch] lg:max-w-[30ch] m-2 lg:text-4xl xl:text-5xl ">
            Subscribe to 
            <span className="text-light-gray pl-2">Our Newsletter </span>
          </h2>
        </section>
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-16">
          <form onSubmit={handleSubmit} className="flex flex-col items-center mx-auto w-full max-w-md">
            <div className="w-full rounded-md px-4 py-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="transparent-input"
              />
            </div>
            <button
              type="submit"
              className="text-bg rounded-lg font-semibold bg-gradient-to-br from-green-400 to-green-600 group sm:px-5 sm:py-3 px-3 py-2 flex items-center gap-x-1 flex-shrink-0 transition-all duration-200 text-base xl:text-h6 2xl:text-h5"
            >
              <span>Subscribe</span>
              <div className="icon-container">
                <GoArrowRight className="icon" size={18} />
                <GoArrowRight className="icon" size={18} />
              </div>
            </button>
          </form>
          {message && <p className="text-center mt-4">{message}</p>}
        </section>
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-16">
          <h2 className="text-center text-accent mx-auto font-bold text-4xl max-w-[15ch] lg:max-w-[30ch] m-2 lg:text-4xl xl:text-5xl ">
            More Updates will be done soon
          </h2>
          <p className="mx-auto text-lg text-center xl:text-h6 2xl:text-h5 max-w-[30ch] lg:max-w-[60ch]">
            Soo jaao, kal subah utho, nahao, aur dekho kya naya hai!
          </p>
          <p className="mx-auto text-lg text-center xl:text-h6 2xl:text-h5 max-w-[30ch] lg:max-w-[60ch]">
            -kstij
          </p>
        </section>
      </main>
    </>
  );
}

export default Subscribe;
