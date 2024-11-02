import React from "react";
import herobg from "../../Assets/Images/hero-bg.png";
import zenith1 from "../../Assets/Images/Zenith-4.jpg";
import SocialItems from "../components/Social-items";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${herobg})` }}
      className="herosection"
      id="herosection"
    >
      <div className="zrb-container flex md:justify-between items-center flex-wrap ">
        <div className="hero-textcontainer md:basis-1/2 ">
          <p className="greeting-text">Hey There!👋 I am,</p>
          <h3>Zenith Rajbhandari</h3>
          <p className="hero-content">
            I'm a Frontend Developer based in Kathmandu, Nepal. I love to create
            beautiful and performant products with delightful user experiences.
          </p>
          <SocialItems />
          <a href="/#" className="create-btn cta-btn cta-primary ">
            <span>LET’S CREATE SOMETHING SPECIAL</span>
          </a>
        </div>
        <div className="image-container md:basis-1/2">
          <img src={zenith1} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
