import React from "react";
import { Link } from "react-router-dom";

const Consistency = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-0 my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="p-4">
          <h2 className="text-2xl lg:text-5xl font-bold text2 mb-16">
            Industries We Serve:
          </h2>
          <div className="space-y-6">
            <p className="text2 text-3xl font-medium">• Retail Stores</p>
            <p className="text2 text-3xl font-medium">• Restaurants</p>
            <p className="text2 text-3xl font-medium">• E-commerce Platforms</p>
            <p className="text2 text-3xl font-medium">
              • Service-Based Businesses
            </p>
          </div>
          <Link to="/">
            <button className="btn1 mt-14">Get Started</button>
          </Link>
        </div>
        <div className="relative h-[550px] w-full mx-auto lg:mx-0 md:w-[844px] lg:h-[708px] lg:w-[624px]">
          <div className="bg1 p-2 rounded-3xl h-full w-full absolute z-30">
            <div className="w-full h-full">
              <img
                className="w-full h-full rounded-3xl"

                src="https://img.freepik.com/free-photo/standard-quality-control-concept-m_23-2150041853.jpg?ga=GA1.1.2098199704.1726909822&semt=ais_hybrid&w=740"
                alt="icon"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 h-[460px] w-[560px] bgs z-20 rounded-3xl hidden lg:flex"></div>
        </div>
      </div>
    </div>
  );
};

export default Consistency;
