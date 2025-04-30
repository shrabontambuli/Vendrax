import React from "react";

const PoSserviceBanner = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url(/images/acc-banner.webp)",
      }}
    >
      <div className="md:max-w-screen-2xl mx-auto px-4 lg:px-10 pt-32 md:pt-24 lg:pt-48">
        <h1 className="text-4xl lg:text-5xl text-white font-medium mb-10 md:mb-20">
        User-friendly Point-of-Sale Software
        With Vendrax
        </h1>
        <div className="md:flex gap-6">
          <div>
            <img src="/images/pos-ban1.webp" alt="img" />
          </div>
          <div>
            <h4 className="text-white text-xl lg:text-2xl mt-6 md:mt-0 w-96">
            Vendrax POS system offers flexibility in operating both online and offline. With cloud-based software, you can operate your POS system even when offline, ensuring uninterrupted service and convenience for your business.
            </h4>
            <div className="w-20 h-2 bg-[#105964] my-4"></div>
            <img src="/images/pos-ban2.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoSserviceBanner;
