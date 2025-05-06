import React from "react";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 pt-32 mb-24 lg:pt-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
        <div className="space-y-10 p-4">
          <h2 className="text-3xl lg:text-5xl font-bold text2">
            Clover Flex 3G & 4G
          </h2>
          <p className="text-gray-600 text-xl">
            The Clover Flex 3G & 4G is a powerful, portable payment solution
            designed to streamline your business operations. With fast 3G and 4G
            connectivity, it ensures reliable transactions no matter where you
            are. This compact terminal offers a complete point-of-sale system in
            the palm of your hand, supporting card payments, contactless
            transactions, and mobile wallets. Ideal for businesses on the go,
            Clover Flex allows for easy inventory management, real-time
            reporting, and secure processing—all in a user-friendly design. Stay
            connected and enhance customer experience with this all-in-one,
            mobile payment terminal.
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
    </div>
  );
};

export default Demo;
