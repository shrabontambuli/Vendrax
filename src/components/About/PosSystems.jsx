import React from "react";
import { Link } from "react-router-dom";

const PosSystems = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
        <div className="space-y-10 p-4">
          <span className="inline-block w-44 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
          About Vendrax
          </span>
          <h2 className="text-2xl lg:text-5xl font-bold text2">
          POS Systems: Powerful
          Tool for Businesses
          </h2>
          <p className="text-gray-600 text-xl">
          At Vendrax, our core focus revolves around optimizing reporting processes, managing financials effectively, and setting measurable goals. We understand the role accuracy reporting plays in decision-making and performance evaluation. Our efficient well-designed POS system ensures comprehensive reporting, providing valuable insights into your business's financial health and operational efficiency. With Vendrax, you can confidently navigate the complexities of reporting, financial management, and goal setting to achieve long-term success.
          </p>
          <Link to="/">
              <button className="btn1 mt-6">
                Get Started
              </button>
            </Link>
        </div>
        <div className="">
          <img className="md:mx-auto lg:mx-0" src="/images/about-img1.webp" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default PosSystems;
