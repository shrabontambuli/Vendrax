import React from "react";
import { Link } from "react-router-dom";

const AcceptPayments = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 mb-24">
      <div className="md:flex md:flex-row-reverse items-center gap-8">
        <div className="md:w-10/12">
          <span className="inline-block w-60 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
            Vendrax Solution
          </span>
          <h1 className="text-xl lg:text-5xl text2 font-bold mt-10">
            Accept Payments on Your Smartphones & Tablets
          </h1>
          <p className="text-xl md:w-11/12 mt-10 text-gray-500">
            Experience the freedom and versatility of Vendrax mobile payment
            solutions. We introduce you to the payment solution that
            revolutionizes how you accept payments. With our innovative
            technology, you can now transform your smartphones and tablets into
            powerful POS devices, allowing you to accept payments at any time
            and from any location.
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
            src="/images/mp-img1.webp"
            alt="img"
          />
        </div>
      </div>
      <div className="md:flex items-center gap-8 lg:px-20 mt-20">
        <div className="md:w-10/12">
          <span className="inline-block w-60 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
            Vendrax Solution
          </span>
          <h1 className="text-2xl lg:text-5xl text2 font-bold mt-10">
            Other Perks
          </h1>
          <p className="text-xl mt-10 text-gray-500">
            Mobile POS solutions are highly scalable and adaptable to your
            business growth – whether you operate a large retail chain or a
            small boutique – mobile POS systems accommodate your evolving needs,
            and expanding product lines. Moreover, many mobile POS solutions
            support customer loyalty programs, allowing you to incentivize
            repeat purchases, reward loyal customers, and build long-term
            relationships. These programs contribute to customer retention and
            increase customer lifetime value.
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
            src="/images/mp-img2.webp"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default AcceptPayments;
