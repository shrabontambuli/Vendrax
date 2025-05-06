import React from "react";

const TailoringPos = () => {
  return (
    <div className="max-w-7xl mx-auto my-24">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-5 px-2 lg:px-0">
          <div className="h-full w-full">
            <img
              className="h-full w-full rounded-2xl object-cover"
              src="/images/istockphoto-1183280519-612x612.jpg"
              alt="img"
            />
          </div>
          <div className="relative">
            <div className="bg-[#2a2e30] rounded-lg space-y-10 text-center px-2 py-10 lg:absolute z-30 bottom-0 md:py-20 lg:py-48">
              <h1 className="text2 font-medium text-4xl lg:text-5xl">
                Our Core Values:
              </h1>
              <div>
                <h1 className="text-2xl lg:text-3xl text2 font-medium mb-6">
                  • Innovation:
                </h1>
                <span className="text-lg lg:text-2xl text-white">
                  Continuously integrating the latest technologies to stay
                  ahead.
                </span>
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl text2 font-medium mb-6">
                  • Reliability:
                </h1>
                <span className="text-lg lg:text-2xl text-white">
                  Ensuring consistent performance and uptime.
                </span>
              </div>
              <div>
                <h1 className="text-2xl lg:text-3xl text2 white font-medium mb-6">
                  • Customer-Centricity
                </h1>
                <span className="text-lg lg:text-2xl text-white">
                  Prioritizing client needs and satisfaction.
                </span>
              </div>
            </div>
            <div className="absolute hidden lg:flex -bottom-2 -right-2 h-[460px] w-[560px] bg1 z-20 rounded-[100px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailoringPos;
