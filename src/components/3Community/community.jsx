import React from "react";
import "./community.css";

function Community() {
  return (
    <section className="community-us-section">
      <div className="community-us-container">
        {/* Image Section */}
        <div className="community-us-image-section">
          <div className="community-us-image-box">
            <img
              src="/assets/x.png"
              alt="community Us"
              className="community-us-image"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="community-us-text-section">
          <h2 className="community-us-text-main">
            Join TechAways
          </h2>
          <h2 className="community-us-text-main">
            Community
          </h2>
          <div className="community-us-description-container">
            <button className="community-us-button">Join Our Community</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
