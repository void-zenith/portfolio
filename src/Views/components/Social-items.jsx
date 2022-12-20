import React from "react";
import { socialmedaitems } from "./socialmediaitems";

const SocialItems = () => {
  return (
    <div className="socialitems-container">
      <ul className="flex justify-start items-center mt-6 gap-4">
        {socialmedaitems.map((item, id) => (
          <li key={id}>
            <a href={item.link}>{item.img}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialItems;
