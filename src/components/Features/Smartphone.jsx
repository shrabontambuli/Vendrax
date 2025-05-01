import React from "react";
import { Link } from "react-router-dom";

const Smartphone = () => {
  return (
    <div className="max-w-7xl mx-auto my-24">
      <div className="md:flex md:flex-row-reverse items-center px-2 lg:px-0 gap-5">
        <div className="space-y-10 md:w-11/12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text2">
            Accept Payments on Your Smartphone or Tablet
          </h2>
          <p className="text-gray-600 text-xl lg:text-2xl">
            In today's dynamic business landscape, the ability to accept
            payments on the go is essential for success. Our contemporary POS
            system turns your smartphone or tablet into a fully functional POS
            terminal, providing you the flexibility to accept payments anytime
            and anywhere.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center btn1 mt-10">
              Get Started
            </button>
          </Link>
        </div>
        <div>
          <img className="w-full mt-10 md:mt-0" src="/images/feat-img2.webp" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Smartphone;
