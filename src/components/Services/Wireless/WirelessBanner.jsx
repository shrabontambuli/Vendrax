import React from "react";
import { Link } from "react-router-dom";

const WirelessBanner = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 lg:pt-48">
        <div
          className="h-[515px] rounded-[30px] px-14 py-6 md:p-28"
          style={{
            backgroundImage: "url(/images/desk-banner.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="space-y-10 lg:w-6/12 mt-20 md:mt-0">
            <h2 className="text-2xl lg:text-5xl font-bold text-white">
              Desktop Terminals
            </h2>
            <p className="text-gray-200 text-xl lg:text-2xl">
              With efficient desktop terminals, your business accepts various
              payment methods, eliminating fraud.
            </p>
            <Link to="/">
              <button className="flex items-center justify-center btn1 mt-10">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WirelessBanner;
