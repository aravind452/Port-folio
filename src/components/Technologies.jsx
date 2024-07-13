import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h1 className="my-16 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap justify-center  gap-4">
        <div className="flex flex-col p-4">
          <div className="rounded-2xl border-4 border-neutral-900 flex justify-center">
            <RiReactjsLine className="text-6xl  text-cyan-400 px-2" />
          </div>
          <p className="text-center  mt-1">ReactJS</p>
        </div>

        <div className="flex flex-col p-4">
          <div className="rounded-2xl border-4 border-neutral-900 flex justify-center">
            <SiMongodb className="text-6xl  text-green-400 px-2" />
          </div>
          <p className="text-center mt-1">MongoDB</p>
        </div>
        <div className="flex flex-col p-4">
          <div className="rounded-2xl border-4 border-neutral-900 flex justify-center">
            <SiExpress className="text-6xl  text-cyan-400 px-2 " />
          </div>
          <p className="text-center  mt-1">ExpressJS</p>
        </div>
        <div className="flex flex-col p-4">
          <div className="rounded-2xl border-4 border-neutral-900">
            <FaJava className="text-6xl  text-red-800 px-3" />
          </div>
          <p className="text-center  mt-1">Java</p>
        </div>
        <div className="flex flex-col p-4">
          <div className="rounded-2xl border-4 border-neutral-900">
            <FaPython className="text-6xl  text-yellow-400 px-2" />
          </div>
          <p className="text-center  mt-1">Python</p>
        </div>
        <div className="flex flex-col p-4">
          <div className="rounded-2xl border-4 border-neutral-900">
            <FaPython className="text-6xl  text-yellow-400 px-2" />
          </div>
          <p className="text-center  mt-1">Python</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
