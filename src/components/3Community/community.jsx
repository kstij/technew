import React from "react";
import { GoArrowRight } from "react-icons/go";
import "./community.css";

function Community() {
  const handleJoinCommunity = () => {
    const whatsappLink = `https://chat.whatsapp.com/DvlQu3m5VAuAn7pNLgJ9bY}`;
    window.open(whatsappLink, "_blank");
  };

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
          <h2 className="community-us-text-main">Join TechAways</h2>
          <h2 className="community-us-text-main">Community</h2>
          <div className="community-us-description-container">
            <button className="community-us-button" onClick={handleJoinCommunity}>
              Join Our Community
              <span className="button-arrow">
                <GoArrowRight size={18} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
