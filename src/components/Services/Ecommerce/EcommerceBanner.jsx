import React from "react";

const EcommerceBanner = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 lg:pt-56">
        <h1 className="text-2xl lg:text-4xl text2 font-medium mb-20">
          Move Beyond A Singular Sales Channel and Explore Limitless
          Opportunities with Our Personalized And e-Commerce Payment Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-end gap-5">
          <div>
            <h4 className="text2 text-xl lg:text-2xl mt-6 md:mt-0">
              Thousands of businesses use Vendrax e-commerce solutions to accept
              payments, send money, create automated billing schedules, and
              manage their business online.
            </h4>
            <div className="w-16 h-2 bg1 my-8"></div>
            <img
              className="h-96 object-cover w-full rounded-2xl"
              src="/images/ecom-ban1.webp"
              alt="img"
            />
          </div>
          <div className="h-full">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="/images/ecom-ban2.webp"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceBanner;
