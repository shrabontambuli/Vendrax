import React from "react";
import { useForm } from "react-hook-form";

const PartnerProgramForm = () => {
  const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        console.log(data)
        reset();
      };
  return (
    <div className="bg-[#e9eaea] lg:py-28 pb-36 md:pb-48 md:pt-20 relative">
        <img className="absolute hidden lg:flex right-0" src="/images/othser-bg2.webp" alt="" />
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 relative">
          <div className="bg-[#00a7a2] w-60 h-[910px] rounded-3xl"></div>
          <div className="lg:w-[861px] h-[775px] bg-white rounded-3xl absolute bottom-[133px] left-2">
            <div className="shadow-xl max-w-screen-xl mx-auto p-8 md:p-20 bg-white rounded-3xl">
              <h1 className="text-2xl lg:text-5xl text-center text-black font-medium mb-8">
                Join Our ISO Partner Program Today!
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 mt-10">
                <div className="lg:flex items-center gap-8">
                  <div className="w-full">
                    <input
                      type="text"
                      placeholder="Full Name*"
                      {...register("name", { required: true })}
                      className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                  <div className="w-full mt-6 lg:mt-0">
                    <input
                      type="text"
                      placeholder="Business Name*"
                      {...register("business", { required: true })}
                      className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                </div>

                <div className="lg:flex items-center gap-8">
                  <div className="w-full">
                    <input
                      type="number"
                      placeholder="Contact Number*"
                      {...register("number", { required: true })}
                      className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                  <div className="w-full mt-6 lg:mt-0">
                    <input
                      type="text"
                      placeholder="Website"
                      {...register("website", { required: true })}
                      className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                </div>
                <div className="lg:flex items-center gap-8">
                  <div className="w-full">
                    <input
                      type="email"
                      placeholder="Business Email*"
                      {...register("email", { required: true })}
                      className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    />
                  </div>
                  <div className="w-full mt-6 lg:mt-0">
                    <select
                      defaultValue="Select State*"
                      {...register("value", { required: true })}
                      className="select border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                    >
                      <option disabled={true}>Select State*</option>
                      <option value="Crimson">Crimson</option>
                      <option>Amber</option>
                      <option>Velvet</option>
                    </select>
                  </div>
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Address*"
                    {...register("address", { required: true })}
                    className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                  />
                </div>
                <div className="w-full">
                  <select
                    defaultValue="Your preferred time to be contacted"
                    {...register("value2", { required: true })}
                    className="select border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                  >
                    <option disabled={true}>Your preferred time to be contacted</option>
                    <option value="Crimson">Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                  </select>
                </div>
                <div>
                  <div className="w-full">
                    <textarea
                      placeholder="Tell us a bit about yourself"
                      {...register("sms", { required: true })}
                      className="w-full bg-[#f3fafa] border-2 p-3 rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#03837f] resize-none"
                      rows="4"
                    />
                  </div>
                </div>

                <div className="mt-8">
                  <button className="flex items-center justify-center bg-[#e53e29] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase mx-auto">
                    Submit Now
                    <img
                      className="absolute -right-3"
                      src="/images/red-btn.webp"
                      alt=""
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            className="hidden md:flex  h-[772px] rounded-3xl mt-36"
            style={{
              backgroundImage: "url(/images/iso-contimg.webp)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PartnerProgramForm;
