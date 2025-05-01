import React from "react";
import { useForm } from "react-hook-form";

const AgentForm = () => {
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
    <div className="bg-[#e9eaea] lg:py-28 pb-24 md:pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-5">
          <div>
            <img
              className="object-cover"
              src="/images/agent-form1.webp"
              alt="img"
            />
          </div>
          <div className="shadow-xl p-8 md:p-20 bg-white rounded-3xl">
            <h1 className="text-2xl lg:text-5xl text-center text2 font-medium mb-8">
              Joint Vendrax as an Authorized Agent
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
                    className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                  />
                </div>
                <div className="w-full mt-6 lg:mt-0">
                  <input
                    type="number"
                    placeholder="Contact Number*"
                    {...register("number", { required: true })}
                    className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                  />
                </div>
              </div>

              <div className="lg:flex items-center gap-8">
                <div className="w-full">
                  <input
                    type="email"
                    placeholder="Email Address*"
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
              <div className="lg:flex items-center gap-8">
                <div className="w-full">
                  <input
                    type="number"
                    placeholder="Zip Code*"
                    {...register("number", { required: true })}
                    className="border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                  />
                </div>
                <div className="w-full mt-6 lg:mt-0">
                  <select
                    defaultValue="Select State*"
                    {...register("value2", { required: true })}
                    className="select border-2 p-3 w-full bg-[#f3fafa] rounded-2xl focus:outline-none focus:ring-1 focus:ring-[#80bdff]"
                  >
                    <option disabled={true}>
                      Your preferred time to be contacted
                    </option>
                    <option value="Crimson">Crimson</option>
                    <option>Amber</option>
                    <option>Velvet</option>
                  </select>
                </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentForm;
