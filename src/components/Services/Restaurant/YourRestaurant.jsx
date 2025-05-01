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
      <div className="max-w-7xl mx-auto px-2 lg:px-0 py-20">
        <div className="md:w-10/12">
          <span className="inline-block w-48 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
          We Integrate
          </span>
          <h1 className="text-2xl lg:text-5xl text-white font-bold mt-10 md:w-7/12">
          All The Tools To Make Your Restaurant Business Successful
          </h1>
          <p className="text-xl md:w-8/12 mt-10 text-gray-300">
          With various advanced tools integrated with the POS system, you can access detailed reports and analytics to interpret insights into sales trends, customer preferences, and operational efficiency, leading you to make data-driven decisions for business growth.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center btn1 mt-10">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default YourRestaurant;
