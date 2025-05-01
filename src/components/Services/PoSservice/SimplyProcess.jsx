import React from "react";
import { Link } from "react-router-dom";

const SimplyProcess = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        <div className="space-y-10">
          <h2 className="text-2xl lg:text-5xl font-bold text2">
            Our POS System Does More Than Simply Process Transactions
          </h2>
          <p className="text-gray-600 text-xl">
          Our POS system goes beyond just processing transactions; it's a comprehensive solution designed to improve every aspect of your business operations, including inventory management to optimizing customer interactions.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center btn1 mt-10">
              Get Started
            </button>
          </Link>
        </div>
        <div>
          <img
            className="w-full"
            src="/images/grow-img.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default SimplyProcess;
