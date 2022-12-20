import React from "react";
import { GoCalendar } from "react-icons/go";
const AboutMe = () => {
  return (
    <section id="aboutme" className="aboutme-section section-t">
      <div className="zrb-container">
        <div className="section-head">
          <h1>Get To <span>Know Me</span></h1>
        </div>
        <div className="aboutme-container grid grid-cols-1 md:grid-cols-2">
          <div className="aboutme-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              doloremque doloribus veniam reiciendis culpa libero impedit.
              Reprehenderit nisi laborum eaque quia voluptatibus. Iusto soluta
              neque dolorum saepe! Exercitationem, laborum eveniet? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sit doloremque
              doloribus veniam reiciendis culpa libero impedit. Reprehenderit
              nisi laborum eaque quia voluptatibus. Iusto soluta neque dolorum
              saepe! Exercitationem, laborum eveniet?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              doloremque doloribus veniam reiciendis culpa libero impedit.
              Reprehenderit nisi laborum eaque quia voluptatibus. Iusto soluta
              neque dolorum saepe! Exercitationem, laborum eveniet? Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Sit doloremque
              doloribus veniam reiciendis culpa libero impedit. Reprehenderit
              nisi laborum eaque quia voluptatibus. Iusto soluta neque dolorum
              saepe! Exercitationem, laborum eveniet?
            </p>
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
                </div>
                <div className="date">
                  <GoCalendar />
                  <div className="startdate">2022/07/01</div>
                  <div className="enddate">Present</div>
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
