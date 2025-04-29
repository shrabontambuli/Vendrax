import React from "react";
import { Link } from "react-router-dom";

const Analytics = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-10 p-4 py-20">
      <div className="md:flex md:flex-row-reverse gap-8 lg:px-20">
        <div className="md:w-10/12">
          <span className="inline-block w-48 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
            Vendrax Solution
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-black font-bold mt-10 w-11/12">
            Analytics & Reporting
          </h1>
          <p className="text-xl md:w-11/12 mt-10 md:mt-14 text-gray-500">
            Vendrax offers comprehensive analytics and reporting tools that can
            help you extract actionable insights and make well-informed
            decisions. With the help of the extensive analytics features in our
            POS system, you can monitor sales trends, maintain inventory levels,
            examine consumer behavior, and produce thorough reports. Having
            access to real-time data will allow your business to spot trends,
            streamline processes, and drive company expansion.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center bg-[#e53e29] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-10">
              Get Started
              <img
                className="absolute -right-3"
                src="/images/red-btn.webp"
                alt=""
              />
            </button>
          </Link>
        </div>
        <div>
          <img
            className="w-[850px] h-[554px] md:h-[400px] lg:h-[570px] mt-10 md:mt-0"
            src="/images/res-img2.webp"
            alt="img"
          />
        </div>
      </div>
      <div className="md:flex gap-8 lg:px-20 mt-20">
        <div className="md:w-10/12">
          <span className="inline-block w-44 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
            Vendrax Solution
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-black font-bold mt-10 w-11/12">
            Seamless Integration
          </h1>
          <p className="text-xl md:w-11/12 mt-10 md:mt-14 text-gray-500">
            Experience seamless integration with Vendrax's POS solution. Our
            system is designed to integrate effortlessly with various
            third-party applications, payment gateways, and hardware devices.
            Whether you need to integrate with accounting software, online
            ordering platforms, or loyalty programs, Vendrax ensures a smooth
            and hassle-free integration process.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center bg-[#e53e29] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-10">
              Get Started
              <img
                className="absolute -right-3"
                src="/images/red-btn.webp"
                alt=""
              />
            </button>
          </Link>
        </div>
        <div>
          <img
            className="w-[850px] h-[554px] md:h-[400px] lg:h-[554px] mt-10 md:mt-0"
            src="/images/res-img3.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
