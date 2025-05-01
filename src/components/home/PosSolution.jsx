import React from "react";

const PosSolution = () => {
  return (
    <div className="max-w-7xl mx-auto px-1 lg:px-0 my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="space-y-10">
          <span className="inline-block w-48 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
          Explore Vendrax
          </span>
          <h2 className="text-2xl lg:text-5xl font-bold text2">
          Achieve The Desired Objective With Our Custom POS Solution
          </h2>
          <p className="text-gray-600 text-xl">
          With the increasingly competitive landscape, POS solutions have become efficient and effective technology for business in any industry. With the custom solutions, your business eliminates the risk of bottleneck, ultimately improving the overall efficiency.
          </p>
          <hr className="border-[#c4c4c4]" />
          <div className="md:flex items-center gap-4 text-center md:text-start">
            <div className="md:w-96">
                <h1 className="text-6xl font-bold text-[#228800] mb-4">25%</h1>
                <p>Reduced errors to improve customer satisfactionv</p>
            </div>
            <div className="md:h-40 md:bg-[#c4c4c4] md:w-[1px]"></div>
            <div className="md:w-96 md:ps-4">
                <h1 className="text-6xl font-bold text-[#228800] mb-4">40%</h1>
                <p>Improved transactions due to the accuracy of inventory and financial transactionsv</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full">
          <img className="w-full h-full rounded-2xl object-cover" src="https://plus.unsplash.com/premium_photo-1682088399036-8c08ecf5c6b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fEJ1c2luZXNzZXMlMjBhbmFseWNpcyUyMGJsdXIlMjBpbWd8ZW58MHx8MHx8fDA%3D" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default PosSolution;
