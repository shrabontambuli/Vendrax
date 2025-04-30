import React from "react";
import { Link } from "react-router-dom";

const YourCustomers = () => {
  return (
    <div className="bg-[#eff9f9] lg:mx-10 rounded-3xl py-10 lg:py-20">
      <div className="space-y-10 p-4 lg:w-6/12 mx-auto lg:pt-44">
        <div className="flex justify-center">
          <span className="inline-block w-44 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
            Our Values
          </span>
        </div>
        <h2 className="text-3xl text-center md:text-4xl lg:text-5xl font-bold text-gray-900">
          Vendrax Narrows The Gap Between Your Customers and Business
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-screen-2xl mx-auto lg:10 mt-10 md:mt-20 lg:mt-28 p-1">
        <div className="flex">
          <div>
            <img src="/images/ab-other1.webp" alt="img" />
          </div>
          <div>
            <img className="md:-mt-10" src="/images/ab-other2.webp" alt="img" />
          </div>
        </div>
        <div>
          <div className="space-y-10 p-4 text-center lg:w-11/12">
            <p className="text-black font-normal text-xl lg:text-2xl md:-mt-10">
              At Vendrax, our core focus revolves around optimizing reporting
              processes, managing financials effectively, and setting measurable
              goals. We understand the role accuracy reporting plays in
              decision-making and performance evaluation. Our efficient
              well-designed POS system ensures comprehensive reporting,
              providing valuable insights into your business's financial health
              and operational efficiency. With Vendrax, you can confidently
              navigate the complexities of reporting, financial management, and
              goal setting to achieve long-term success.
            </p>
            <p className="text-gray-600 text-xl lg:text-2xl">
              Our POS system provides our customers with better insights into
              company operations, consumer behavior, and sales patterns, helping
              them to make more informed decisions and promote business success.
              We are committed to providing outstanding value and assistance to
              ensure our customers' success. When it’s easy for your customers
              to pay you, they tend to purchase more, and you’ll be more likely
              to earn repeat business. Therefore, we design a POS system that is
              specific to your industry needs and incorporates a payment
              processor that lets you accept various credit and debit cards.
            </p>
            <Link to="/">
              <button className="flex items-center justify-center bg-[#228800] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mx-auto md:mx-0 mt-10">
                Get Started
                <img
                  className="absolute -right-3"
                  src="/images/red-btn.webp"
                  alt=""
                />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCustomers;
