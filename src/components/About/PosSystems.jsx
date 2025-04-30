import React from "react";
import { Link } from "react-router-dom";

const PosSystems = () => {
  return (
    <div className="md:max-w-screen-2xl mx-auto lg:px-10 py-20 md:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="space-y-10 p-4">
          <span className="inline-block w-44 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
          About Vendrax
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
          POS Systems: Powerful
          Tool for Businesses
          </h2>
          <p className="text-gray-600 text-xl">
          At Vendrax, our core focus revolves around optimizing reporting processes, managing financials effectively, and setting measurable goals. We understand the role accuracy reporting plays in decision-making and performance evaluation. Our efficient well-designed POS system ensures comprehensive reporting, providing valuable insights into your business's financial health and operational efficiency. With Vendrax, you can confidently navigate the complexities of reporting, financial management, and goal setting to achieve long-term success.
          </p>
          <Link to="/">
              <button className="flex items-center justify-center bg-[#228800] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mx-auto md:mx-0 mt-10">
                Get Started
                <img
                  className="absolute -right-3"
                  src="/images/red-btn.webp"
                  alt=""
                />
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
