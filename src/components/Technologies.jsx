import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandMysql } from "react-icons/tb";
import { FaGitSquare } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="my-16 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap justify-center  gap-4"
      >
        <div className="flex flex-col p-4">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900 flex justify-center"
          >
            <RiReactjsLine className="text-6xl  text-cyan-400 px-2" />
          </motion.div>
          <p className="text-center  mt-1">ReactJS</p>
        </div>

        <div className="flex flex-col p-4">
          <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900 flex justify-center"
          >
            <SiMongodb className="text-6xl  text-green-400 px-2" />
          </motion.div>
          <p className="text-center mt-1">MongoDB</p>
        </div>
        <div className="flex flex-col p-4">
          <motion.div
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900 flex justify-center"
          >
            <SiExpress className="text-6xl  text-cyan-400 px-2 " />
          </motion.div>
          <p className="text-center  mt-1">ExpressJS</p>
        </div>
        <div className="flex flex-col p-4">
          <motion.div
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900"
          >
            <FaJava className="text-6xl  text-red-800 px-3" />
          </motion.div>
          <p className="text-center  mt-1">Java</p>
        </div>
        <div className="flex flex-col p-4">
          <motion.div
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900"
          >
            <FaPython className="text-6xl  text-yellow-400 px-2" />
          </motion.div>
          <p className="text-center  mt-1">Python</p>
        </div>
        <div className="flex flex-col p-4">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900"
          >
            <TbBrandMysql className="text-6xl  text-blue-400 px-2" />
          </motion.div>
          <p className="text-center  mt-1">MySQL</p>
        </div>
        <div className="flex flex-col p-4">
          <motion.div
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-900"
          >
            <FaGitSquare className="text-6xl  text-red-900 px-2" />
          </motion.div>
          <p className="text-center  mt-1">Git</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
