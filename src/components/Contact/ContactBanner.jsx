import React from "react";

const ContactBanner = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 lg:pt-48">
        <h1 className="text-2xl lg:text-5xl text2 mb-10 font-medium">
          Revolutionize Your Customer Interactions with Our POS Technology
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-end gap-5">
          <div className="h-full">
            <img
              className="h-full w-full object-cover rounded-2xl"
              src="/images/acc-ban1.webp"
              alt="img"
            />
          </div>
          <div>
            <h4 className="text2 text-xl lg:text-2xl mt-6 md:mt-0">
              With features such as real-time inventory tracking, automated
              reporting, and secure payment processing, our POS technology
              ensures smooth and efficient interactions with your customers.
            </h4>
            <div className="w-16 h-2 bg1 my-8"></div>
            <img
              className="h-96 object-cover w-full "
              src="/images/acc-ban2.webp"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactBanner;
