import React from "react";
import { Link } from "react-router-dom";

const Agents = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 mb-24">
      <div className="md:flex md:flex-row-reverse items-center px-2 lg:px-0 gap-10 mt-20 lg:mt-24">
        <div className="flex flex-col justify-center text-left h-full lg:h-96">
          <h1 className="text-4xl text2 font-bold">Agent Revenue Share</h1>
          <p className="text-2xl text-gray-700 mb-10 w-full h-52 flex items-center md:w-10/12">
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
              src="https://media.istockphoto.com/id/2210201687/photo/time-and-money-growth-symbolized-by-arrows-coins-and-a-house-rising-behind-a-clock-reflecting.jpg?s=612x612&w=0&k=20&c=UEWXfSucM6dQrkAfWZXeqc6c95AcuRm_3yRm2TSoMnI="
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
