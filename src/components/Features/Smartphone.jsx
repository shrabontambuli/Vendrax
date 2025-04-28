import React from "react";
import { Link } from "react-router-dom";

const Smartphone = () => {
  return (
    <div className="md:max-w-screen-2xl mx-auto lg:px-10 py-10 md:py-6">
      <div className="md:flex md:flex-row-reverse items-center gap-10 p-4 space-y-20 md:space-y-0">
        <div className="space-y-10 md:w-6/12">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
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
          <img className="w-full" src="/images/feat-img2.webp" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Smartphone;
