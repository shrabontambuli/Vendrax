import React from "react";
import "./Services.css";

const SellProducts = () => {
  return (
    <div
      style={{
        backgroundImage: "url(/images/bg-choose.webp)",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover"
      }}
    >
      <div className="max-w-7xl mx-auto py-10 px-4 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div>
            <div className="space-y-6 lg:w-10/12">
              <h1 className="text-2xl lg:text-6xl text2 font-bold">
                Why You Should Choose Vendrax?
              </h1>
              <p className="text-gray-400 text-xl">
                With Vendrax, you can sell products on more than one online
                platform, allowing you to gain sales figures in real-time. The
                automated process eliminates the hassle of manual data entry and
                improves overall customer experience.
              </p>
            </div>
            <div className="grid grid-cols-2 my-10 gap-5">
              <div className="bg2 lg:w-80 lg:h-48 flex justify-center items-center rounded-3xl">
                <div>
                  <img
                    className="mx-auto img2"
                    src="/images/cho-ic1.webp"
                    alt="icon"
                  />
                  <h2 className="text-white font-medium text-center text-xl mt-2">
                    Proficient Tech Support
                  </h2>
                </div>
              </div>
              <div className="bg2 lg:w-80 lg:h-48 flex justify-center items-center rounded-3xl">
                <div>
                  <img
                    className="mx-auto img2"
                    src="/images/cho-ic2.webp"
                    alt="icon"
                  />
                  <h2 className="text-white font-medium text-center text-xl mt-2">
                    Efficient Troubleshooting and Reporting
                  </h2>
                </div>
              </div>
              <div className="bg2 lg:w-80 lg:h-48 flex justify-center items-center rounded-3xl">
                <div>
                  <img
                    className="mx-auto img2"
                    src="/images/cho-ic3.webp"
                    alt="icon"
                  />
                  <h2 className="text-white font-medium text-center text-xl mt-2">
                    Excellent Customer Support
                  </h2>
                </div>
              </div>
              <div className="bg2 lg:w-80 lg:h-48 flex justify-center items-center rounded-3xl">
                <div>
                  <img
                    className="mx-auto img2"
                    src="/images/cho-ic4.webp"
                    alt="icon"
                  />
                  <h2 className="text-white font-medium text-center text-xl mt-2">
                    Secure Payments
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img className="w-full mx-auto" src="/images/choose-img1.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellProducts;
