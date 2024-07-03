import React from "react";
import "./weare.css";

function Weare() {
  return (
    <section className="weare-us-section">
      <div className="weare-us-border"></div>
      <div className="head-img">
        <img src="/assets/x.png"/>
      </div>
      <div className="heading">TechAways is<img src="/assets/whatarewe.png"/>?</div>
      <div className="weare-us-container-1 we1">
        <div className="weare-us-info-1">
          <div className="weare-us-info-box">
            <div className="info-square">1</div>
            <div className="info-rect"></div>
          </div>
          <p className="info-header">Your portal to the best Opportunity</p>
          <p className="info-text">
            Applying to hackathons on Devfolio is as simple as a click of a button. We save all the required info so that you don’t have to fill them over and over again.
          </p>
        </div>
        <div className="weare-us-image-section-1">
          <div className="weare-us-image-box">
            <img
              src="/assets/x.png"
              alt="weare Us"
              className="weare-us-image"
            />
          </div>
        </div>
      </div>
      <div className="weare-us-container-2 we2">
      <div className="weare-us-image-section-2">
          <div className="weare-us-image-box">
            <img
              src="/assets/x.png"
              alt="weare Us"
              className="weare-us-image"
            />
          </div>
        </div>
        <div className="weare-us-info-2">
          <div className="weare-us-info-box">
            <div className="info-square">2</div>
            <div className="info-rect"></div>
          </div>
          <p className="info-header">Comprehensive Resource Hub</p>
          <p className="info-text">
          Access a wealth of resources tailored to your needs. Whether you’re looking for the latest tech trends, tutorials, or industry insights, TechAways.tech has it all in one convenient location.          </p>
        </div>
      </div>
      <div className="weare-us-container-3 we3">
        <div className="weare-us-info-1">
          <div className="weare-us-info-box">
            <div className="info-square">3</div>
            <div className="info-rect"></div>
          </div>
          <p className="info-header">Connect and Grow Your Network</p>
          <p className="info-text">
          Join a vibrant community of tech enthusiasts and professionals. Network, collaborate, and grow together with TechAways.tech, where opportunities and talent meet.          </p>
        </div>
        <div className="weare-us-image-section-1">
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
