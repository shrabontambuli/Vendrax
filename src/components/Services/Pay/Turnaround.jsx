import React from "react";
import { Link } from "react-router-dom";

const Turnaround = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-10 p-4 py-20 md:pt-0 lg:py-10">
      <div className="md:flex md:flex-row-reverse items-center gap-8 lg:px-20">
        <div className="md:w-10/12">
          <span className="inline-block w-60 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
            Vendrax Solution
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-black font-bold mt-10 w-11/12">
            Faster Turnaround Times
          </h1>
          <p className="text-xl md:w-11/12 mt-10 md:mt-14 text-gray-500">
            Our Vendrax solution optimizes your restaurant’s operations, leading
            to faster turnaround times for your business. With efficient
            workflows and automated processes, tasks that used to take hours can
            now be completed in minutes, boosting productivity and customer
            satisfaction.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center bg-[#228800] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-10">
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
            className="w-[850px] h-[654px] md:h-[400px] lg:h-[670px] mt-10 md:mt-0"
            src="/images/paytab-img1.webp"
            alt="img"
          />
        </div>
      </div>
      <div className="md:flex  gap-8 lg:px-20 mt-20">
        <div className="md:w-10/12">
          <span className="inline-block w-60 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
          Vendrax Solution
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-black font-bold mt-10 w-11/12">
          Reduce Labor
          Costs
          </h1>
          <p className="text-xl md:w-11/12 mt-10 md:mt-14 text-gray-500">
          By leveraging our Vendrax solution, businesses can significantly reduce labor costs. Our system automates repetitive tasks, optimizes workforce management, and improves efficiency, allowing you to achieve more with fewer resources. This results in lower operational expenses and improved profitability for your business.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center bg-[#228800] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-10">
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
            className="w-[950px] h-[554px] md:h-[400px] lg:h-[570px] mt-10 md:mt-0"
            src="/images/paytab-img2.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Turnaround;
