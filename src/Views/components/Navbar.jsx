import React from "react";
// import logo from "../../Assets/Images/logo.png";
import logo from "../../Assets/Images/zenith-logo.png";
import { BiDownload } from "react-icons/bi";
const Navbar = () => {
  return (
    <nav className="navbar-container ">
      <div className="zrb-container mx-auto flex justify-between items-center ">
        <div className="site-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="icons-container">
          <a href="ZenithRajbhandariCV.pdf" download="Zenith-Rajbhandari-CV.pdf" className="cta-btn cta-outline">
            <BiDownload />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
