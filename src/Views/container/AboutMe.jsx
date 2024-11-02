import React from "react";
import { GoCalendar } from "react-icons/go";
const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutme-section section-t">
      <div className="zrb-container">
        <div className="section-head">
          <h1>
            Get To <span>Know Me</span>
          </h1>
        </div>
        <div className="aboutme-container grid grid-cols-1 md:grid-cols-2">
          <div className="aboutme-content ">
            <h2>Me, Myself & I</h2>
            <p>My name is Zenith Rajbhandari. I'm a Front End Developer based in
              Kathmandu, Nepal. I describe myself as a passionate developer who
              loves coding, designing, and developing eye-catching and performant
              websites. I have been working as a Front End Developer for 1 year.</p>

            <p>Aside from my interest in technology, I am also interested in cars
              and bikes. When I am not working you can find me hiking, travelling or trekking to mountains. I also like to try new foods. </p>
          </div>
          <div className="experience-content">
            <h2>Experience</h2>
            <ul>
              <li>
                <h3>
                  <span>01.</span>Genesis Web Technology
                </h3>
                <div className="skillsinvolved">
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>SCSS</p>
                  <p>JS</p>
                  <p>JQUERY</p>
                  <p>React JS</p>
                </div>
                <div className="date">
                  <GoCalendar />
                  <div className="startdate">2022/07/01</div>
                  <div className="enddate">2023/08/30</div>
                </div>
              </li>
              <li>
                <h3>
                  <span>02.</span>TechnoByte Pvt Ltd.
                </h3>
                <div className="skillsinvolved">
                  <p>CSS</p>
                  <p>SCSS</p>
                  <p>JS</p>
                  <p>React JS</p>
                </div>
                <div className="date">
                  <GoCalendar />
                  <div className="startdate">2021/09/03</div>
                  <div className="enddate">2022/02/01</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
