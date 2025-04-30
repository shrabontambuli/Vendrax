import React from "react";

const MaximizeEarnings = () => {
  return (
    <div className="mb-44 md:mb-20 lg:mb-0 p-1 pt-[730px] md:pt-[850px] pb-16 lg:pb-40 max-w-screen-2xl mx-auto">
      <div>
        <div className="relative lg:w-[948px]">
          <img src="/images/ref-img11.webp" alt="img" />
          <div className="absolute right-2 -bottom-24 md:bottom-20 md:right-40 lg:-right-[42%] lg:-bottom-10">
            <div className="relative h-[700px] w-[390px] mx-auto lg:mx-0 md:w-[420px] md:h-[600px] lg:h-[760px] lg:w-[624px]">
              <div className="bg-[#2a2e30] p-5 md:p-6 lg:p-16 rounded-lg space-y-10 md:space-y-6 lg:space-y-10 h-full w-full absolute z-30 mt-10">
                <h1 className="text-white font-medium text-xl lg:text-5xl">
                Maximize Earnings with Vendrax Referral Program
                </h1>
                <div className="pt-4">
                    <div className="flex items-center gap-6">
                        <img className="w-10 h-10" src="/images/tick7.webp" alt="icon" />
                        <p className="text-xl font-medium text-white">Introduce new businesses to Vendrax, invite them to sign up, and earn an immediate bonus.</p>
                    </div>
                    <div className="bg-[#ee642e] h-[2px] w-9/12 mt-8"></div>
                </div>
                <div className="pt-2">
                    <div className="flex items-center gap-6">
                        <img className="w-10 h-10" src="/images/tick7.webp" alt="icon" />
                        <p className="text-xl font-medium text-white">Qualify for the first-month completion bonus program, once your referrals have been active on Vendrax for 30 days.</p>
                    </div>
                    <div className="bg-[#ee642e] h-[2px] w-9/12 mt-8"></div>
                </div>
                <div className="pt-2">
                    <div className="flex items-center gap-6">
                        <img className="w-10 h-10" src="/images/tick7.webp" alt="icon" />
                        <p className="text-xl font-medium text-white">As your referrals continue to use Vendrax, you'll earn an additional bonus at the three-month milestone.</p>
                    </div>
                </div>
              </div>
              <div className="absolute -bottom-16 -left-5 md:-bottom-16 md:-left-5 lg:-right-5 h-[400px] w-[300px] md:h-[460px] md:w-[300px] lg:h-[460px] lg:w-[560px] bg-[#ee642e] z-20 rounded-[100px]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaximizeEarnings;
