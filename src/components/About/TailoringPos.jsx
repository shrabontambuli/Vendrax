import React from "react";

const TailoringPos = () => {
  return (
    <div className="mb-44 md:mb-20 lg:mb-0 p-1">
      <div>
        <div className="relative lg:w-[1139px]">
          <img src="/images/about-helpimg.webp" alt="img" />
          <div className="absolute right-2 -bottom-24 md:bottom-20 md:right-40 lg:-right-[42%] lg:-bottom-10">
            <div className="relative h-[400px] w-[390px] mx-auto lg:mx-0 md:w-[300px] md:h-[600px] lg:h-[760px] lg:w-[624px]">
              <div className="bg-[#2a2e30] p-5 md:p-6 lg:p-16 rounded-lg space-y-10 md:space-y-6 lg:space-y-10 h-full w-full text-center absolute left-3 md:left-0 z-30 mt-10">
                <h1 className="text-white font-medium text- md:text-xl lg:text-6xl">
                  <span className="text-[#00cbc5]">Tailoring</span> POS Systems
                  For
                  <span className="text-[#ee642e]"> Your Restaurant</span>,
                  <span className="text-[#00cbc5]">Retail</span>,
                  <span className="text-[#ee642e]"> Beauty </span> Any Other{" "}
                  <span className="text-[#ee642e]"> Businesses </span>.
                </h1>
                <p className="text-gray-300 md:text-xl">
                  Our POS systems are designed to be versatile and adaptable,
                  catering to a wide range of industries including restaurants,
                  retail stores, beauty salons, and more. Whether you run a
                  bustling restaurant, manage a busy retail outlet, or operate a
                  thriving beauty business, our tailored POS solutions are here
                  to smoothen your operations and improve your customer
                  experience.
                </p>
              </div>
              <div className="absolute -bottom-16 -left-5 md:-bottom-16 md:-left-5 lg:-right-5 h-[400px] w-[300px] md:h-[460px] md:w-[300px] lg:h-[460px] lg:w-[560px] bg-[#ee642e] z-20 rounded-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailoringPos;
