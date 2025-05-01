import React from "react";
import { Link } from "react-router-dom";

const AgentBanner = () => {
  return (
    <div>
      <div className="bg-[#eaeced] pt-24 lg:pt-40">
        <div
          style={{
            backgroundImage: "url(/images/agent-banner.webp)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="max-w-7xl mx-auto px-2 lg:px-0 py-2 md:py-10">
            <div className="p-4 space-y-20 md:space-y-0">
              <div className="space-y-10 md:w-11/12 lg:w-6/12">
                <h2 className="text-2xl lg:text-5xl font-bold text2">
                  Join Vendrax as an Authorized Agent
                </h2>
                <p className="text-white text-xl">
                  Become an authorized agent by joining our Agent-Revenue Share
                  Program. Enjoy the flexibility and rewards of managing your
                  own business under the support of a trusted and reliable
                  partner.
                </p>
                <Link to="/">
                  <button className="flex items-center justify-center btn1 mt-10">
                    Become an Agent
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl my-24 mx-auto px-2 lg:px-0">
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
            <div className="w-full h-full">
              <img
                className="object-cover w-full h-full rounded-2xl"
                src="https://plus.unsplash.com/premium_photo-1663051313244-6b945eabec81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzI5fHxwYXltZW50JTIwYmxhY2slMjBibHVyJTIwaW1nfGVufDB8fDB8fHww"
                alt="img"
              />
            </div>
            <div className="bg-white shadow-2xl rounded-3xl h-full w-full mt-20 md:mt-0">
              <div>
                <div className="p-5 md:p-6 lg:p-16">
                  <h1 className="text-black font-medium text-2xl lg:text-5xl">
                    About Our
                    <span className="text2">
                      {" "}
                      Revenue Share Program
                    </span>
                  </h1>
                  <p className="text-gray-500 md:text-xl mt-10">
                    Where networking skills can turn into a lucrative revenue
                    stream. Through our revenue share program, you will have the
                    power to offer the best in class POS solutions and services
                    on your negotiated rates and earn monthly from the
                    processing from your portfolio.
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

export default AgentBanner;
