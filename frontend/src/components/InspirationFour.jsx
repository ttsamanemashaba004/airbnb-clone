import React from "react";
import { assets } from "../assets/assets";
import Button from "./Button";

const InspirationFour = () => {
  return (
    <div className="flex flex-col w-full  justify-center relative overflow-hidden h-[640px]">
      <img
        className=" w-full h-full  object-cover rounded-[8px]"
        src={assets.woman}
        alt=""
      />

      {/* text inside image */}
      <div className="flex flex-col gap-[16px] absolute top-[100px]">
        <p className=" font-500 text-[68px] leading-[56px] text-white  pl-[80px] ">
          Questions
        </p>
        <p className=" font-500 text-[68px] leading-[56px] text-white  pl-[80px] ">
          about
        </p>
        <p className=" font-500 text-[68px] leading-[56px] text-white  pl-[80px] ">
          hosting?
        </p>
      </div>
      <button
        className={`h-[56px] rounded-[8px] py-[16px] px-[24px] bg-white border-1-[#E5E7EB] max-w-[174px]  font-500 leading-[24px] text-[#374151] text-[16px] ml-[80px] absolute bottom-[100px]`}
      >
        Ask a Superhost
      </button>
    </div>
  );
};

export default InspirationFour;
