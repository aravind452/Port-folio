import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-18 flex items-center justify-between py-6 ">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        a
        className="flex flex-shrink-0 items-center"
      >
        <h1 className="font-semi-bold text-2xl">PORTFOLIO</h1>
      </motion.div>
      <div className="mx-4 flex items-center justify-center gap-4 text-2xl ">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          target="_blank"
          href="https://www.linkedin.com/in/aravindj2002/"
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          target="_blank"
          href="https://github.com/aravind452"
        >
          <FaGithub />
        </motion.a>
      </div>
    </nav>
  );
};

export default Navbar;
