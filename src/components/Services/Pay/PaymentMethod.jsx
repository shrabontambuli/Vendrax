import React from "react";

const PaymentMethod = () => {
  return (
    <div className="max-w-7xl mx-auto px-2 lg:px-0 lg:pt-48 pt-32 pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-10">
        <div className="space-y-10 p-4">
          <span className="inline-block w-80 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
            Why Our Easy And Secure
          </span>
          <h2 className="text-2xl lg:text-5xl font-bold text2">
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
        <div className="relative h-[750px] w-[370px] mx-auto lg:mx-0 md:w-[826px] lg:h-[708px] lg:w-[624px]">
          <div className="bg1 p-5 md:p-20 rounded-3xl space-y-8 h-full w-full absolute z-30 md:space-y-20 lg:space-y-10">
            <div className="flex items-center gap-6">
              <img
                className="w-20 h-20 img2"
                src="/images/pay-ic1.webp"
                alt="icon"
              />
              <div>
                <h3 className="text-2xl text-white font-medium mb-4">
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
                className="w-20 h-20 img2"
                src="/images/pay-ic2.webp"
                alt="icon"
              />
              <div>
                <h3 className="text-2xl text-white font-medium mb-4">
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
                className="w-20 h-20 img2"
                src="/images/pay-ic3.webp"
                alt="icon"
              />
              <div>
                <h3 className="text-2xl text-white font-medium mb-4">
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
          <div className="absolute hidden lg:flex -bottom-5 -right-5 h-[460px] w-[560px] bgs z-20 rounded-3xl"></div>
          <img
            className="absolute hidden lg:flex z-10 -bottom-32 -right-0"
            src="/images/bg1.webp"
            alt="icon"
          />
        </div>
      </div>

      <div
        className=" mt-40 h-[500px] mx-auto rounded-3xl"
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
