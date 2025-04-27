import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col lg:flex-row md:max-w-screen-2xl mx-auto items-center justify-between py-28 px-4 md:px-10 bg-[#ffffff]">
      {/* Left content */}
      <div className="lg:w-1/2 space-y-10">
        <span className="inline-block w-44 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
          What We Offer
        </span>
        <h2 className="text-4xl lg:text-6xl font-bold text-gray-900">
          Get All The Features You Need In Your POS
        </h2>
        <p className="text-gray-600 text-xl">
          Your business deserves access to convenience; hence, our all-in-one
          POS system is designed to provide you with every feature you need in a
          single platform. Allow your business to make informed decisions and
          optimize performance in order to achieve the desired objective.
        </p>

        {/* Features List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex items-center p-4 bg-[#eff9f9] rounded-lg">
            <div className="text-2xl mr-4">
              <img src="/images/who-ic1.webp" alt="icon" />
            </div>
            <div className="font-semibold text-gray-700 text-xl">
              Barcode Scanner
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#eff9f9] rounded-lg">
            <div className="text-2xl mr-4">
              <img src="/images/who-ic2.webp" alt="icon" />
            </div>
            <div className="font-semibold text-gray-700 text-xl">
              Reward Programs
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#eff9f9] rounded-lg">
            <div className="text-2xl mr-4">
              <img src="/images/who-ic3.webp" alt="icon" />
            </div>
            <div className="font-semibold text-gray-700 text-xl">
              Customer Management
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#eff9f9] rounded-lg">
            <div className="text-2xl mr-4">
              <img src="/images/who-ic4.webp" alt="icon" />
            </div>
            <div className="font-semibold text-gray-700 text-xl">
              Multiple Payment Methods
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#eff9f9] rounded-lg">
            <div className="text-2xl mr-4">
              <img src="/images/who-ic5.webp" alt="icon" />
            </div>
            <div className="font-semibold text-gray-700 text-xl">
              Inventory Management
            </div>
          </div>
          <div className="flex items-center p-4 bg-[#eff9f9] rounded-lg">
            <div className="text-2xl mr-4">
              <img src="/images/who-ic6.webp" alt="icon" />
            </div>
            <div className="font-semibold text-gray-700 text-xl">
              User Accounts
            </div>
          </div>
        </div>

        {/* Get Started Button */}
        <button className="flex items-center justify-center border-2 border-black text-black hover:text-white font-semibold px-6 py-4 rounded-full hover:bg-black transition-all w-64 text-lg relative uppercase">
          Get Started
          <img
            className="absolute -right-3"
            src="/images/white-btn.webp"
            alt=""
          />
        </button>
      </div>

      {/* Right image */}
      <div className="mt-20 lg:mt-0">
        <div className=" w-full h-full">
          <img
            src="/images/who-img.webp"
            alt="POS Device"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
