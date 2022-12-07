import AboutMe from "../container/AboutMe";
import ContactMe from "../container/ContactMe";
import HeroSection from "../container/HeroSection";
import Projects from "../container/Projects";
import Skills from "../container/Skills";

import {GoHome} from "react-icons/go";
import {FiUser} from "react-icons/fi";
import {GiSkills} from "react-icons/gi";
import {HiDesktopComputer} from "react-icons/hi";
import {FiMail} from "react-icons/fi";
export const navbaritems = [
  {
    img:<GoHome/>,
    link: "herosection",
    component: HeroSection,
    Label: "Home",
  },
  {
    img:<FiUser/>,
    link: "aboutme",
    component: AboutMe,
    Label: "About Me",
  },
  {
    img:<GiSkills/>,
    link: "skills",
    component: Skills,
    Label: "Skills",
  },
  {
    img:<HiDesktopComputer/>,
    link: "projects",
    component: Projects,
    Label: "Projects",
  },
  {
    img:<FiMail/>,
    link: "contactme",
    component: ContactMe,
    Label: "Contact Me",
  },
];
