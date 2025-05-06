import React from "react";
import { Link } from "react-router-dom";

const Agents = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 mb-24">
      <div className="md:flex md:flex-row-reverse items-center px-2 lg:px-0 gap-10 mt-20 lg:mt-24">
        <div className="flex flex-col justify-center text-left h-full lg:h-96">
          <h1 className="text-3xl lg:text-4xl text2 font-bold">Agent Revenue Share</h1>
          <p className="text-xl lg:text-2xl text-gray-600 lg:mb-10 w-full h-52 flex items-center md:w-10/12">
          Join as an agent and benefit from revenue-sharing opportunities, backed by our dedicated support team.
          </p>
          <Link to="/contact">
            <button className="btn1 w-60">Get Started</button>
          </Link>
        </div>
        <div className="w-full h-full mt-10 md:mt-0">
          <div className="w-full h-full">
            <img
              className="w-full h-full rounded-2xl"
              src="/images/istockphoto-1413761479-612x612.jpg"
              alt=""
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agents;
