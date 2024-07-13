import React from "react";
import profilePic from "../assets/kevinRushProfile.png";
import { HERO_CONTENT } from "../constants";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-12 text-6xl font-thin tracking-tight lg:mt-6 lg:text-8xl">
              Aravind J
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent sm:text-4xl">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full border border-blue-400 lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="profileimage" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
