import React from "react";
import { Link } from "react-router-dom";

const AcceptPayments = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-10 p-4 md:pt-0 lg:pb-20">
      <div className="md:flex md:flex-row-reverse items-center gap-8 lg:px-20">
        <div className="md:w-10/12">
          <span className="inline-block w-60 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
            Vendrax Solution
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-black font-bold mt-10 w-11/12">
            Accept Payments on Your Smartphones & Tablets
          </h1>
          <p className="text-xl md:w-11/12 mt-10 md:mt-14 text-gray-500">
            Experience the freedom and versatility of Vendrax mobile payment
            solutions. We introduce you to the payment solution that
            revolutionizes how you accept payments. With our innovative
            technology, you can now transform your smartphones and tablets into
            powerful POS devices, allowing you to accept payments at any time
            and from any location.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center bg-[#228800] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-10">
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
          <img
            className="w-[850px] h-[654px] md:h-[400px] lg:h-[670px] mt-10 md:mt-0"
            src="/images/mp-img1.webp"
            alt="img"
          />
        </div>
      </div>
      <div className="md:flex  gap-8 lg:px-20 mt-20">
        <div className="md:w-10/12">
          <span className="inline-block w-60 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
            Vendrax Solution
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl text-black font-bold mt-10 w-11/12">
          Other <br />
          Perks
          </h1>
          <p className="text-xl md:w-11/12 mt-10 md:mt-14 text-gray-500">
          Mobile POS solutions are highly scalable and adaptable to your business growth – whether you operate a large retail chain or a small boutique – mobile POS systems accommodate your evolving needs, and expanding product lines. Moreover, many mobile POS solutions support customer loyalty programs, allowing you to incentivize repeat purchases, reward loyal customers, and build long-term relationships. These programs contribute to customer retention and increase customer lifetime value.
          </p>
          <Link to="/">
            <button className="flex items-center justify-center bg-[#228800] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-10">
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
          <img
            className="w-[950px] h-[554px] md:h-[400px] lg:h-[570px] mt-10 md:mt-0"
            src="/images/mp-img2.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default AcceptPayments;
