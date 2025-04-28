import React from "react";

const ResellerProgram = () => {
  return (
    <div className="pt-20">
      <img className="w-full" src="/images/bg-new.png" alt="img" />
      <div className="mt-24">
        <div
          className=" max-w-screen-2xl lg:h-[1000px] mx-auto"
          style={{
            backgroundImage: "url(/images/bg-isoimg3.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" p-5 md:p-6 lg:p-16 rounded-lg h-full w-full z-30 mt-10">
            <div className="text-center space-y-10 md:space-y-6 mb-16 md:mb-36">
              <span className="inline-block w-44 py-1 bg-[#e750503d] text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
                Collaborate
              </span>
              <h1 className="text-white font-medium text-xl lg:text-5xl">
                Maximize Earnings with Vendrax Referral Program
              </h1>
            </div>
            <div className="lg:w-6/12">
              <div className="pt-4">
                <div className="flex items-center gap-6">
                  <img
                    className="w-10 h-10"
                    src="/images/tick7.webp"
                    alt="icon"
                  />
                  <p className="text-xl font-medium text-white">
                    Introduce new businesses to Vendrax, invite them to sign up,
                    and earn an immediate bonus.
                  </p>
                </div>
                <div className="bg-[#ee642e] h-[2px] md:w-9/12 mt-14"></div>
              </div>
              <div className="pt-10">
                <div className="flex items-center gap-6">
                  <img
                    className="w-10 h-10"
                    src="/images/tick7.webp"
                    alt="icon"
                  />
                  <p className="text-xl font-medium text-white">
                    Introduce new businesses to Vendrax, invite them to sign up,
                    and earn an immediate bonus.
                  </p>
                </div>
                <div className="bg-[#ee642e] h-[2px] md:w-9/12 mt-14"></div>
              </div>
              <div className="pt-10">
                <div className="flex items-center gap-6">
                  <img
                    className="w-10 h-10"
                    src="/images/tick7.webp"
                    alt="icon"
                  />
                  <p className="text-xl font-medium text-white">
                    Qualify for the first-month completion bonus program, once
                    your referrals have been active on Vendrax for 30 days.
                  </p>
                </div>
                <div className="bg-[#ee642e] h-[2px] md:w-9/12 mt-14"></div>
              </div>
              <div className="pt-10">
                <div className="flex items-center gap-6">
                  <img
                    className="w-10 h-10"
                    src="/images/tick7.webp"
                    alt="icon"
                  />
                  <p className="text-xl font-medium text-white">
                    As your referrals continue to use Vendrax, you'll earn an
                    additional bonus at the three-month milestone.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-16 -left-5 md:-bottom-16 md:-left-5 lg:-right-5 h-[400px] w-[300px] md:h-[460px] md:w-[300px] lg:h-[460px] lg:w-[560px] bg-[#ee642e] -z-10 rounded-[100px]"></div>
        </div>
      </div>
    </div>
  );
};

export default ResellerProgram;
