import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";

function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "https://tech.us17.list-manage.com/subscribe/post-json?u=8c6218502446179ce14f38ad9&id=e56b780a27&c=callback";

    const script = document.createElement('script');
    script.src = `${url}&EMAIL=${encodeURIComponent(email)}`;
    script.async = true;

    window.callback = (data) => {
      if (data.result === "success") {
        setMessage("Thanks, you'll receive notifications now onwards.");
      } else {
        setMessage(data.msg || "Something went wrong.");
      }
      setEmail("");
    };

    script.onload = () => {
      document.head.removeChild(script);
      delete window.callback;
    };

    script.onerror = () => {
      setMessage("Something went wrong.");
      document.head.removeChild(script);
      delete window.callback;
    };

    document.head.appendChild(script);
  };

  return (
    <>
      {/* Divider */}
      <div className="border-b-2 border-dim-gray border-opacity-30 pb-6 ml-6 mr-6 lg:ml-10 lg:mr-10 mt-8 "></div>
      
      <main className="font-cabinG">
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-16">
          <h2 className="text-center text-accent mx-auto font-bold text-4xl max-w-[15ch] lg:max-w-[30ch] m-2 lg:text-4xl xl:text-5xl ">
            Subscribe To
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
                placeholder="Enter Your Email"
                className="transparent-input"
                style={{
                  border: "2px solid #38a169",
                  backgroundColor: "transparent", // Static green background color
                  color: "white", // White text color
                  padding: "0.75rem",
                  borderRadius: "100px", // Rounded border
                  fontSize: "1rem",
                  fontWeight: "bold", // Bold text
                  width: "100%",
                  outline: "none", // Remove default outline
                }}
                required
              />
            </div>
            <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
              <input type="text" name="b_8c6218502446179ce14f38ad9_e56b780a27" tabIndex="-1" value="" />
            </div>
            <button
              type="submit"
              className="text-bg rounded-lg font-semibold bg-gradient-to-br from-green-400 to-green-600 group sm:px-5 sm:py-3 px-3 py-2 flex items-center gap-x-1 flex-shrink-0 transition-all duration-200 text-base xl:text-h6 2xl:text-h5"
            >
              <span>Subscribe</span>
              <div className="icon-container">
                <GoArrowRight className="icon" size={18} />
              </div>
            </button>
          </form>
          {message && <p className="text-center mt-4">{message}</p>}
        </section>
        <section className="mx-auto flex flex-col items-center space-y-5 mt-20 mb-16">
          <p className="mx-auto text-lg text-center xl:text-h6 2xl:text-h5 max-w-[30ch] lg:max-w-[60ch]">
           To get the Latest Opportunities and Updates Right into yout MailBox
          </p>
        </section>
      </main>
    </>
  );
}

export default Subscribe;
