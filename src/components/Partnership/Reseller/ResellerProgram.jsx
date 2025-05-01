import React from "react";

const ResellerProgram = () => {
  return (
    <div className="my-24 max-w-7xl mx-auto px-2 lg:px-0">
      <div className="mt-24">
        <div
          style={{
            backgroundImage: "url(https://plus.unsplash.com/premium_photo-1664474655825-da0783c8ae61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDI1fHxidXNpbmVzcyUyMGRlYWwlMjBibGFjayUyMGJsdXIlMjBpbWd8ZW58MHx8MHx8fDA%3D)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition:"center"
          }}
        >
          <div className=" p-5 md:p-6 lg:p-16 rounded-lg h-full w-full z-30 py-10">
            <div className="text-center space-y-10 md:space-y-6">
              <span className="inline-block w-44 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
                Collaborate
              </span>
              <h1 className="text2 font-medium text-xl lg:text-5xl">
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
                <div className="bg1 h-[2px] md:w-9/12 mt-14"></div>
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
                <div className="bg1 h-[2px] md:w-9/12 mt-14"></div>
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
                <div className="bg1 h-[2px] md:w-9/12 mt-14"></div>
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
        </div>
      </div>
    </div>
  );
};

export default ResellerProgram;
