import React from "react";

const MaximizeEarnings = () => {
  return (
    <div className="my-24 max-w-7xl mx-auto px-2 lg:px-0">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5 relative">
          <div>
            <img
              className="object-cover"
              src="/images/ref-img11.webp"
              alt="img"
            />
          </div>
          <div className="">
            <div className="bg1 p-5 md:p-6 lg:p-16 rounded-lg space-y-10 md:space-y-6 lg:space-y-10 h-full w-full mt-10">
              <h1 className="text-white font-medium text-xl lg:text-4xl">
                Maximize Earnings with Vendrax Referral Program
              </h1>
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
                <div className="bg-white h-[2px] w-9/12 mt-8"></div>
              </div>
              <div className="pt-2">
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
                <div className="bg-white h-[2px] w-9/12 mt-8"></div>
              </div>
              <div className="pt-2">
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
        </div>
      </div>
    </div>
  );
};

export default MaximizeEarnings;
