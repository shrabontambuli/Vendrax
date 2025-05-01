import React from "react";
import "./Services.css";

const Infrastructure = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 my-24">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5">
        <div>
          <h1 className="text-2xl lg:text-5xl text2 font-bold">
            Payment Infrastructure For Your E-commerce Platform
          </h1>
        </div>
        <div>
          <p className="text-xl text-gray-500">
            When it comes to E-commerce platforms, there are various methods and
            payment gateways, that allow to accept payments from customers
            around the world. Our simple payment methods result in higher
            customer satisfaction.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-32 lg:gap-10 mt-20 pb-20 lg:pb-40">
        <div className="bg-[#eff9f9] w-full h-[653px] rounded-3xl p-10 relative card-hover">
          <h2 className="text2 text-h text-2xl md:text-4xl font-bold">
            Shopping Cart Integration
          </h2>
          <p className="text-gray-500 text-lg text-h font-normal mt-6">
            Shopping Cart Integration Our payment infrastructure for e-commerce
            platforms allows for smooth checkout experiences. With shopping cart
            integration, your customers can easily add products to their carts
            and proceed to payment without any hassle.
          </p>
          <div className="absolute -bottom-28 lg:-bottom-40 right-0 md:right-44 lg:right-0 p-10">
            <div className="relative">
              <img className="img-h" src="/images/ecom-ser1.webp" alt="img" />
              <img
                className="absolute hidden lg:flex top-0 -left-10"
                src="/images/ecom-bg1.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#eff9f9] w-full rounded-3xl h-[653px] p-10 relative card-hover">
          <h2 className="text2 text-h text-2xl md:text-4xl font-bold">
            Customizable Payment Pages
          </h2>
          <p className="text-gray-500 text-lg text-h font-normal mt-6">
            We also provide customizable payment pages that align with your
            brand's aesthetics and messaging, which ultimately improves your
            brand’s consistency and instills trust in customers during the
            payment process.
          </p>
          <div className="absolute -bottom-28 lg:-bottom-40 right-0 md:right-44 lg:right-0 p-10">
            <div className="relative">
              <img className="img-h" src="/images/ecom-ser2.webp" alt="img" />
              <img
                className="absolute hidden lg:flex top-0 -right-10"
                src="/images/ecom-bg2.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#eff9f9] w-full h-[653px] rounded-3xl p-10 relative card-hover">
          <h2 className="text2 text-h text-2xl md:text-4xl font-bold">
            Customizable Payment Pages
          </h2>
          <p className="text-gray-500 text-lg text-h font-normal mt-6">
            We also provide customizable payment pages that align with your
            brand's aesthetics and messaging, which ultimately improves your
            brand’s consistency and instills trust in customers during the
            payment process.
          </p>
          <div className="absolute -bottom-28 lg:-bottom-40 right-0 md:right-44 lg:right-0 p-10">
            <div className="relative">
              <img className="img-h" src="/images/ecom-ser3.webp" alt="img" />
              <img
                className="absolute hidden lg:flex top-0 -right-10"
                src="/images/ecom-bg3.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
