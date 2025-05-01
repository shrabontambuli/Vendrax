import React from "react";
import { Link } from "react-router-dom";

const ResellerBanner = () => {
  return (
    <div>
      <div className="bg-[#eaeced] pt-24 lg:pt-40">
        <div
          className="py-16 relative"
          style={{
            backgroundImage: "url(/images/iso-banner.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-7xl mx-auto px-2 lg:px-0">
            <div className="space-y-10">
              <div className="space-y-10 md:w-6/12">
                <h2 className="text-2xl lg:text-5xl font-bold text-white">
                  Partner with Vendrax as an ISO Reseller.
                </h2>
                <p className="text-white text-xl">
                  Unlock the potential of your sales team with Vendrax's ISO
                  reseller program tailored for BPOs and selling companies
                  across the USA. As your dedicated ISO partner, we handle all
                  post-sales services, allowing you to focus solely on sales
                  growth and portfolio management. Join us and streamline your
                  operations while maximizing profitability in the POS industry.
                </p>
                <Link to="/">
                  <button className="flex items-center justify-center btn1 mt-10">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-2 lg:px-0 my-24">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <img
                className="w-full h-full rounded-2xl object-cover"
                src="https://plus.unsplash.com/premium_photo-1681074963522-00ca908dce4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG9mZmljZSUyMHdvcmtpbmclMjBibGFjayUyMGJsdXIlMjBpbWd8ZW58MHx8MHx8fDA%3D"
                alt="img"
              />
            </div>
            <div className="bg-white shadow-2xl rounded-3xl h-full w-full">
              <div>
                <div className="p-5 md:p-6 lg:p-16">
                  <h1 className="text-black font-medium text-3xl md:text-xl lg:text-6xl">
                    About Our
                    <span className="text2"> ISO Partner Program</span>
                  </h1>
                  <p className="text-gray-500 text-xl mt-10">
                    Our ISO Partner Program at Vendrax is designed to empower
                    BPOs and selling companies throughout the USA by offering a
                    seamless pathway to success in the POS industry. By joining
                    our program, partners benefit from comprehensive support and
                    expertise, ensuring they can capitalize on every sales
                    opportunity while we handle the complexities of
                    implementation and ongoing customer support.
                  </p>
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
