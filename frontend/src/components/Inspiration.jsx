import React from "react";
import InspirationOne from "./InspirationOne";
import InspirationTwo from "./InspirationTwo";
import InspirationThree from "./InspirationThree";
import InspirationFour from "./InspirationFour";
import PreFooter from "./PreFooter";

const Inspiration = () => {
  return (
    <div className="h-[2952px] flex flex-col gap-[96px] pt-[48px] bg-white ">
      <InspirationOne />
      <InspirationTwo />
      <InspirationThree />
      <InspirationFour />
      <div className="bg-[#f7f7f7] lg:px-[0px] w-full pb-[48px] pt-[48px]">
        <PreFooter />
      </div>
    </div>
  );
};

export default Inspiration;
