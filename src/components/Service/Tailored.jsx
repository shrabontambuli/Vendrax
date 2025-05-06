import React from "react";
import { Link } from "react-router-dom";

const Tailored = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 lg:pt-52 mb-24">
      <h2 className="text-3xl lg:text-5xl font-bold text2 text-center lg:w-9/12 mx-auto">
      Comprehensive Tools to Elevate Your Business
      </h2>
      <div className="md:flex md:flex-row-reverse items-center px-2 lg:px-0 gap-10 mt-20 lg:mt-24">
        <div className="w-full h-[600px] mt-10 md:mt-0">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/images/e-commerce-online-shopping-plant-sale_53876-125021.avif"
            alt="img"
          />
        </div>
        <div className="md:w-11/12 mt-10 md:mt-0">
          <h2 className="text-3xl lg:text-4xl font-bold text2">
            E-commerce Integration
          </h2>
          <p className="text-xl text-gray-600 mt-6">
            Enhance your online store with our seamless POS integration,
            offering
          </p>
          <div className="space-y-6 mt-10 md:mt-20">
            <div>
              <h1 className="text-xl lg:text-2xl text2 font-medium mb-4">
                • Shopping Cart Integration:
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
                Streamlined checkout processes.
              </span>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl text2 font-medium mb-4">
                • Customizable Payment Pages:
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
                Aligning with your brand identity.
              </span>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl text2 font-medium mb-4">
                • API Integration:
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
                Ensuring compatibility with various platforms.
              </span>
            </div>
            <Link to="/contact">
              <button className="flex items-center justify-center btn1 mt-10">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tailored;
