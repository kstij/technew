// Subscribe.jsx

import React from "react";
import Navbar from "./Navbar";

function Subscribe() {
  return (
    <>
      <Navbar />
      <main className="font-cabinG">
        {/* hero section */}
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-16">
          <h2 className="text-center text-accent mx-auto font-bold text-4xl max-w-[15ch] lg:max-w-[30ch] m-2 lg:text-4xl xl:text-5xl ">
            Right Now
            <span className="text-light-gray pl-2">Working on this </span>
          </h2>
        </section>
        {/* Subscription Thanks */}
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-16">
          <h2 className="text-center text-accent mx-auto font-bold text-4xl max-w-[15ch] lg:max-w-[30ch] m-2 lg:text-4xl xl:text-5xl ">
            Under Development!
          </h2>
          <p className="mx-auto text-lg text-center xl:text-h6 2xl:text-h5 max-w-[30ch] lg:max-w-[60ch]">
            Kstij will soon update this.
          </p>
        </section>
      </main>
    </>
  );
}

export default Subscribe;
