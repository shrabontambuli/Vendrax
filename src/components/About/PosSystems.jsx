import React from "react";
import { Link } from "react-router-dom";

const PosSystems = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 lg:pt-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
        <div className="space-y-10 p-4">
          <h2 className="text-3xl lg:text-5xl font-bold text2">
          Driving Innovation in POS Technology
          </h2>
          <p className="text-gray-600 text-xl">
          Fundrax is committed to revolutionizing the way businesses handle transactions. Our mission is to provide reliable, efficient, and innovative POS solutions that cater to the dynamic needs of modern enterprises.
          </p>
          <Link to="/">
              <button className="btn1 mt-12">
                Get Started
              </button>
            </Link>
        </div>
        <div className="w-full h-full">
          <img className="w-full h-full object-cover md:rounded-2xl md:mx-auto lg:mx-0" src="https://media.istockphoto.com/id/1336299094/photo/business-team-discussing-a-marketing-strategy-in-a-meeting-at-the-office.jpg?s=612x612&w=0&k=20&c=gDDUxXDnlqTGeaRsxj7yQ21pF-P9j2ULHfY6eV0Yr5s=" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default PosSystems;
