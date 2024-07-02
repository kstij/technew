import React from "react";
import "./RepresentUsSection.css";

function RepresentUsSection() {
  return (
    <section className="represent-us-section">
      <div className="represent-us-border"></div>
      <div className="represent-us-container">
        {/* Image Section */}
        <div className="represent-us-image-section">
          <div className="represent-us-image-box">
            <img
              src="/assets/x.png"
              alt="Represent Us"
              className="represent-us-image"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="represent-us-text-section">
          <h2 className="represent-us-text-main">
            We Drop Jaws !!!
          </h2>
          <div className="represent-us-description-container">
            <p className="represent-us-description">Host for free</p>
            <p className="represent-us-description1">Manage for free</p>
            <p className="represent-us-description2">1000+ Community Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RepresentUsSection;
