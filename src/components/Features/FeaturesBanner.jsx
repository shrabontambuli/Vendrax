import React from "react";

const FeaturesBanner = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 lg:pt-48">
        <h1 className="text-2xl lg:text-5xl text2 font-medium mb-10 lg:mb-20">
          Multitude Features of a Cloud-based POS System
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-end gap-5">
          <div className="h-full">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="/images/feat-ban1.webp"
              alt="img"
            />
          </div>
          <div>
            <h4 className="text2 text-xl lg:text-2xl mt-6 md:mt-0">
              A number of essential features are offered by our POS systems to
              simplify your client interactions, inventory control, and sales.
            </h4>
            <div className="w-16 h-2 bg1 my-8"></div>
            <img
              className="h-96 object-cover w-full "
              src="/images/about-ban2.webp"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesBanner;
