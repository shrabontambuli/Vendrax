import React from "react";
import "./Features.css";
import { Link } from "react-router-dom";

const VendraxOffers = () => {
  return (
    <div className="bgs my-24">
      <div className=" py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 px-2 lg:px-0">
          <div className="space-y-10">
            <span className="inline-block w-40 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
              What Key
            </span>
            <h2 className="text-2xl lg:text-6xl font-bold text2">
              Features Vendrax Offers?
            </h2>
          </div>
          <div className="p-2">
            <p className="text-gray-600 text-xl">
              Vendrax offers cutting-edge POS solutions tailored for businesses
              to thrive in the dynamic corporate world. Businesses can track
              sales, track
            </p>
            <div className="lg:flex items-center">
              <p className="text-gray-600 text-xl lg:w-8/12 lg:mt-4">
                inventory in real time, and gain valuable insights through
                accuracy in reporting and analytics.
              </p>
              <Link to="/">
                <button className="flex items-center justify-center btn1 md:mx-auto mt-6">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            className="absolute hidden lg:flex right-0 -top-20"
            src="/images/bg6.webp"
            alt="icon"
          />
        </div>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 px-2 lg:px-0 mt-20">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5">
                <div className="card2 bg-white w-96 h-96 lg:w-80 lg:h-96 space-y-3 px-5 py-14">
                  <img
                    className="mx-auto"
                    src="/images/pfeat-ic1.webp"
                    alt="icon"
                  />
                  <h4 className="text-xl text-center text-black font-medium">
                    Offline Mode
                  </h4>
                  <div className="w-20 bg1 br h-[2px] mx-auto"></div>
                  <p className="text-c text-center text-gray-600">
                    This ensures uninterrupted processing of sales even in an
                    environment with unreliable internet connectivity, allowing
                    your business to continue serving customers.
                  </p>
                </div>
                <div className="card2 bg-white w-96 h-96 lg:w-80 lg:h-96 space-y-3 px-5 py-14">
                  <img
                    className="mx-auto"
                    src="/images/pfeat-ic4.webp"
                    alt="icon"
                  />
                  <h4 className="text-xl text-center text-black font-medium">
                    Integrated Payments
                  </h4>
                  <div className="w-20 bg1 br h-[2px] mx-auto"></div>
                  <p className="text-c text-center text-gray-600">
                    Our POS system integrates a smooth payment feature that
                    supports various payment methods, including credit/debit
                    cards, mobile wallets, and contactless payments.
                  </p>
                </div>
                <div className="card2 bg-white w-96 h-96 lg:w-80 lg:h-96 space-y-3 px-5 py-14">
                  <img
                    className="mx-auto"
                    src="/images/pfeat-ic2.webp"
                    alt="icon"
                  />
                  <h4 className="text-xl text-center text-black font-medium">
                    Multi-Store
                  </h4>
                  <div className="w-20 bg1 br h-[2px] mx-auto"></div>
                  <p className="text-c text-center text-gray-600">
                    For businesses with multiple locations, a multi-store
                    feature is invaluable, giving access to centralized
                    management of sales, inventory, and reporting across all
                    stores or branches.
                  </p>
                </div>
                <div className="card2 bg-white w-96 h-96 lg:w-80 lg:h-96 space-y-3 px-5 py-14">
                  <img
                    className="mx-auto"
                    src="/images/pfeat-ic3.webp"
                    alt="icon"
                  />
                  <h4 className="text-xl text-center text-black font-medium">
                    Safe and Secure
                  </h4>
                  <div className="w-20 bg1 br h-[2px] mx-auto"></div>
                  <p className="text-c text-center text-gray-600">
                    Our system incorporates encrypted payment processing, secure
                    user authentication, and data encryption to protect
                    sensitive customer information and prevent fraud.
                  </p>
                </div>
                <div className="card2 bg-white w-96 h-96 lg:w-80 lg:h-96 space-y-3 px-5 py-10">
                  <img
                    className="mx-auto"
                    src="/images/pfeat-ic5.webp"
                    alt="icon"
                  />
                  <h4 className="text-xl text-center text-black font-medium">
                    Inventory Management
                  </h4>
                  <div className="w-20 bg1 br h-[2px] mx-auto"></div>
                  <p className="text-c text-center text-gray-600">
                    Our systems track inventory levels in real-time,
                    automatically updating stock counts with each sale or
                    purchase. This way your business would maintain optimal
                    inventory levels, avoid stockouts or overstocks, and improve
                    overall inventory accuracy and efficiency.
                  </p>
                </div>
                <div className="card2 bg-white w-96 h-96 lg:w-80 lg:h-96 space-y-3 px-5 py-10">
                  <img
                    className="mx-auto"
                    src="/images/pfeat-ic6.webp"
                    alt="icon"
                  />
                  <h4 className="text-xl text-center text-black font-medium">
                    Real-Time Monitoring
                  </h4>
                  <div className="w-20 bg1 br h-[2px] mx-auto"></div>
                  <p className="text-c text-center text-gray-600">
                    This further improves the security of your business by
                    continuously monitoring the transactions and sending alerts
                    for suspicious activities, ultimately allowing your business
                    to respond swiftly to potential security threats.
                  </p>
                </div>
              </div>
            </div>
            <div className="h-full w-full">
              <img
                className="h-full w-full object-cover rounded-2xl"
                src="/images/feat-ser.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendraxOffers;
