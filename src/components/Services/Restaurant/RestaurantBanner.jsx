import React from "react";
import { Link } from "react-router-dom";

const RestaurantBanner = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(/images/acc-banner.webp)",
        }}
      >
        <div className="md:max-w-screen-2xl mx-auto px-4 lg:px-10 pt-32 md:pt-24 lg:pt-56">
          <h1 className="text-4xl lg:text-6xl text-white font-medium mb-10 md:mb-20 lg:mb-32 lg:w-9/12">
            Versatile and Secure Restaurant POS Systems
          </h1>
          <div className="md:flex gap-6">
            <div>
              <img src="/images/res-ban1.webp" alt="img" />
            </div>
            <div>
              <h4 className="text-white text-xl lg:text-2xl mt-6 md:mt-0 w-96">
                With our restaurant POS, gain valuable insights into your sales
                trends, inventory levels, employee performance, and customer
                behavior through comprehensive reporting and analytics tools.
              </h4>
              <div className="w-20 h-2 bg-[#105964] my-4"></div>
              <img src="/images/res-ban2.webp" alt="img" />
            </div>
          </div>
        </div>
      </div>
      <div className="md:max-w-screen-2xl mx-auto lg:px-10 py-20 md:pb-24">
        <div className="md:flex md:flex-row-reverse items-center gap-10 p-4 space-y-20 md:space-y-0">
          <div className="space-y-10 md:w-6/12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Improve Customer Relationships
            </h2>
            <p className="text-gray-600 text-xl lg:text-2xl">
              Our POS systems integrate the facility of quicker order
              processing, hence reducing wait times for customers and enhancing
              their overall satisfaction. With customizable order workflows and
              modifiers, you can ensure accurate order-taking and minimize
              errors, leading to satisfied customers.
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Reduce Wait Time
            </h2>
            <p className="text-gray-600 text-xl lg:text-2xl">
              In today’s fast-paced world, prolonged waiting can lead to
              frustration and dissatisfaction among customers, potentially
              driving sales away. Therefore, our POS solution specifically
              designed for restaurants aims to maximize your customer’s
              experience.
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
            <img className="w-full" src="/images/res-img1.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantBanner;
