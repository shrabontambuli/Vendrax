import React from "react";
import { useForm } from "react-hook-form";
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const ContactForm = () => {
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
    <div className="max-w-7xl mx-auto rounded-2xl bgs shadow-xl lg:px-20 mt-24 py-20 mb-28 relative p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <div>
            <h1 className="text-5xl text2 font-bold lg:w-10/12">
              We Would Love To Assist You!
            </h1>
            <img src="/images/head-bg3.webp" alt="icon" />
            <p className="mt-14 text2 text-xl lg:w-10/12">
              Contact us today to learn more about how our POS solutions can
              revolutionize your business and elevate customer experience.
            </p>
          </div>
          <div className="flex items-center mt-10">
            <div>
              <div className="flex items-center gap-4 mb-20">
                <div>
                  <p className="text2 text-2xl mb-2">Call Us:</p>
                  <h3 className="text-3xl text-black font-medium">
                    833-604-8051
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text2 text-2xl mb-2">Address:</p>
                  <h3 className="text-xl text-black font-medium w-80">
                    15500 Voss Rd Suite 200 1171 Sugar Land, TX 77498-4601
                    United States
                  </h3>
                </div>
              </div>
            </div>
            <div>
              <img
                className="hidden lg:flex h-[735px] -mb-40"
                src="/images/cont-img1.webp"
                alt="img"
              />
            </div>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-5xl text2 font-bold">
              We Would Love To Assist You!
            </h1>
            <img src="/images/head-bg3.webp" alt="icon" />
          </div>
          <div>
            <div className="mt-24">
              <div className="shadow-xl p-8 md:p-16 bg-white rounded-3xl">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex flex-col gap-5"
                >
                  <div className="md:flex items-center gap-8">
                    <div className="w-full">
                      <label className="label">Full Name*</label>
                      <input
                        type="text"
                        placeholder="Full name here"
                        {...register("name", { required: true })}
                        className="border-2 p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#228800]"
                      />
                    </div>
                    <div className="w-full">
                      <label className="label">Email Address*</label>
                      <input
                        type="email"
                        placeholder="Add email"
                        {...register("email", { required: true })}
                        className="border-2 p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#228800]"
                      />
                    </div>
                  </div>

                  <div className="md:flex items-center gap-8">
                    <div className="w-full">
                      <label className="label">Phone*</label>
                      <input
                        type="number"
                        placeholder="Your number"
                        {...register("number", { required: true })}
                        className="border-2 p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#228800]"
                      />
                    </div>
                    <div className="w-full">
                      <label className="label">Subject*</label>
                      <input
                        type="text"
                        placeholder="Business Name"
                        {...register("business", { required: true })}
                        className="border-2 p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#228800]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="w-full">
                      <label className="label">Comments/Questions*</label>
                      <textarea
                        placeholder="Enter Your Message Here"
                        {...register("sms", { required: true })}
                        className="w-full bg-white border-2 p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#228800] resize-none"
                        rows="4"
                      />
                    </div>
                  </div>

                  <div className="mt-8">
                    <button className="flex items-center justify-center mx-auto btn1">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute hidden lg:flex top-10 lg:-right-0"
        src="/images/cont-bg2.webp"
        alt="icon"
      />
      <img
        className="absolute hidden lg:flex top-10 lg:-left-10"
        src="/images/cont-bg1.webp"
        alt="icon"
      />
    </div>
  );
};

export default ContactForm;
