import React from "react";
import { Link } from "react-router-dom";

const YourRestaurant = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/bg-wehave.webp)",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
      }}
    >
      <div className="md:max-w-screen-2xl mx-auto px-4 lg:px-10 py-40">
        <div className="md:w-10/12">
          <span className="inline-block w-48 py-1 bg-[#d451513d] text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
          We Integrate
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-white font-bold mt-10 md:w-7/12">
          All The Tools To Make Your Restaurant Business Successful
          </h1>
          <p className="text-xl md:w-8/12 mt-10 md:mt-14 text-gray-300">
          With various advanced tools integrated with the POS system, you can access detailed reports and analytics to interpret insights into sales trends, customer preferences, and operational efficiency, leading you to make data-driven decisions for business growth.
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
      </div>
    </div>
  );
};

export default YourRestaurant;
