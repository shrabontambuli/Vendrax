import React from "react";
import { Link } from "react-router-dom";

const ResellerBanner = () => {
  return (
    <div>
      <div className="bg-[#eaeced] pt-24 lg:pt-40">
        <div
          className="h-[780px] pt-16 relative"
          style={{
            backgroundImage: "url(/images/iso-banner.webp)",
          }}
        >
          <div className="max-w-screen-2xl mx-auto lg:px-10 py-2 md:py-6">
            <div className="p-4 space-y-20 md:space-y-0">
              <div className="space-y-10 md:w-6/12">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white">
                  Partner with Vendrax as an ISO Reseller.
                </h2>
                <img src="/images/max.png" alt="icon" />
                <p className="text-white text-xl lg:text-2xl">
                  Unlock the potential of your sales team with Vendrax's ISO
                  reseller program tailored for BPOs and selling companies
                  across the USA. As your dedicated ISO partner, we handle all
                  post-sales services, allowing you to focus solely on sales
                  growth and portfolio management. Join us and streamline your
                  operations while maximizing profitability in the POS industry.
                </p>
                <Link to="/">
                  <button className="flex items-center justify-center bg-[#e53e29] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mt-10">
                    Apply Now
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
        </div>
      </div>
      <div className="max-w-screen-2xl py-20 lg:py-36 mx-auto mb-44 md:mb-20 lg:mb-0 p-1">
        <div>
          <div className="relative lg:w-[1009px]">
            <img src="/images/iso-img1.webp" alt="img" />
            <div className="absolute right-2 -bottom-24 md:bottom-20 md:right-40 lg:-right-[42%] lg:-bottom-10">
              <div className="relative h-[500px] w-[390px] mx-auto lg:mx-0 md:w-[400px] md:h-[600px] lg:h-[760px] lg:w-[624px]">
                <div className="bg-white shadow-2xl right-2 top-10 rounded-3xl lg:space-y-10 h-full w-full absolute z-30 mt-20 md:mt-0">
                  <div className="relative lg:h-[760px]">
                    <div className="p-5 md:p-6 lg:p-16">
                      <h1 className="text-black font-medium text-3xl md:text-xl lg:text-6xl">
                        About Our
                        <span className="text-[#ed1d24]">
                          {" "}
                          ISO Partner Program
                        </span>
                      </h1>
                      <p className="text-gray-500 md:text-xl mt-10 md:mt-20">
                        Our ISO Partner Program at Vendrax is designed to
                        empower BPOs and selling companies throughout the USA by
                        offering a seamless pathway to success in the POS
                        industry. By joining our program, partners benefit from
                        comprehensive support and expertise, ensuring they can
                        capitalize on every sales opportunity while we handle
                        the complexities of implementation and ongoing customer
                        support.
                      </p>
                    </div>
                    <img
                      className="absolute lg:bottom-0"
                      src="/images/download.webp"
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResellerBanner;
