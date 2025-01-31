import React from "react";
import { assets } from "../assets/assets";
import Button from "./Button";

const InspirationTwo = () => {
  return (
    <div className="flex flex-col w-full h-[720px] gap-[48px] px-4 sm:px-[10] md:px-[16] lg:px-20">
      <p className="h-[44px] font-500 text-[36px] leading-[44px] text-black">
        Discover Airbnb Experiences
      </p>

      
      <div className="gap-[24px] grid grid-cols-1 sm:grid-cols-2 w-full">
        {/* Image on the left */}
        <div className="flex flex-col w-full  justify-center relative">
          <img
            className="h-[628px] w-full  rounded-[8px]"
            src={assets.unsplashOne}
            alt=""
          />

          {/* text inside image */}
          <div className="flex flex-col gap-[24px] absolute top-[100px]">
            <p className=" font-500 text-[68px] leading-[56px] text-white  pl-[80px]">
              Things to do
            </p>
            <p className=" font-500 text-[68px] leading-[56px] text-white  pl-[80px]">
              on your trip
            </p>
            <Button text1={"Experiences"} width={"142px"}/>
          </div>
        </div>

        {/* Image on the right */}
        <div className="flex flex-col w-full  justify-center relative ">
          <img
            className="h-[628px] w-full  rounded-[8px]"
            src={assets.unsplashTwo}
            alt=""
          />
          {/* text inside image */}
          <div className="flex flex-col gap-[24px] absolute top-[100px]">
            <p className=" font-500 text-[68px] leading-[56px] text-white  pl-[80px]">
              Things to do
            </p>
            <p className=" font-500 text-[68px] leading-[56px] text-white  pl-[80px]">
              on your trip
            </p>
            <Button text1={"Online Experiences"} width={"195px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InspirationTwo;
