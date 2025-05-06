import React from "react";
import { Link } from "react-router-dom";

const Consistency = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-0 my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="p-4">
          <h2 className="text-3xl lg:text-5xl font-bold text2 mb-10 lg:mb-16">
            Industries We Serve:
          </h2>
          <div className="space-y-6">
            <p className="text2 text-xl lg:text-3xl font-medium">• Retail Stores</p>
            <p className="text2 text-xl lg:text-3xl font-medium">• Restaurants</p>
            <p className="text2 text-xl lg:text-3xl font-medium">• E-commerce Platforms</p>
            <p className="text2 text-xl lg:text-3xl font-medium">
              • Service-Based Businesses
            </p>
          </div>
          <Link to="/contact">
            <button className="btn1 mt-14">Get Started</button>
          </Link>
        </div>
        <div className="relative h-[500px] w-full mx-auto lg:mx-0 lg:h-[700px] lg:w-[624px] px-2 lg:px-0">
          <div className="lg:bg1 md:p-2 lg:rounded-3xl h-full w-full lg:absolute z-30">
            <div className="w-full h-full">
              <img
                className="w-full h-full rounded-2xl object-cover"
                src="/images/istockphoto-1048192018-612x612.jpg"
                alt="icon"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 h-[360px] w-[560px] bgs z-20 rounded-3xl hidden lg:flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Consistency;
