import React from "react";
import { Link } from "react-router-dom";

const EasyPayments = () => {
  return (
    <div className="md:max-w-screen-2xl mx-auto lg:px-10 py-32 md:pt-20=">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="space-y-10 p-4">
          <span className="inline-block w-60 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
            Why Vendrax
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
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
        <div className="relative h-[960px] w-[390px] mx-auto lg:mx-0 md:w-[844px] md:h-[650px] lg:h-[708px] lg:w-[624px]">
          <div className="bg-[#122e38] p-5 md:p-10 rounded-3xl space-y-8 h-full w-full absolute z-30 md:space-y-20 lg:space-y-10">
            <div className="flex items-center gap-6">
              <img
                className="w-20 h-20"
                src="/images/mobb-ic1.webp"
                alt="icon"
              />
              <div>
                <h3 className="text-2xl text-[#17dcd6] font-medium mb-4">
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
                <h3 className="text-2xl text-[#17dcd6] font-medium mb-4">
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
                <h3 className="text-2xl text-[#17dcd6] font-medium mb-4">
                Reduce Overhead Costs
                </h3>
                <p className="text-gray-300">
                Orthodox POS systems frequently incur high overhead costs, including as hardware maintenance, software updates, and transaction fees. By switching to a mobile POS solution, you may cut overhead costs, optimize operations, and deploy resources more efficiently.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 md:-bottom-5 md:-right-5 lg:-right-5 h-[460px] w-[300px] md:h-[460px] md:w-[560px] bg-[#ffbf41] z-20 rounded-3xl"></div>
          <img
            className="absolute -top-7 -left-7"
            src="/images/bg2.webp"
            alt="icon"
          />
          <img
            className="absolute z-10 -bottom-16 -right-5 md:right-0 md:-bottom-28 lg:-bottom-32 lg:-right-7"
            src="/images/bg1.webp"
            alt="icon"
          />
        </div>
      </div>

      <div
        className=" mt-40 md:mt-60 h-[500px] mx-auto rounded-3xl"
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
