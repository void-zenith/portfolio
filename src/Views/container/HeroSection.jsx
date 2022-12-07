import React from "react";
import herobg from "../../Assets/Images/hero-bg.png";
import zenith1 from "../../Assets/Images/zenith-2.JPG";
const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${herobg})` }}
      className="herosection"
      id="herosection"
    >
      <div className="zrb-container flex justify-between items-center ">
        <div className="hero-textcontainer">
          <p className="greeting-text">Hey There!👋 I am,</p>
          <h3>Zenith Rajbhandari</h3>
          <p className="hero-content">
            I'm a Frontend Developer based in Kathmandu, Nepal. I love to create
            beautiful and performant products with delightful user experiences.
          </p>
          <a href="/#" className="create-btn cta-btn cta-primary ">
            <span>LET’S CREATE SOMETHING SPECIAL</span>
          </a>
        </div>
        <div className="image-container">
          <img src={zenith1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
