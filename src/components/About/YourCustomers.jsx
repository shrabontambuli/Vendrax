import React from "react";
import { Link } from "react-router-dom";

const YourCustomers = () => {
  return (
    <div className="bgs my-24">
      <div className="max-w-7xl mx-auto py-10">
        <div className="space-y-10 p-4 lg:w-8/12 mx-auto">
          <div className="flex justify-center">
            <span className="inline-block w-44 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
              Our Values
            </span>
          </div>
          <h2 className="text-2xl text-center lg:text-5xl font-bold text2">
            Vendrax Narrows The Gap Between Your Customers and Business
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 px-2 lg:px-0 mt-10 md:mt-20 lg:mt-24">
          <div className="flex">
            <div>
              <img src="/images/ab-other1.webp" alt="img" />
            </div>
            <div>
              <img
                className="md:-mt-10"
                src="/images/ab-other2.webp"
                alt="img"
              />
            </div>
          </div>
          <div>
            <div className="space-y-10 p-1 text-center">
              <p className="text-black font-normal text-xl md:-mt-10">
                At Vendrax, our core focus revolves around optimizing reporting
                processes, managing financials effectively, and setting
                measurable goals. We understand the role accuracy reporting
                plays in decision-making and performance evaluation. Our
                efficient well-designed POS system ensures comprehensive
                reporting, providing valuable insights into your business's
                financial health and operational efficiency. With Vendrax, you
                can confidently navigate the complexities of reporting,
                financial management, and goal setting to achieve long-term
                success.
              </p>
              <p className="text-gray-600 text-xl">
                Our POS system provides our customers with better insights into
                company operations, consumer behavior, and sales patterns,
                helping them to make more informed decisions and promote
                business success. We are committed to providing outstanding
                value and assistance to ensure our customers' success. When it’s
                easy for your customers to pay you, they tend to purchase more,
                and you’ll be more likely to earn repeat business. Therefore, we
                design a POS system that is specific to your industry needs and
                incorporates a payment processor that lets you accept various
                credit and debit cards.
              </p>
              <Link to="/">
                <button className="flex items-center justify-center btn1 mx-auto lg:mx-0 mt-10">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCustomers;
