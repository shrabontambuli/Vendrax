import React from "react";
import { Link } from "react-router-dom";

const Minimize = () => {
  return (
    <div
      className="my-28 h-[500px] lg:w-10/12 mx-auto rounded-3xl"
      style={{
        backgroundImage: "url(/images/bg-cta.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="lg:w-8/12 p-8 md:p-10 lg:p-20">
        <div className="space-y-6">
          <h1 className="text-2xl md:text-6xl text-white font-medium">
            Minimize the Errors to Ensure Precision in Data{" "}
            <span className="text-[#ed1d24]">With Vendrax</span>
          </h1>
          <p className="text-white text-xl md:text-2xl md:w-11/12">
            Discuss your business plans with us, and we will help you find the
            perfect solutions for your business.
          </p>
        </div>
        <div className="md:flex items-center md:ps-28 mt-10 md:gap-14">
          <div>
            <h3 className="text-xl text-[#00a39e] tracking-[7px] mb-6 uppercase">Feel free to call us at</h3>
            <h2 className="flex items-center gap-4 text-4xl md:text-5xl text-white mb-4 md:mb-0">
              <img src="/images/phone3.webp" alt="icon" />
              833-604-8051
            </h2>
          </div>
          <div>
            <Link to="/">
              <button className="bg-[#e53e29] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-xl uppercase">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minimize;
