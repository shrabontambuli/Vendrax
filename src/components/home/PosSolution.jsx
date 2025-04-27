import React from "react";

const PosSolution = () => {
  return (
    <div className="max-w-screen-2xl mx-auto lg:px-10 py-20 md:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="space-y-10 p-4">
          <span className="inline-block w-44 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
          Explore Vendrax
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
          Achieve The Desired Objective With Our Custom POS Solution
          </h2>
          <p className="text-gray-600 text-xl">
          With the increasingly competitive landscape, POS solutions have become efficient and effective technology for business in any industry. With the custom solutions, your business eliminates the risk of bottleneck, ultimately improving the overall efficiency.
          </p>
          <hr className="border-[#c4c4c4]" />
          <div className="md:flex items-center gap-4 text-center md:text-start">
            <div className="md:w-96">
                <h1 className="text-6xl font-bold text-[#00a7a2] mb-4">25%</h1>
                <p>Reduced errors to improve customer satisfactionv</p>
            </div>
            <div className="md:h-40 md:bg-[#c4c4c4] md:w-[1px]"></div>
            <div className="md:w-96 md:ps-4">
                <h1 className="text-6xl font-bold text-[#00a7a2] mb-4">40%</h1>
                <p>Improved transactions due to the accuracy of inventory and financial transactionsv</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src="/images/ven-img.webp" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default PosSolution;
