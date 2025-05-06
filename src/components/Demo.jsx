import React from "react";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 mb-24 lg:pt-48">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="space-y-10 p-4">
            <h2 className="text-3xl lg:text-5xl font-bold text2">
              Clover Flex 3G & 4G
            </h2>
            <p className="text-gray-600 text-xl">
              The Clover Flex 3G & 4G is a powerful, portable payment solution
              designed to streamline your business operations. With fast 3G and
              4G connectivity, it ensures reliable transactions no matter where
              you are. This compact terminal offers a complete point-of-sale
              system in the palm of your hand, supporting card payments,
              contactless transactions, and mobile wallets. Ideal for businesses
              on the go, Clover Flex allows for easy inventory management,
              real-time reporting, and secure processing—all in a user-friendly
              design. Stay connected and enhance customer experience with this
              all-in-one, mobile payment terminal.
            </p>
            <Link to="/contact">
              <button className="btn1 mt-12">Get Started</button>
            </Link>
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover rounded-2xl md:mx-auto lg:mx-0"
              src="/images/cover-page-3.webp"
              alt="img"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mt-24">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover rounded-2xl md:mx-auto lg:mx-0"
              src="/images/cover-page-3.webp"
              alt="img"
            />
          </div>
          <div className="space-y-10 p-4">
            <h2 className="text-3xl lg:text-5xl font-bold text2">
              Clover Duo Station
            </h2>
            <p className="text-gray-600 text-xl">
              Clover Duo Station: the ultimate power hub for your devices.
              Sleek, stylish, and efficient, this innovative station is designed
              to charge two devices simultaneously, cutting down on clutter and
              maximizing convenience. Whether you’re powering up your phone,
              tablet, or other electronics, the Clover Duo Station offers fast,
              reliable charging with a modern, minimalist design that
              complements any space. Elevate your tech setup with the Clover Duo
              Station—where form meets function seamlessly.
            </p>
            <Link to="/contact">
              <button className="btn1 mt-12">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="my-24">
        <div className="bg1 mt-24 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10 px-2 lg:px-0">
              <div className="text-center md:text-start lg:space-y-20">
                <h2 className="text-2xl lg:text-4xl font-bold text-white">
                  A920 Android SmartPOS
                </h2>
                <p className="text-xl lg:text-2xl text-white mt-6">
                  The revolutionary terminal that started it all. The A920
                  combines the full features of an Android tablet with a
                  powerful POS payment terminal, all in a sleek and compact
                  design.
                </p>
                <Link to="/contact">
                  <button className="btn1 border-white border-2 w-60 mt-10 lg:mt-20">
                    Get Started
                  </button>
                </Link>
              </div>
              <div>
                <img
                  className="w-full h-full object-cover rounded-2xl"
                  src="/images/pexels-mikhail-nilov-9304427-1.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 lg:px-0 my-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
          <div className="space-y-10 p-4">
            <h2 className="text-3xl lg:text-5xl font-bold text2">
            Desk/5000 Countertop Terminal
            </h2>
            <p className="text-gray-600 text-xl">
            Accept quick and secure payments at your counter with the Ingenico Desk/5000. Enjoy increased speed and a user-friendly touchscreen. The Desk/5000 can also be connected to your talech POS for a convenient and secure checkout experience.
            </p>
            <Link to="/contact">
              <button className="btn1 mt-12">Get Started</button>
            </Link>
          </div>
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover rounded-2xl md:mx-auto lg:mx-0"
              src="/images/pexels-yan-krukau-6818146-1.jpg"
              alt="img"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 mt-24">
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover rounded-2xl md:mx-auto lg:mx-0"
              src="/images/n910.jpg"
              alt="img"
            />
          </div>
          <div className="space-y-10 p-4">
            <h2 className="text-3xl lg:text-5xl font-bold text2">
            Newland N910 Smart Terminal
            </h2>
            <p className="text-gray-600 text-xl">
            The Newland N910 Smart Terminal is a robust and versatile payment solution combining the features of a smart tablet with the durability of a payment terminal. It offers businesses the ability to handle payments efficiently while enhancing customer interaction. Here’s an overview of its key features:
            </p>
            <Link to="/contact">
              <button className="btn1 mt-12">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;
