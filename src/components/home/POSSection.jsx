import React from "react";

const POSSection = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: "url(/images/bg-ser.webp)",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center",
        backgroundSize:"cover"
      }}
    >
      <div className="md:max-w-screen-2xl mx-auto lg:px-10 p-4 relative">
        <div>
          <span className="inline-block w-80 py-1 bg-[#553a29] text-[#ee5e2e] rounded-full font-semibold text-lg text-center mt-40 md:mt-24 mb-6 tracking-widest">
            POS SYSTEM SERVICES
          </span>
          <h2 className="text-2xl md:text-5xl lg:text-[80px] lg:w-10/12 leading-tight font-bold text-white">
            Get a POS System That Aligns With Your Industry
          </h2>
          <img
            className="absolute w-40 lg:w-64 -top-12 right-10"
            src="/images/ser-bg1.webp"
            alt="icon"
          />
        </div>

        <div className="md:grid grid-cols-2 items-center mt-28">
          <div className=" hiden md:flex"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 pb-36">
            <div className="lg:w-96">
              <img className="mx-auto mb-4" src="/images/ser-ic2.webp" alt="icon" />
              <h1 className="text-white text-2xl font-medium text-center">Ecommerce</h1>
            </div>
            <div className="lg:w-96">
              <img className="mx-auto mb-4" src="/images/ser-ic4.webp" alt="icon" />
              <h1 className="text-white text-2xl font-medium text-center">Restaurant</h1>
            </div>
            <div className="lg:w-96">
              <img className="mx-auto mb-4" src="/images/ser-ic5.webp" alt="icon" />
              <h1 className="text-white text-2xl font-medium text-center">POS service</h1>
            </div>
            <div className="lg:w-96">
              <img className="mx-auto mb-4" src="/images/ser-ic6.webp" alt="icon" />
              <h1 className="text-white text-2xl font-medium text-center">Pay at the table</h1>
            </div>
            <div className="lg:w-96">
              <img className="mx-auto mb-4" src="/images/ser-ic7.webp" alt="icon" />
              <h1 className="text-white text-2xl font-medium text-center">Desktop Terminal</h1>
            </div>
            <div className="lg:w-96">
              <img className="mx-auto mb-4" src="/images/ser-ic8.webp" alt="icon" />
              <h1 className="text-white text-2xl font-medium text-center">Mobile Payment</h1>
            </div>
            <div className="lg:w-96">
              <img className="mx-auto mb-4" src="/images/ser-ic9.webp" alt="icon" />
              <h1 className="text-white text-2xl font-medium text-center">Wireless Terminal</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSSection;
