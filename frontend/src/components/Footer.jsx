import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="w-full h-[424px] pt-[48px] pb-[24px] px-[80px] bg-[#f7f7f7] flex flex-col gap-[48px]">
      {/* Columns */}
      <div className="w-full max-w-[1130px] m-auto flex gap-[24px] h-[240px]">
        <div className="max-w-[302px] w-full flex flex-col gap-[16px]">
          <p className="h-[24px] font-[500] text-[16px] leading-[24px] text-black">
            Support
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Help Center
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Safety information
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Cancellation options
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Our COVID-19 Response
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Supporting people with disabilities
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Report a neighborhood concern
          </p>
        </div>
        <div className="max-w-[302px] w-full flex flex-col gap-[16px]">
          <p className="h-[24px] font-[500] text-[16px] leading-[24px] text-black">
            Community
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Airbnb.org: disaster relief housing
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Support: Afghan refugees
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Celebrating diversity & belonging
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Combating discrimination
          </p>
        </div>
        <div className="max-w-[302px] w-full flex flex-col gap-[16px]">
          <p className="h-[24px] font-[500] text-[16px] leading-[24px] text-black">
            Hosting
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Try hosting
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            AirCover: protection for Hosts
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Explore hosting resources
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Visit our community forum
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            How to host responsibly
          </p>
        </div>
        <div className="max-w-[302px] w-full flex flex-col gap-[16px]">
          <p className="h-[24px] font-[500] text-[16px] leading-[24px] text-black">
            About
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Newsroom
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Learn about new features
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Letter from our founders
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Careers
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Investors
          </p>
          <p className="h-[20px] font-400 text-[14px] leading-[20px] text-[#4B5563]">
            Airbnb luxe
          </p>
        </div>
      </div>
      {/* Kicker */}

      <div className="w-full max-w-[1130px] m-auto flex flex-col gap-[24px]">
        <hr />
        {/* sub-footer */}

        <div className="w-full h-[24px] flex justify-between">
          {/* left */}
          <div className="max-w-[328px] w-full h-[20px] flex gap-[8px] items-center">
            <p className="max-w-[130px] w-full font-400 text-[14px] leading-[20px] text-[#4B5563]">
              © 2025 Airbnb, Inc.
            </p>
            <div className="w-[2px] h-[2px] rounded-full bg-[#4B5563]"></div>
            <p className="max-w-[49px] w-full font-400 text-[14px] leading-[20px] text-[#4B5563]">
              Privacy
            </p>
            <div className="w-[2px] h-[2px] rounded-full bg-[#4B5563]"></div>
            <p className="max-w-[41px] w-full font-400 text-[14px] leading-[20px] text-[#4B5563]">
              Terms
            </p>
            <div className="w-[2px] h-[2px] rounded-full bg-[#4B5563]"></div>
            <p className="max-w-[54px] w-full font-400 text-[14px] leading-[20px] text-[#4B5563]">
              Sitemap
            </p>
          </div>
          {/* Right */}
          <div className="max-w-[328px] h-[24px] flex gap-[40px] items-center">
            {/* Language */}
            <div className="max-w-[184px] w-full h-[24px] flex gap-[16px]">
              <div className="max-w-[110px] w-full flex gap-[4px]">
                <img
                  className="w-[24px] h-[24px] fill-black"
                  src={assets.globe2}
                  alt=""
                />
                <p className="max-w-[82px] w-full h-[20px] font-500 text-[14px] underline leading-[20px]  text-[#4B5563]">
                  English
                </p>
              </div>
            </div>
            {/* Currency */}
            <div className="max-w-[58px] w-full h-[24px] flex gap-[4px] items-center">
              <img className="w-[24px] h-[24px]" src={assets.dollar} alt="" />
              <p className="max-w-[30px] h-[20px] font-[500] text-[14px] leading-[20px] underline text-[#4B5563]">
                USD
              </p>
            </div>
            {/* Social media */}
            <div className="max-w-[104px] w-full flex gap-[16px]">
              <img src={assets.facebook} alt="" />
              <img src={assets.twitter} alt="" />
              <img src={assets.instagram} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
