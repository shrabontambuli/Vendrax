import React from "react";
import { Link } from "react-router-dom";

const Comprehensive = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 my-24">
      <h2 className="text-3xl lg:text-5xl font-bold text2 text-center lg:w-9/12 mx-auto">
        Markets We Serve:
      </h2>
      <div className="md:flex md:flex-row-reverse items-center px-2 lg:px-0 gap-10 mt-20 lg:mt-24">
        <div className="w-full h-[600px] mt-10 md:mt-0">
          <img
            className="w-full h-full object-cover rounded-2xl"
            src="/images/african-woman-manager-looking-camera-smiling-holding-clipboard-while-diverse-coworkers-talking-background_482257-5021.avif"
            alt="img"
          />
        </div>
        <div className="md:w-11/12 mt-10 md:mt-0">
          <div className="space-y-3 mt-10">
            <div>
              <span className="text-lg text-gray-600">
                CBD / C8 / C9 
              </span>
            </div>
            <div>
              <span className="text-lg text-gray-600">
                Liquor stores
              </span>
            </div>
            <div>
              <span className="text-lg text-gray-600">
                Cigarette & E-cigarette shops
              </span>
            </div>
            <div>
              <span className="text-lg text-gray-600">
                Pubs & bars
              </span>
            </div>
            <div>
              <span className="text-lg text-gray-600">
                Cigarette & E-cigarette shops
              </span>
            </div>
            <div>
              <span className="text-lg text-gray-600">
                Restaurants & quick-service restaurants (QSR)
              </span>
            </div>
            <div>
              <span className="text-lg text-gray-600">
                Taxi fleets & transportation services
              </span>
            </div>
            <div>
              <span className="text-lg text-gray-600">
                Grocery stores & supermarkets
              </span>
            </div>
            <div>
              <span className="text-lg text-gray-600">
                Convenience stores
              </span>
            </div>
            <div>
              <span className="text-lg text-gray-600">
                Retail boutiques
              </span>
            </div>
            <div>
              <span className="text-lg text-gray-600">
                Specialty stores (vape shops, dispensaries, gift shops)
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

export default Comprehensive;
