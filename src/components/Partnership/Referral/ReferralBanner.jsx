import React from "react";
import { useForm } from "react-hook-form";

const ReferralBanner = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="h-full">
      <div
        className="h-[700px] pt-40 lg:pt-52 relative"
        style={{
          backgroundImage: "url(/images/acc-banner.webp)",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"center",
          backgroundSize:"cover"
        }}
      >
        <div
          className="w-[390px] md:w-[800px] lg:w-[1350px] mx-auto px-4 lg:px-10 pt-14 lg:pt-10 absolute right-2/4 transform translate-x-1/2"
          style={{
            backgroundImage: "url(/images/ref-ban.webp)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-medium mb-10 lg:w-7/12">
            Welcome to Vendrax Referral Program
          </h1>
          <img src="/images/earn.png" alt="img" />
          <div className="mt-16 lg:mt-40">
            <div className="shadow-xl max-w-screen-xl mx-auto p-8 md:p-20 bg-white rounded-3xl relative">
              <h1 className="text-2xl lg:text-5xl text-center text-black font-medium mb-8">
                Submit Your Referral{" "}
                <span className="text-[#ed1d24]">Today!</span>
              </h1>
              <div className="w-full lg:w-10/12 flex justify-end -mt-4">
                <img src="/images/head-bg3.webp" alt="icon" />
              </div>
              <div className="flex items-center gap-4 mt-10">
                <img src="/images/one.webp" alt="icon" />
                <h4 className="text-2xl text-black font-medium">
                  Referral Information
                </h4>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-6">
                <div className="flex items-center gap-8">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Owner / Principal"
                      {...register("owner", { required: true })}
                      className="border-2 p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Business Name"
                      {...register("business", { required: true })}
                      className="border-2 p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="w-full">
                    <input
                      type="number"
                      placeholder="Contact Number*"
                      {...register("number", { required: true })}
                      className="border-2 p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Email Address*"
                      {...register("email", { required: true })}
                      className="border-2 p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Address"
                      {...register("address", { required: true })}
                      className="border-2 p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                  <div className="w-full">
                    <input
                      type="number"
                      placeholder="Enter your Referral Code"
                      {...register("number", { required: true })}
                      className="border-2 p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                </div>

                <div>
                  <div className="w-full">
                    <textarea
                      placeholder="Instructions"
                      {...register("sms", { required: true })}
                      className="w-full bg-white border-2 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#80bdff] resize-none"
                      rows="4"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <button className="flex items-center justify-center bg-[#228800] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mx-auto">
                    Submit Now
                    <img
                      className="absolute -right-3"
                      src="/images/red-btn.webp"
                      alt=""
                    />
                  </button>
                </div>
              </form>
              <img
                className="absolute hidden lg:flex top-10 lg:-right-9"
                src="/images/cont-bg2.webp"
                alt="icon"
              />
              <img
                className="absolute hidden lg:flex top-10 lg:-left-10"
                src="/images/cont-bg1.webp"
                alt="icon"
              />
              <img
                className="absolute -z-10 hidden lg:flex -bottom-2 lg:-left-36"
                src="/images/cont-bg3.webp"
                alt="icon"
              />
              <img
                className="absolute -z-10 hidden lg:flex -bottom-10 lg:-right-9"
                src="/images/cont-bg5.webp"
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralBanner;
