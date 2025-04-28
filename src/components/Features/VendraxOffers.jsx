import React from "react";
import { Link } from "react-router-dom";

const VendraxOffers = () => {
  return (
    <div className="bg-[#eff9f9] h-[3200px] md:h-full pb-28">
      <div className="max-w-screen-2xl mx-auto lg:px-10">
        <div className="pt-20 lg:pt-48 grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="space-y-10 p-4">
            <span className="inline-block w-44 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
              What Key
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
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
              <p className="text-gray-600 text-xl">
                inventory in real time, and gain valuable insights through
                accuracy in reporting and analytics.
              </p>
              <Link to="/">
                <button className="flex items-center justify-center bg-[#e53e29] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mx-auto md:mx-0 mt-10">
                  Get Started
                  <img
                    className="absolute -right-3"
                    src="/images/red-btn.webp"
                    alt=""
                  />
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="relative">
          <img className="absolute right-5 lg:-right-20 -top-20" src="/images/bg6.webp" alt="icon" />
        </div>
        <div className="mb-44 md:mb-20 lg:mb-0 p-1">
          <div>
            <div className="relative">
              <div className="flex justify-end w-full mt-56">
                <img className="h-screen md:h-[1193px] md:mx-auto lg:mx-0" src="/images/feat-ser.webp" alt="img" />
              </div>
              <div className="absolute right-2 -bottom-24 md:bottom-20 md:right-40 lg:right-[42%] lg:-top-48 px-2">
                <div className="relative h-[400px] w-[390px] mx-auto lg:mx-0 md:w-[816px] md:h-[600px] lg:h-[1270px] lg:w-[815px]">
                  <div className="bg-white shadow-xl rounded-lg space-y-10 md:space-y-6 lg:space-y-10 h-full w-full text-center absolute z-30 mt-10 bottom-[800px] md:bottom-[500px] md:left-28 lg:left-0 lg:bottom-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center">
                      <div className="hover:bg-[#2aacae] bg-white hover:text-white transition-all w-[417px] md:w-[407.5px] h-[423.39px] py-20 px-16 space-y-3">
                        <img
                          className="mx-auto"
                          src="/images/pfeat-ic1.webp"
                          alt="icon"
                        />
                        <h4 className="text-2xl text-black font-medium">
                          Offline Mode
                        </h4>
                        <div className="w-20 bg-[#07837f] h-[2px] mx-auto"></div>
                        <p className="text-black">
                          This ensures uninterrupted processing of sales even in
                          an environment with unreliable internet connectivity,
                          allowing your business to continue serving customers.
                        </p>
                      </div>
                      <div className="bg-[#f8fdfd] hover:bg-[#2aacae] hover:text-white transition-all w-[417px] md:w-[407.5px] h-[423.39px] py-20 px-12 space-y-3">
                        <img
                          className="mx-auto"
                          src="/images/pfeat-ic4.webp"
                          alt="icon"
                        />
                        <h4 className="text-2xl text-black font-medium">
                          Integrated Payments
                        </h4>
                        <div className="w-20 bg-[#07837f] h-[2px] mx-auto"></div>
                        <p className="text-black">
                          Our POS system integrates a smooth payment feature
                          that supports various payment methods, including
                          credit/debit cards, mobile wallets, and contactless
                          payments.
                        </p>
                      </div>
                      <div className="bg-[#f8fdfd] hover:bg-[#2aacae] hover:text-white transition-all w-[417px] md:w-[407.5px] h-[423.39px] py-20 px-12 space-y-3">
                        <img
                          className="mx-auto"
                          src="/images/pfeat-ic2.webp"
                          alt="icon"
                        />
                        <h4 className="text-2xl text-black font-medium">
                          Multi-Store
                        </h4>
                        <div className="w-20 bg-[#07837f] h-[2px] mx-auto"></div>
                        <p className="text-black">
                          For businesses with multiple locations, a multi-store
                          feature is invaluable, giving access to centralized
                          management of sales, inventory, and reporting across
                          all stores or branches.
                        </p>
                      </div>
                      <div className="hover:bg-[#2aacae] bg-white hover:text-white transition-all w-[417px] md:w-[407.5px] h-[423.39px] py-20 px-12 space-y-3">
                        <img
                          className="mx-auto"
                          src="/images/pfeat-ic3.webp"
                          alt="icon"
                        />
                        <h4 className="text-2xl text-black font-medium">
                          Safe and Secure
                        </h4>
                        <div className="w-20 bg-[#07837f] h-[2px] mx-auto"></div>
                        <p className="text-black">
                          Our system incorporates encrypted payment processing,
                          secure user authentication, and data encryption to
                          protect sensitive customer information and prevent
                          fraud.
                        </p>
                      </div>
                      <div className="hover:bg-[#2aacae] bg-white hover:text-white transition-all w-[417px] md:w-[407.5px] h-[423.39px] py-20 px-12 space-y-3">
                        <img
                          className="mx-auto"
                          src="/images/pfeat-ic5.webp"
                          alt="icon"
                        />
                        <h4 className="text-2xl text-black font-medium">
                          Inventory Management
                        </h4>
                        <div className="w-20 bg-[#07837f] h-[2px] mx-auto"></div>
                        <p className="text-black">
                          Our systems track inventory levels in real-time,
                          automatically updating stock counts with each sale or
                          purchase. This way your business would maintain
                          optimal inventory levels, avoid stockouts or
                          overstocks, and improve overall inventory accuracy and
                          efficiency.
                        </p>
                      </div>
                      <div className="bg-[#f8fdfd] hover:bg-[#2aacae] hover:text-white transition-all w-[417px] md:w-[407.5px] h-[423.39px] py-20 px-12 space-y-3">
                        <img
                          className="mx-auto"
                          src="/images/pfeat-ic6.webp"
                          alt="icon"
                        />
                        <h4 className="text-2xl text-black font-medium">
                          Real-Time Monitoring
                        </h4>
                        <div className="w-20 bg-[#07837f] h-[2px] mx-auto"></div>
                        <p className="text-black">
                          This further improves the security of your business by
                          continuously monitoring the transactions and sending
                          alerts for suspicious activities, ultimately allowing
                          your business to respond swiftly to potential security
                          threats.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img
                    className="absolute w-80 md:w-9/12 -bottom-16 -left-5 md:-bottom-52 md:-left-11 lg:-right-5 z-20 rounded-[100px]"
                    src="/images/bg4.webp"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendraxOffers;
