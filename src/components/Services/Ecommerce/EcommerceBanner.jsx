import React from "react";

const EcommerceBanner = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/acc-banner.webp)",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover"
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 pt-32 md:pt-24 lg:pt-48">
        <h1 className="text-3xl lg:text-4xl text-white font-medium mb-10 md:mb-20 lg:w-full">
        Move Beyond A Singular Sales Channel and Explore Limitless Opportunities with Our Personalized And e-Commerce Payment Services
        </h1>
        <div className="md:flex gap-6">
          <div className="lg:w-8/12">
            <h4 className="text-white text-xl lg:text-2xl mt-6 md:mt-0">
            Thousands of businesses use Vendrax e-commerce solutions to accept payments, send money, create automated billing schedules, and manage their business online.
            </h4>
            <div className="w-20 h-2 bg-[#105964] my-4"></div>
            <img src="/images/ecom-ban1.webp" alt="img" />
          </div>
          <div>
            <img className="mt-6 md:mt-20 lg:mt-0" src="/images/ecom-ban2.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceBanner;
