import React from "react";

const PaymentMethod = () => {
  return (
    <div className="md:max-w-screen-2xl mx-auto lg:px-10 py-20 md:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="space-y-10 p-4">
          <span className="inline-block w-80 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
            Why Our Easy And Secure
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
            Payment Method Is a Win/Win for Restaurants and Guests
          </h2>
          <p className="text-gray-600 text-xl">
            Learn about our simple and safe payment option, which benefits both
            restaurants and customers. Our optimized payment procedure makes
            transactions easier, allowing customers to make secure payments, and
            improving their entire dining experience. Nonetheless, this
            translates into shorter wait times, more effective operations, and
            satisfied customers.
          </p>
        </div>
        <div className="relative h-[750px] w-[390px] mx-auto lg:mx-0 md:w-[844px] lg:h-[708px] lg:w-[624px]">
          <div className="bg-[#122e38] p-5 md:p-20 rounded-3xl space-y-8 h-full w-full absolute z-30 md:space-y-20 lg:space-y-10">
            <div className="flex items-center gap-6">
              <img
                className="w-20 h-20"
                src="/images/pay-ic1.webp"
                alt="icon"
              />
              <div>
                <h3 className="text-2xl text-[#17dcd6] font-medium mb-4">
                  Accepts All Payment Methods
                </h3>
                <p className="text-gray-300">
                  Our Pay at the Table service allows your customers all payment
                  methods, including credit cards, mobile payments, and more.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <img
                className="w-20 h-20"
                src="/images/pay-ic2.webp"
                alt="icon"
              />
              <div>
                <h3 className="text-2xl text-[#17dcd6] font-medium mb-4">
                  Easily Integrates With Your POS
                </h3>
                <p className="text-gray-300">
                  Our solution integrates with your existing POS system,
                  ensuring a smooth and efficient payment process for your
                  customers and staff.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <img
                className="w-20 h-20"
                src="/images/pay-ic3.webp"
                alt="icon"
              />
              <div>
                <h3 className="text-2xl text-[#17dcd6] font-medium mb-4">
                  Never Compromises Your Security
                </h3>
                <p className="text-gray-300">
                  Compromising on security is like leaving your front door
                  unlocked in a busy city; ultimately giving an invitation to
                  unwanted risks and vulnerabilities. Therefore, with our robust
                  encryption and security measures we protect sensitive payment
                  information.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -right-5 md:-bottom-5 md:-right-5 lg:-right-5 h-[460px] w-[300px] md:h-[460px] md:w-[560px] bg-[#ffbf41] z-20 rounded-3xl"></div>
          <img
            className="absolute -top-7 -left-7"
            src="/images/bg2.webp"
            alt="icon"
          />
          <img
            className="absolute z-10 -bottom-16 -right-5 md:right-0 md:-bottom-28 lg:-bottom-32 lg:-right-7"
            src="/images/bg1.webp"
            alt="icon"
          />
        </div>
      </div>

      <div
        className=" mt-40 md:mt-60 h-[500px] mx-auto rounded-3xl"
        style={{
          backgroundImage: "url(/images/paytab-img.webp)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
      </div>
    </div>
  );
};

export default PaymentMethod;
