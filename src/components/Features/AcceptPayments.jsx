import React from "react";
import { Link } from "react-router-dom";

const AcceptPayments = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 relative">
        <img className="absolute hidden lg:flex w-80 lg:left-96 bottom-80 md:bottom-[350px]" src="/images/bg5.webp" alt="" />
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 p-4">
        <div className="space-y-10">
          <h2 className="text-3xl lg:text-5xl font-bold text2">
            Accept More Payments
          </h2>
          <p className="text-gray-600 text-xl">
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
            <button className="flex items-center justify-center btn1 mt-10">
              Get Started
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
