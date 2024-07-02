import React from "react";
import "./weare.css";

function Weare() {
  return (
    <section className="weare-us-section">
      <div className="weare-us-border"></div>
      <div className="weare-us-container">
        {/* Image Section */}
        <div className="weare-us-image-section">
          <div className="weare-us-image-box">
            <img
              src="/assets/x.png"
              alt="weare Us"
              className="weare-us-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Weare;
