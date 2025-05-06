import React from "react";
import { Link } from "react-router-dom";

const Collaborate = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 lg:pt-48 mb-24">
      <h2 className="text-3xl lg:text-4xl font-bold text2 text-center">
        Collaborate and Grow with Fundrax
      </h2>
      <div className="md:flex md:flex-row-reverse items-center px-2 lg:px-0 gap-10 mt-20 lg:mt-24">
        <div className="flex flex-col justify-center text-left h-full lg:h-96">
          <h1 className="text-2xl lg:text-4xl text2 font-bold">Referral Program</h1>
          <p className="text-xl lg:text-2xl text-gray-700 mb-10 w-full h-52 flex items-center md:w-10/12">
            Recommend Fundrax to your network and earn rewards for each
            successful referral.
          </p>
          <Link to="/contact">
            <button className="btn1 w-60">Get Started</button>
          </Link>
        </div>
        <div className="w-full h-full mx-auto mt-10 md:mt-0">
          <img
            className="w-full h-full rounded-2xl"
            src="/images/istockphoto-1392016982-612x612.jpg"
            alt=""
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
