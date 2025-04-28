import React from "react";

const AboutBanner = () => {
  return (
    <div
      className="h-screen md:h-full lg:h-screen"
      style={{
        backgroundImage: "url(/images/acc-banner.webp)",
      }}
    >
      <div className="md:max-w-screen-2xl mx-auto px-4 lg:px-10 pt-32 md:pt-24 lg:pt-48">
        <h1 className="text-4xl lg:text-6xl text-white font-medium mb-10 lg:mb-20">Vendrax Focuses</h1>
        <div className="md:flex gap-6">
          <div>
            <img src="/images/about-ban1.webp" alt="img" />
          </div>
          <div>
            <h4 className="text-white text-xl lg:text-2xl mt-6 md:mt-0 ">On Reporting, Financials, and Measurable Goals</h4>
            <div className="w-16 h-2 bg-[#105964] my-8"></div>
            <img src="/images/about-ban2.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
