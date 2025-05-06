import React from "react";
import { Link } from "react-router-dom";

const Mobile = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 mb-24">
      <h2 className="text-3xl lg:text-5xl font-bold text2 text-center">
        Mobile Payment Solutions
      </h2>
      <div className="md:flex flex-row-reverse items-center px-2 lg:px-0 gap-10 mt-20 lg:mt-24">
        <div className="md:w-11/12">
          <p className="text-2xl lg:text-4xl font-bold md:font-medium text2 mt-6">
            Stay agile with our mobile POS offerings:
          </p>
          <div className="space-y-6 mt-10 md:mt-20">
            <div>
              <h1 className="text-xl lg:text-3xl text2 font-medium mb-4">
                • Smartphone & Tablet Integration:
              </h1>
              <span className="text-base lg:text-xl text-gray-600">
                Accept payments on-the-go.
              </span>
            </div>
            <div>
              <h1 className="text-xl lg:text-3xl text2 font-medium mb-4">
                • Contactless Payments:
              </h1>
              <span className="text-base lg:text-xl text-gray-600">
                Support for NFC and mobile wallets.
              </span>
            </div>
            <div>
              <h1 className="text-xl lg:text-3xl text2 font-medium mb-4">
                • Real-Time Reporting:
              </h1>
              <span className="text-base lg:text-xl text-gray-600">
                Access sales data anytime, anywhere.
              </span>
            </div>
          </div>
          <Link to="/contact">
        <button className="flex items-center justify-center btn1 mt-16">
          Get Started
        </button>
      </Link>
        </div>
        <div className="w-full h-[600px] mt-10 md:mt-0">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/images/istockphoto-1946645580-612x612.jpg"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
