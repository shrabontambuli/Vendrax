import React from "react";
import { Link } from "react-router-dom";

const SimplyProcess = () => {
  return (
    <div className="md:max-w-screen-2xl mx-auto lg:px-10 py-20 md:pt-28 relative">
      <img
        className="absolute hidden md:flex left-20 w-80 md:w-96 md:left-80 lg:left-96 bottom-80 md:bottom-20"
        src="/images/bg5.webp"
        alt=""
      />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-4">
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
            Our POS System Does More Than Simply Process Transactions
          </h2>
          <p className="text-gray-600 text-xl lg:text-2xl">
          Our POS system goes beyond just processing transactions; it's a comprehensive solution designed to improve every aspect of your business operations, including inventory management to optimizing customer interactions.
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
            className="w-full lg:-ms-10"
            src="/images/grow-img.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default SimplyProcess;
