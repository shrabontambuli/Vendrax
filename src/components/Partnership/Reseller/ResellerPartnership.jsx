import React from "react";
import { Link } from "react-router-dom";

const ResellerPartnership = () => {
  return (
    <div className="bg-[#eff9f9] py-10">
      <div className="max-w-7xl mx-auto rounded-3xl">
        <div className="space-y-10 p-4 lg:w-6/12 mx-auto">
          <div className="flex justify-center">
            <span className="inline-block w-44 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
              Partnership
            </span>
          </div>
          <h2 className="text-2xl text-center lg:text-5xl font-bold text2">
            How to Partner with Vendrax?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-5 lg:gap-16 max-w-screen-2xl mx-auto lg:10 mt-10 md:mt-20 lg:mt-20 p-1">
          <div className="w-full h-full">
            <img className="object-cover w-full h-ful" src="/images/iso-part1.webp" alt="img" />
          </div>
          <div>
            <div className="relative">
              <div className="absolute z-10 bg-white shadow-2xl rounded-xl p-10 flex gap-14">
                <div>
                  <h1 className="text-2xl lg:text-4xl text2 font-bold">Apply</h1>
                </div>
                <div>
                  <p className="text-gray-500 text-xl lg:text-2xl">
                    Submit your application to join our Vendrax ISO Reseller
                    Program
                  </p>
                </div>
              </div>
              <img
                className="hidden lg:flex absolute -top-4 -left-4"
                src="/images/iso-bg2.webp"
                alt="icon"
              />
            </div>
            <div className="relative mt-52">
              <div className="absolute z-10 bg-white shadow-2xl rounded-xl p-10 flex gap-14">
                <div>
                  <h1 className="text-2xl lg:text-4xl text2 font-bold">Sell</h1>
                </div>
                <div>
                  <p className="text-gray-500 text-xl lg:text-2xl">
                  Focus on sales and building your portfolio with our solutions.
                  </p>
                </div>
              </div>
              <img
                className="hidden lg:flex absolute -top-4 -left-4"
                src="/images/iso-bg2.webp"
                alt="icon"
              />
            </div>
            <div className="relative mt-[420px]">
              <div className="absolute z-10 bg-white shadow-2xl rounded-xl p-10 flex gap-14">
                <div>
                  <h1 className="text-2xl lg:text-4xl text2 font-bold">Earn</h1>
                </div>
                <div>
                  <p className="text-gray-500 text-xl lg:text-2xl">
                  Begin earning revenue share based on the processing volume of your portfolio
                  </p>
                </div>
              </div>
              <img
                className="hidden lg:flex absolute -top-4 -left-4"
                src="/images/iso-bg2.webp"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="flex items-center justify-center btn1 mx-auto mt-10">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResellerPartnership;
