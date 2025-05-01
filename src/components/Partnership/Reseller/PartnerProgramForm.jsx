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
    console.log(data);
    reset();
  };
  return (
    <div className="bg-[#e9eaea] py-24 pb-32 md:pb-44 lg:pb-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-5">
          <div className="shadow-xl p-8 md:p-10 bg-white rounded-3xl">
            <h1 className="text-2xl lg:text-5xl text-center text2 font-medium mb-8">
              Join Our ISO Partner Program Today!
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 mt-10"
            >
              <div className="lg:flex items-center gap-8">
                <div className="w-full">
                  <input
                    type="text"
                    placeholder="Full Name*"
                    {...register("name", { required: true })}
                    className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#7bb867]"
                  />
                </div>
                <div className="w-full mt-6 lg:mt-0">
                  <input
                    type="text"
                    placeholder="Business Name*"
                    {...register("business", { required: true })}
                    className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#7bb867]"
                  />
                </div>
              </div>

              <div className="lg:flex items-center gap-8">
                <div className="w-full">
                  <input
                    type="number"
                    placeholder="Contact Number*"
                    {...register("number", { required: true })}
                    className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#7bb867]"
                  />
                </div>
                <div className="w-full mt-6 lg:mt-0">
                  <input
                    type="text"
                    placeholder="Website"
                    {...register("website", { required: true })}
                    className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#7bb867]"
                  />
                </div>
              </div>
              <div className="lg:flex items-center gap-8">
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Business Email*"
                    {...register("email", { required: true })}
                    className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#7bb867]"
                  />
                </div>
                <div className="w-full mt-6 lg:mt-0">
                  <select
                    defaultValue="Select State*"
                    {...register("value", { required: true })}
                    className="select border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#7bb867]"
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
                  className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#7bb867]"
                />
              </div>
              <div className="w-full">
                <select
                  defaultValue="Your preferred time to be contacted"
                  {...register("value2", { required: true })}
                  className="select border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#7bb867]"
                >
                  <option disabled={true}>
                    Your preferred time to be contacted
                  </option>
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
                <button className="flex items-center justify-center btn1 mx-auto">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
          <div className="">
            <img className="object-cover" src="/images/iso-contimg.webp" alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerProgramForm;
