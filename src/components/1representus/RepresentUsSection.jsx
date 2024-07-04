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
            <span className="jello">W</span>
            <span className="jello">e</span>
            <span className="jello">&nbsp;</span>
            <span className="jello">D</span>
            <span className="jello">r</span>
            <span className="jello">o</span>
            <span className="jello">p</span>
            <span className="jello">&nbsp;</span>
            <span className="jello">J</span>
            <span className="jello">a</span>
            <span className="jello">w</span>
            <span className="jello">s</span>
            <span className="jello">&nbsp;</span>
            <span className="jello">!</span>
            <span className="jello">!</span>
            <span className="jello">!</span>
          </h2>
          <div className="represent-us-description-container">
            <p className="represent-us-description">&nbsp;&nbsp;&nbsp;&nbsp;Host for free&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="represent-us-description1">&nbsp;&nbsp;&nbsp;&nbsp;Manage for free&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p className="represent-us-description2">&nbsp;&nbsp;&nbsp;&nbsp;1000+ Community Members&nbsp;&nbsp;&nbsp;&nbsp;</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RepresentUsSection;
