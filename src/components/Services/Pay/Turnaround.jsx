import React from "react";
import { Link } from "react-router-dom";

const Turnaround = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 my-24">
      <div className="md:flex md:flex-row-reverse items-center gap-8">
        <div className="md:w-10/12">
          <span className="inline-block w-60 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
            Vendrax Solution
          </span>
          <h1 className="text-2xl lg:text-5xl text2 font-bold mt-10 w-11/12">
            Faster Turnaround Times
          </h1>
          <p className="text-xl md:w-11/12 mt-10 text-gray-500">
            Our Vendrax solution optimizes your restaurant’s operations, leading
            to faster turnaround times for your business. With efficient
            workflows and automated processes, tasks that used to take hours can
            now be completed in minutes, boosting productivity and customer
            satisfaction.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center btn1 mt-10">
              Get Started
            </button>
          </Link>
        </div>
        <div>
          <img
            className="object-cover mt-10 md:mt-0"
            src="/images/paytab-img1.webp"
            alt="img"
          />
        </div>
      </div>
      <div className="md:flex  gap-8 mt-20">
        <div className="md:w-10/12">
          <span className="inline-block w-60 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
          Vendrax Solution
          </span>
          <h1 className="text-2xl 5lg:text-xl text2 font-bold mt-10 w-11/12">
          Reduce Labor
          Costs
          </h1>
          <p className="text-xl md:w-11/12 mt-10 text-gray-500">
          By leveraging our Vendrax solution, businesses can significantly reduce labor costs. Our system automates repetitive tasks, optimizes workforce management, and improves efficiency, allowing you to achieve more with fewer resources. This results in lower operational expenses and improved profitability for your business.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center btn1 mt-10">
              Get Started
            </button>
          </Link>
        </div>
        <div>
          <img
            className="object-cover mt-10 md:mt-0"
            src="/images/paytab-img2.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Turnaround;
