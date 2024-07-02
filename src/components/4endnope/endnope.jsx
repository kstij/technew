import React from "react";
import "./endnope.css";
import NewsletterSubscriptionForm from "./NewsletterSubscriptionForm";

function Endnope() {
  return (
    <section className="endnope-us-section">
      <div className="endnope-us-border"></div>
      <div className="endnope-us-container">
        {/* Text Section */}
        <div className="endnope-us-text-section">
          <h2 className="endnope-us-text-main">
            END ??
          </h2>
        </div>

        {/* Image Section */}
        <div className="endnope-us-image-section">
          <div className="endnope-us-image-box">
            <p className="endnope-us-image-text">Nope! We Are Still Upgrading</p>
            <NewsletterSubscriptionForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Endnope;
