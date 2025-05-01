import React from "react";

const TailoringPos = () => {
  return (
    <div className="max-w-7xl mx-auto lg:mt-36 my-24">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-5 px-2 lg:px-0">
          <div>
            <img className="h-full" src="/images/about-helpimg.webp" alt="img" />
          </div>
          <div className="relative">
              <div className="bg-[#2a2e30] rounded-lg space-y-10 text-center px-2 py-5 lg:absolute z-30 bottom-0">
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
              <div className="absolute hidden lg:flex -bottom-2 -right-2 h-[460px] w-[560px] bg-[#ee642e] z-20 rounded-[100px]"></div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default TailoringPos;
