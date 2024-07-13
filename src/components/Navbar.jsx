import React from "react";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-18 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <h1 className="font-bold text-3xl">PORTFOLIO</h1>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a target="_blank" href="https://www.linkedin.com/in/aravindj2002/">
          <FaLinkedin />
        </a>
        <a target="_blank" href="https://github.com/aravind452">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
