import React from "react";
import { navbaritems } from "./NavbarItems";

const NavbarItems = () => {
  return (
    <div className="navbaritems-container">
      <ul>
        {navbaritems.map((items) => (
          <li>
            <a href={`#${items.link}`}>
              <div className="bottom-nav-img">{items.img}</div>
              <span>{items.Label}</span>
            </a>
          </li>
        ))}
      </ul> 
    </div>
  );
};

export default NavbarItems;
