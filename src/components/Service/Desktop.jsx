import React from "react";
import { Link } from "react-router-dom";

const Desktop = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 mb-24">
      <h2 className="text-3xl lg:text-5xl font-bold text2 text-center">
      Desktop Terminals
      </h2>
      <div className="md:flex md:flex-row-reverse items-center px-2 lg:px-0 gap-10 mt-20 lg:mt-24">
        <div className="w-full h-full mt-10 md:mt-0">
          <img
            className="w-full h-full rounded-2xl"
            src="/images/istockphoto-894929304-612x612.jpg"
            alt="img"
          />
        </div>
        <div className="md:w-11/12">
          <p className="text-2xl md:text-4xl font-medium text2 mt-6">
          Robust and reliable terminals featuring:
          </p>
          <div className="space-y-6 mt-10 md:mt-20">
            <div>
              <h1 className="text-2xl lg:text-3xl text2 font-medium mb-4">
              •	High Security: 
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
              Protecting sensitive transaction data.
              </span>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl text2 font-medium mb-4">
              •	User-Friendly Interface: 
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
              Simplifying staff training.
              </span>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl text2 font-medium mb-4">
              •	Comprehensive Reporting: 
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
              Detailed sales and inventory analytics.
              </span>
            </div>
          </div>
          <Link to="/contact">
            <button className="flex items-center justify-center btn1 mt-16">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Desktop;
