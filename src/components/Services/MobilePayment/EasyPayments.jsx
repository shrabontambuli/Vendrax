import React from "react";
import { Link } from "react-router-dom";

const EasyPayments = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="space-y-10">
          <span className="inline-block w-60 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
            Why Vendrax
          </span>
          <h2 className="text-2xl lg:text-5xl font-bold text2">
            Easy Payments. Anywhere. Anytime.
          </h2>
          <p className="text-gray-600 text-xl">
            By adopting our one-tap mobile payment solutions, you can boost your
            business by improving customer experience, increasing transaction
            efficiency, and improving overall productivity. Let’s break the
            orthodox ceiling and accept the future of fast and secure payment
            processing.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center btn1 mt-10">
              Get Started
            </button>
          </Link>
        </div>
        <div className="relative mx-auto h-[1070px] w-[370px] md:w-[828px] md:h-[700px] lg:h-[708px] lg:w-[624px]">
          <div className="bg1 p-5 md:p-10 rounded-3xl space-y-8 h-full w-full absolute z-30 md:space-y-20 lg:space-y-10">
            <div className="flex items-center gap-6">
              <img
                className="w-20 h-20"
                src="/images/mobb-ic1.webp"
                alt="icon"
              />
              <div>
                <h3 className="text-2xl text-white font-medium mb-4">
                  Increase Your Revenue
                </h3>
                <p className="text-gray-300">
                  Our mobile POS payments allow you to grow your income streams
                  by accepting payments at any time and from any location. You
                  can clinch sales transactions and increase your overall
                  revenue whether at a pop-up event or at the customer's
                  doorstep.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <img
                className="w-20 h-20"
                src="/images/mobb-ic2.webp"
                alt="icon"
              />
              <div>
                <h3 className="text-2xl text-white font-medium mb-4">
                Enhanced Customer Experienced
                </h3>
                <p className="text-gray-300">
                Our mobile POS payments improve your customer’s experience by offering convenience and flexibility. Your customers would appreciate the ability to pay using their preferred mobile payment methods, such as digital wallets or contactless cards, leading to higher satisfaction and a repeated business cycle.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <img
                className="w-20 h-20"
                src="/images/mobb-ic3.webp"
                alt="icon"
              />
              <div>
                <h3 className="text-2xl text-white font-medium mb-4">
                Reduce Overhead Costs
                </h3>
                <p className="text-gray-300">
                Orthodox POS systems frequently incur high overhead costs, including as hardware maintenance, software updates, and transaction fees. By switching to a mobile POS solution, you may cut overhead costs, optimize operations, and deploy resources more efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute hidden lg:flex -bottom-5 -right-0 h-[460px] w-[560px] bg-[#ffbf41] z-20 rounded-3xl"></div>
          <img
            className="absolute hidden lg:flex -top-7 -left-7"
            src="/images/bg2.webp"
            alt="icon"
          />
          <img
            className="absolute hidden lg:flex z-10 -bottom-32 -right-0"
            src="/images/bg1.webp"
            alt="icon"
          />
        </div>
      </div>

      <div
        className="mt-40 h-[500px] mx-auto rounded-3xl"
        style={{
          backgroundImage: "url(/images/pay-img.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default EasyPayments;
