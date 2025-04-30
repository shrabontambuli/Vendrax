import React from "react";
import { Link } from "react-router-dom";

const StartEarning = () => {
  return (
    <div className="bg-[#eff9f9]">
      <div className=" lg:mx-10 rounded-3xl pt-16 lg:pt-0 pb-32 lg:pb-20">
        <div className="space-y-10 p-4 lg:w-6/12 mx-auto lg:pt-28">
          <div className="flex justify-center">
            <span className="inline-block w-44 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
              Partnership
            </span>
          </div>
          <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-gray-900">
            How to Start Earning
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-5 lg:gap-16 max-w-screen-2xl mx-auto lg:10 mt-10 md:mt-20 lg:mt-20 p-1">
          <div>
            <img
              className="w-[660px] h-[600px]"
              src="/images/agent-part1.webp"
              alt="img"
            />
          </div>
          <div>
            <div className="relative">
              <div className="absolute z-10 bg-white shadow-2xl rounded-xl p-10 flex gap-14">
                <div>
                  <h1 className="text-2xl lg:text-4xl text-black font-bold">
                    Sign Up
                  </h1>
                </div>
                <div>
                  <p className="text-gray-500 text-xl lg:text-2xl">
                    Complete our KYC verification and become an authorized
                    agent.
                  </p>
                </div>
              </div>
              <img
                className="hidden lg:flex absolute -top-4 -left-4"
                src="/images/iso-bg2.webp"
                alt="icon"
              />
              <img
                className="hidden lg:flex absolute top-[83px] -right-[37px] z-20"
                src="/images/01.png"
                alt="icon"
              />
            </div>
            <div className="relative mt-52">
              <div className="absolute z-10 bg-white shadow-2xl rounded-xl p-10 flex gap-14">
                <div>
                  <h1 className="text-2xl lg:text-4xl text-black font-bold">
                    Build Your Portfolio
                  </h1>
                </div>
                <div>
                  <p className="text-gray-500 text-xl lg:text-2xl">
                  Sign up merchants and grow your portfolio.
                  </p>
                </div>
              </div>
              <img
                className="hidden lg:flex absolute -top-4 -left-4"
                src="/images/iso-bg2.webp"
                alt="icon"
              />
              <img
                className="hidden lg:flex absolute top-[87px] -right-[28px] z-20"
                src="/images/02.png"
                alt="icon"
              />
            </div>
            <div className="relative mt-[420px]">
              <div className="absolute z-10 bg-white shadow-2xl rounded-xl p-10 flex gap-14">
                <div>
                  <h1 className="text-2xl lg:text-4xl text-black font-bold">
                  Earn
                  Monthly
                  </h1>
                </div>
                <div>
                  <p className="text-gray-500 text-xl lg:text-2xl">
                  Receive ongoing revenue share from the processing revenue.
                  </p>
                </div>
              </div>
              <img
                className="hidden lg:flex absolute -top-4 -left-4"
                src="/images/iso-bg2.webp"
                alt="icon"
              />
              <img
                className="hidden lg:flex absolute top-[95px] -right-[37px] z-20"
                src="/images/03.png"
                alt="icon"
              />
            </div>
          </div>
        </div>
        <Link to="/">
          <button className="flex items-center justify-center bg-[#228800] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mx-auto mt-10">
            Get Started
            <img
              className="absolute -right-3"
              src="/images/red-btn.webp"
              alt=""
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default StartEarning;
