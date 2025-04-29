import React from "react";

const PayBanner = () => {
  return (
    <div
      className="h-screen md:h-full lg:h-screen"
      style={{
        backgroundImage: "url(/images/acc-banner.webp)",
      }}
    >
      <div className="md:max-w-screen-2xl mx-auto px-4 lg:px-10 pt-32 md:pt-24 lg:pt-56">
        <h1 className="text-4xl lg:text-6xl text-white font-medium mb-10 md:mb-20 lg:mb-32 ">
        Providing Your Customers the Ultimate Experience with Pay at The Table Solution
        </h1>
        <div className="md:flex gap-6">
          <div>
            <img src="/images/paytab-ban1.webp" alt="img" />
          </div>
          <div>
            <h4 className="text-white text-xl lg:text-2xl mt-6 md:mt-0 w-96">
            With our pay-at-the-table services, your guests can settle their checks using handheld payment terminals brought over by servers.
            </h4>
            <div className="w-20 h-2 bg-[#105964] my-4"></div>
            <img src="/images/paytab-ban2.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayBanner;
