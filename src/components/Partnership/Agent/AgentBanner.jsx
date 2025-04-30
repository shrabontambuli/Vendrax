import React from "react";
import { Link } from "react-router-dom";

const AgentBanner = () => {
  return (
    <div>
      <div className="bg-[#eaeced] pt-24 lg:pt-40">
        <div
          className="h-[780px] pt-16 relative"
          style={{
            backgroundImage: "url(/images/agent-banner.webp)",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"cover"
          }}
        >
          <div className="max-w-screen-2xl mx-auto lg:px-10 py-2 md:py-6">
            <div className="p-4 space-y-20 md:space-y-0">
              <div className="space-y-10 md:w-11/12 lg:w-6/12">
                <h2 className="text-3xl md:text-6xl lg:text-6xl font-bold text-white">
                  Join Vendrax as an Authorized Agent
                </h2>
                <img src="/images/unlock.png" alt="icon" />
                <p className="text-white text-xl lg:text-2xl">
                  Become an authorized agent by joining our Agent-Revenue Share
                  Program. Enjoy the flexibility and rewards of managing your
                  own business under the support of a trusted and reliable
                  partner.
                </p>
                <Link to="/">
                  <button className="flex items-center justify-center bg-[#228800] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-10">
                    Become an Agent
                    <img
                      className="absolute -right-3"
                      src="/images/red-btn.webp"
                      alt=""
                    />
                  </button>
                </Link>

                <img
                  className="hidden lg:flex absolute bottom-4 left-[700px]"
                  src="/images/agent-bg1.webp"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl py-20 lg:py-36 mx-auto mb-44 md:mb-20 lg:mb-0 p-1">
        <div>
          <div className="relative lg:w-[1009px]">
            <img src="/images/agent-img1.webp" alt="img" />
            <div className="absolute right-2 -bottom-24 md:bottom-20 md:right-40 lg:-right-[33%] lg:-bottom-10">
              <div className="relative h-[500px] w-[390px] mx-auto lg:mx-0 md:w-[400px] md:h-[600px] lg:h-[760px] lg:w-[624px]">
                <div className="bg-white shadow-2xl right-2 top-10 rounded-3xl lg:space-y-10 h-full w-full absolute z-30 mt-20 md:mt-0">
                  <div className="relative lg:h-[760px]">
                    <div className="p-5 md:p-6 lg:p-16">
                      <h1 className="text-black font-medium text-3xl md:text-xl lg:text-6xl">
                        About Our
                        <span className="text-[#ed1d24]">
                          {" "}
                          Revenue Share Program
                        </span>
                      </h1>
                      <p className="text-gray-500 md:text-xl mt-10 md:mt-20">
                      Where networking skills can turn into a lucrative revenue stream. Through our revenue share program, you will have the power to offer the best in class POS solutions and services on your negotiated rates and earn monthly from the processing from your portfolio.
                      </p>
                    </div>
                    <img
                      className="absolute lg:bottom-0"
                      src="/images/download.webp"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentBanner;
