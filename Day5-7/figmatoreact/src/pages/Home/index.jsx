import React from "react";
import "./index.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
     

      <div className="right-sectio">
      <div className="left-sectio">
        <h1 className="hero-title">WebbyPages</h1>
        <p className="hero-subtitle">
          Get inspired and build faster with our landing pages kit
        </p>

        <ul className="feature-list">
          <li>13 Landing Pages for Desktop and Mobile</li>
          <li>10+ Extra Sections</li>
          <li>100+ components and variants</li>
          <li>250+ global design styles</li>
        </ul>
        </div>
        <img
          src="/images/Pages.png"
          alt="Hero Thumbnails"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default HomePage;
