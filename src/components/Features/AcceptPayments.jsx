import React from "react";
import { Link } from "react-router-dom";

const AcceptPayments = () => {
  return (
    <div className="md:max-w-screen-2xl mx-auto lg:px-10 py-20 md:pt-36 relative">
        <img className="absolute left-20 w-80 md:w-96 md:left-60 lg:left-96 bottom-80 md:bottom-[500px]" src="/images/bg5.webp" alt="" />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-4">
        <div className="space-y-10">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
            Accept <br /> More Payments
          </h2>
          <p className="text-gray-600 text-xl lg:text-2xl">
            Our POS system accepts a wide range of payment methods, positively
            impacting your business, and increasing customer satisfaction and
            business revenue. According to a recent study by Statista, 63% of
            consumers prefer businesses that offer multiple payment options.
            Therefore, by integrating your business with popular payment
            gateways such as PayPal, Apple Pay, Google Pay, and more, POS
            solutions can enhance customer convenience and conquer a larger
            share of the market.
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
          <img className="w-full lg:-ms-10" src="/images/feat-img1.webp" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default AcceptPayments;
