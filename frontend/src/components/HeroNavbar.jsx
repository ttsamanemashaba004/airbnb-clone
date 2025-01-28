import React, { useState } from "react";
import { assets } from "../assets/assets";

import { Link, NavLink } from "react-router-dom";

const HeroNavbar = () => {
  const [placeVisible, setPlaceVisible] = useState(true);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [onlineExperienceVisible, setOnlineExperienceVisible] = useState(false);

  return (
    <div className=" w-full h-[48px] flex gap-[24px] justify-between items-center">
      {/* Logo */}
      <div className="h-[32px]  cursor-pointer ">
        <img src={assets.white_logo} alt="" />
      </div>

      {/* Static pages- middle section of navbar */}
      <div className="hidden  h-[30px] lg:flex gap-[32px] cursor-pointer ">
        <div
          className="flex flex-col gap-[4px]  h-[30px]   items-center"
          onClick={() => (
            setPlaceVisible(true),
            setExperienceVisible(false),
            setOnlineExperienceVisible(false)
          )}
        >
          <p className="  h-[24px] font-400 text-[16px] leading-[24px] text-white">
            Place to stay
          </p>
          <hr
            className={`w-[16px] h-[2px]  bg-white ${
              placeVisible ? "" : "hidden"
            }`}
          />
        </div>
        <div
          className="flex flex-col gap-[4px]  h-[30px] items-center"
          onClick={() => (
            setPlaceVisible(false),
            setExperienceVisible(true),
            setOnlineExperienceVisible(false)
          )}
        >
          <p className="h-[24px] font-400 text-[16px] leading-[24px] text-white">
            Experiences
          </p>
          <hr
            className={`w-[16px] h-[2px]  bg-white ${
              experienceVisible ? "" : "hidden"
            }`}
          />
        </div>
        <div
          className="flex flex-col gap-[4px]  h-[30px]   items-center"
          onClick={() => (
            setPlaceVisible(false),
            setExperienceVisible(false),
            setOnlineExperienceVisible(true)
          )}
        >
          <p className="  h-[24px] font-400 text-[16px] leading-[24px] text-white">
            Online Experiences
          </p>
          <hr
            className={`w-[16px] h-[2px]  bg-white ${
              onlineExperienceVisible ? "" : "hidden"
            }`}
          />
        </div>
      </div>

      {/* Right side of navbar */}
      <div className="flex gap-[16px] h-[48px]   justify-end items-center cursor-pointer">
        <p className=" h-[20px] font-500 text-[14px] leading-[20px] text-white">
          Become a Host
        </p>
        <img className=" h-[24px]" src={assets.globe} alt="" />
        <div className="  h-[48px] rounded-[100px] py-[8px] pl-[16px] pr-[8px] flex gap-[8px] bg-white">
          <img className="w-[24px] h-[24px]" src={assets.menu} alt="" />
          <img className="w-[24px] h-[24px]" src={assets.avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroNavbar;
