import React, { useState } from "react";

const PreFooter = () => {
  const [lineOneVisible, setLineOneVisible] = useState(true);
  const [lineTwoVisible, setLineTwoVisible] = useState(false);
  const [lineThreeVisible, setLineThreeVisible] = useState(false);
  const [lineFourVisible, setLineFourVisible] = useState(false);
  const [lineFiveVisible, setLineFiveVisible] = useState(false);
  const [lineSixVisible, setLineSixVisible] = useState(false);

  return (
    <div className="w-full h-[304px] flex flex-col gap-[32px]">
      {/* Header */}
      <div className="w-full h-[88px] flex flex-col gap=[16px]">
        {/* Inspiration text */}
        <div className="w-full h-[32px]">
          <p className="font-500 text-[24px] leading-[32px] text-black">
            Inspiration for future getaways
          </p>
        </div>
        {/* Tab Bar */}
        <div className="w-full h-[40px] flex gap-[24px]">
          <div
            className="max-w-[200px] w-full h-[40px] pt-[8px] flex flex-col gap-[10px] cursor-pointer"
            onClick={() => {
              setLineOneVisible(true),
                setLineTwoVisible(false),
                setLineThreeVisible(false),
                setLineFourVisible(false),
                setLineFiveVisible(false),
                setLineSixVisible(false);
            }}
          >
            <div className="h-[20px]">
              <p className={`font-500 text-[14px] leading-[20px] ${lineOneVisible ? "text-black" : "text-[#6B7280]" } `}>
                Destinations for arts & culture
              </p>
            </div>
            <hr
              className={`h-[2px] w-full bg-black ${
                lineOneVisible ? "" : "hidden"
              }`}
            />
          </div>
          <div
            className="max-w-[235px] w-full h-[40px] pt-[8px] flex flex-col gap-[10px] cursor-pointer"
            onClick={() => {
              setLineOneVisible(false),
                setLineTwoVisible(true),
                setLineThreeVisible(false),
                setLineFourVisible(false),
                setLineFiveVisible(false),
                setLineSixVisible(false);
            }}
          >
            <div className="h-[20px] ">
              <p className={`font-500 text-[14px] leading-[20px] ${lineTwoVisible ? "text-black" : "text-[#6B7280]" } `}>
                Destinations for autdoor adventure
              </p>
            </div>
            <hr
              className={`h-[2px] w-full bg-black ${
                lineTwoVisible ? "" : "hidden"
              }`}
            />
          </div>
          <div
            className="max-w-[111px] w-full h-[40px] pt-[8px] flex flex-col gap-[10px] cursor-pointer"
            onClick={() => {
              setLineOneVisible(false),
                setLineTwoVisible(false),
                setLineThreeVisible(true),
                setLineFourVisible(false),
                setLineFiveVisible(false),
                setLineSixVisible(false);
            }}
          >
            <div className="h-[20px]">
              <p className={`font-500 text-[14px] leading-[20px] ${lineThreeVisible ? "text-black" : "text-[#6B7280]" } `}>
                Mountain cabins
              </p>
            </div>
            <hr
              className={`h-[2px] w-full bg-black ${
                lineThreeVisible ? "" : "hidden"
              }`}
            />
          </div>
          <div
            className="max-w-[128px] w-full h-[40px] pt-[8px] flex flex-col gap-[10px] cursor-pointer "
            onClick={() => {
              setLineOneVisible(false),
                setLineTwoVisible(false),
                setLineThreeVisible(false),
                setLineFourVisible(true),
                setLineFiveVisible(false),
                setLineSixVisible(false);
            }}
          >
            <div className="h-[20px]">
              <p className={`font-500 text-[14px] leading-[20px] ${lineFourVisible ? "text-black" : "text-[#6B7280]" } `}>
                Beach destinations
              </p>
            </div>
            <hr
              className={`h-[2px] w-full bg-black ${
                lineFourVisible ? "" : "hidden"
              }`}
            />
          </div>
          <div
            className="max-w-[138px] w-full h-[40px] pt-[8px] flex flex-col gap-[10px] cursor-pointer "
            onClick={() => {
              setLineOneVisible(false),
                setLineTwoVisible(false),
                setLineThreeVisible(false),
                setLineFourVisible(false),
                setLineFiveVisible(true),
                setLineSixVisible(false);
            }}
          >
            <div className="h-[20px]">
              <p className={`font-500 text-[14px] leading-[20px] ${lineFiveVisible ? "text-black" : "text-[#6B7280]" } `}>
                Popular destinations
              </p>
            </div>
            <hr
              className={`h-[2px] w-full bg-black ${
                lineFiveVisible ? "" : "hidden"
              }`}
            />
          </div>
          <div
            className="max-w-[89px] w-full h-[40px] pt-[8px] flex flex-col gap-[10px] cursor-pointer"
            onClick={() => {
              setLineOneVisible(false),
                setLineTwoVisible(false),
                setLineThreeVisible(false),
                setLineFourVisible(false),
                setLineFiveVisible(false),
                setLineSixVisible(true);
            }}
          >
            <div className="h-[20px]">
              <p className={`font-500 text-[14px] leading-[20px] ${lineSixVisible ? "text-black" : "text-[#6B7280]" } `}>
                Unique Stays
              </p>
            </div>
            <hr
              className={`h-[2px] w-full bg-black ${
                lineSixVisible ? "" : "hidden"
              }`}
            />
          </div>
        </div>
      </div>
      {/* Row 1 */}
      <div className="w-ful h-[40px] flex gap-[24px]">
        <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">Phoenix</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">Arizona</p>
        </div>
        <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">Hot Springs</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">Arkansas</p>
        </div>
        <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">Los Angeles</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">California</p>
        </div>
        <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">San Diego</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">California</p>
        </div>
      </div>
      {/* Row 2 */}
      <div className="w-ful h-[40px] flex gap-[24px]">
      <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">Phoenix</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">Arizona</p>
        </div>
        <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">Hot Springs</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">Arkansas</p>
        </div>
        <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">Los Angeles</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">California</p>
        </div>
        <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">San Diego</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">California</p>
        </div>
      </div>
      {/* Row 3 */}
      <div className="w-ful h-[40px] flex gap-[24px]">
      <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">Phoenix</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">Arizona</p>
        </div>
        <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">Hot Springs</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">Arkansas</p>
        </div>
        <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">Los Angeles</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">California</p>
        </div>
        <div className="max-w-[302px] w-full h-[40px]">
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-black">San Diego</p>
            <p className="w-full h=[20px] font-400 text-[14px] leading-[20px] text-[#6B7280]">California</p>
        </div>
      </div>
    </div>
  );
};

export default PreFooter;
