import React from "react";

const ContactBanner = () => {
  return (
    <div
      className="h-screen md:h-full lg:h-screen"
      style={{
        backgroundImage: "url(/images/acc-banner.webp)",
      }}
    >
      <div className="md:max-w-screen-2xl mx-auto px-4 lg:px-10 pt-32 md:pt-24 lg:pt-56">
        <h1 className="text-2xl lg:text-7xl text-white font-medium mb-10 md:mb-20 lg:mb-32 lg:w-full">
        Revolutionize Your Customer Interactions
        with Our POS Technology
        </h1>
        <div className="md:flex gap-6">
          <div>
            <img src="/images/acc-ban1.webp" alt="img" />
          </div>
          <div>
            <h4 className="text-white text-xl lg:text-2xl mt-6 md:mt-0 md:w-[480px]">
            With features such as real-time inventory tracking, automated reporting, and secure payment processing, our POS technology ensures smooth and efficient interactions with your customers.
            </h4>
            <div className="w-20 h-2 bg-[#105964] my-4"></div>
            <img src="/images/acc-ban2.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
