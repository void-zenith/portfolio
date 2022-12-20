import React from "react";
import { navbaritems } from "./NavbarItems";

const NavbarItems = () => {
  const goToSection = (section) => {
    document
      .getElementById(section)
      .scrollIntoView({ block: "start", behavior: "smooth" });
  };
  return (
    <div className="navbaritems-container">
      <ul className="flex justify-center items-center">
        {navbaritems.map((items, id) => (
          <li key={id}>
            <a href={`#${items.link}`} onClick={() => goToSection(items.link)}>
              <div className="bottom-nav-img flex justify-center items-center rounded-full">
                {items.img}
              </div>
              <span>{items.Label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NavbarItems;
