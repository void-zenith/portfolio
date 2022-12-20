import React from "react";
import react from "../../Assets/Images/react.png";
import css from "../../Assets/Images/css.png";
import html from "../../Assets/Images/html-5.png";
import js from "../../Assets/Images/js.png";
import tailwind from "../../Assets/Images/tailwind.png";
import sass from "../../Assets/Images/sass.png";
const Skills = () => {
  return (
    <section id="skills" className="skills-section section-t">
      <div className="zrb-container">
        <div className="section-head">
          <h1>
            <span>Skills</span> I've <span>gained</span> so far
          </h1>
        </div>
        <div className="skills-container flex flex-wrap gap-y-5 items-center justify-center">
          <div className="eachskills basis-1/3 md:basis-1/4 flex justify-center items-center">
            <img src={react} alt="" />
          </div>
          <div className="eachskills basis-1/3 md:basis-1/4 flex justify-center items-center">
            <img src={css} alt="" />
          </div>
          <div className="eachskills basis-1/3 md:basis-1/4 flex justify-center items-center">
            <img src={html} alt="" />
          </div>
          <div className="eachskills basis-1/3 md:basis-1/4 flex justify-center items-center">
            <img src={js} alt="" />
          </div>
          <div className="eachskills basis-1/3 md:basis-1/4 flex justify-center items-center">
            <img src={tailwind} alt="" />
          </div>
          <div className="eachskills basis-1/3 md:basis-1/4 flex justify-center items-center">
            <img src={sass} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
