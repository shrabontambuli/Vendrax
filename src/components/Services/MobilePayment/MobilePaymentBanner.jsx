import React from "react";

const MobilePaymentBanner = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/acc-banner.webp)",
      }}
    >
      <div className="md:max-w-screen-2xl mx-auto px-4 lg:px-10 pt-32 md:pt-24 lg:pt-56">
        <h1 className="text-4xl lg:text-6xl text-white font-medium mb-10 md:mb-20 lg:mb-32 ">
          One Tap, Anywhere, Anytime! Adopt Fast and Secure Payment Processing
        </h1>
        <div className="md:flex gap-6">
          <div>
            <img src="/images/mp-ban1.webp" alt="img" />
          </div>
          <div>
            <h4 className="text-white text-xl lg:text-2xl mt-6 md:mt-0 w-96">
            Our innovative technology allows you to facilitate fast, secure, and smooth transactions with just one tap, from anywhere and at any time.
            </h4>
            <div className="w-20 h-2 bg-[#105964] my-4"></div>
            <img src="/images/mp-ban2.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePaymentBanner;
