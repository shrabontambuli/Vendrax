import React from "react";
import { Link } from "react-router-dom";

const WirelessBanner = () => {
  return (
    <div
      className="h-screen md:h-full lg:h-screen pt-28 md:pt-0"
      style={{
        backgroundImage: "url(/images/acc-banner.webp)",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover"
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 pt-32 md:pt-24 lg:pt-64">
        <div
          className=" h-[515px] rounded-[30px] px-14 py-6 md:p-28"
          style={{
            backgroundImage: "url(/images/desk-banner.webp)",
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize:"cover"
          }}
        >
          <div className="space-y-10 lg:w-6/12 mt-20 md:mt-0">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
              Desktop Terminals
            </h2>
            <p className="text-gray-200 text-xl lg:text-2xl">
              With efficient desktop terminals, your business accepts various
              payment methods, eliminating fraud.
            </p>
            <Link to="/">
              <button className="flex items-center justify-center bg-[#228800] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-10">
                Get Started
                <img
                  className="absolute -right-3"
                  src="/images/red-btn.webp"
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WirelessBanner;
