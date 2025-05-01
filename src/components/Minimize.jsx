import React from "react";
import { Link } from "react-router-dom";

const Minimize = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div
        className="my-24 h-[500px] rounded-3xl"
        style={{
          backgroundImage: "url(/images/bg-cta.webp)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="lg:w-10/12 px-2 pt-10 md:pt-20 md:px-4 lg:p-20">
          <div className="space-y-6">
            <h1 className="text-2xl md:text-4xl text-white font-medium">
              Minimize the Errors to Ensure Precision in Data{" "}
              <span className="text2">With Vendrax</span>
            </h1>
            <p className="text-white text-xl md:text-2xl md:w-11/12">
              Discuss your business plans with us, and we will help you find the
              perfect solutions for your business.
            </p>
          </div>
          <div className="md:flex items-center mt-10 md:gap-14">
            <div>
              <h3 className="text-xl text2 tracking-[7px] mb-6 uppercase">
                Feel free to call us at
              </h3>
              <h2 className="flex items-center gap-4 text-4xl md:text-5xl text-white mb-4 md:mb-0">
                <img src="/images/phone3.webp" alt="icon" />
                833-604-8051
              </h2>
            </div>
            <div>
              <Link to="/">
                <button className="btn1">
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

export default Minimize;
