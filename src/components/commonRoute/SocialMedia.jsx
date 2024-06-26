import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div>
      <ul className="lg:mt-10 mt-5 flex items-center gap-6">
        <li className="bg-primary bg-opacity-30 text-primary inline-block p-2 lg:p-3 text-lg lg:text-xl rounded-full border border-primary">
          <a href={"https://www.facebook.com/sadekur.rahman.73744"} target="blank">
            <FaFacebookF />
          </a>
        </li>

        <li className="bg-primary bg-opacity-30 text-primary inline-block p-2 lg:p-3 text-lg lg:text-xl rounded-full border border-primary">
          <a href={"https://www.linkedin.com/in/md-sadekur-rahman/"} target="blank">
            <FaLinkedinIn />
          </a>
        </li>

        <li className="bg-primary bg-opacity-30 text-primary inline-block p-2 lg:p-3 text-lg lg:text-xl rounded-full border border-primary">
          <a href={"https://github.com/sadekcric"} target="blank">
            <FiGithub />
          </a>
        </li>

        <li className="bg-primary bg-opacity-30 text-primary inline-block p-2 lg:p-3 text-lg lg:text-xl rounded-full border border-primary">
          <a href={"https://www.youtube.com/@user-yu1vx7yx4p/featured"} target="blank">
            <FaYoutube />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMedia;
