import React from "react";
import { Link } from "react-router-dom";

const RestaurantBanner = () => {
  return (
    <div>
      <div>
        <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 lg:pt-56">
          <h1 className="text-2xl lg:text-5xl text2 font-medium mb-10 lg:mb-20">
            Versatile and Secure Restaurant POS Systems
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-end gap-5">
            <div className="h-full">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src="/images/res-ban1.webp"
                alt="img"
              />
            </div>
            <div>
              <h4 className="text2 text-xl lg:text-2xl mt-6 md:mt-0">
                With our restaurant POS, gain valuable insights into your sales
                trends, inventory levels, employee performance, and customer
                behavior through comprehensive reporting and analytics tools.
              </h4>
              <div className="w-16 h-2 bg1 my-8"></div>
              <img
                className="h-96 object-cover w-full "
                src="/images/res-ban2.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 lg:px-0 my-24">
        <div className="md:flex md:flex-row-reverse items-center gap-10 p-4 space-y-20 md:space-y-0">
          <div className="space-y-10 md:w-6/12">
            <h2 className="text-2xl md:text-4xl font-bold text2">
              Improve Customer Relationships
            </h2>
            <p className="text-gray-600 text-xl">
              Our POS systems integrate the facility of quicker order
              processing, hence reducing wait times for customers and enhancing
              their overall satisfaction. With customizable order workflows and
              modifiers, you can ensure accurate order-taking and minimize
              errors, leading to satisfied customers.
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text2">
              Reduce Wait Time
            </h2>
            <p className="text-gray-600 text-xl">
              In today’s fast-paced world, prolonged waiting can lead to
              frustration and dissatisfaction among customers, potentially
              driving sales away. Therefore, our POS solution specifically
              designed for restaurants aims to maximize your customer’s
              experience.
            </p>
            <Link to="/">
              <button className="flex items-center justify-center btn1 mt-10">
                Get Started
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
