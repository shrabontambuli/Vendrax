import React from "react";
import { useForm } from "react-hook-form";
// import { BsTwitterX } from "react-icons/bs";
// import { FaInstagram, FaLinkedinIn, FaPinterestP } from "react-icons/fa";
// import { RiFacebookFill } from "react-icons/ri";
// import { Link } from "react-router-dom";

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
    <div className="pt-32 lg:pt-48">
      <div className="max-w-7xl mx-auto rounded-2xl bgs shadow-xl lg:px-20 py-10 mb-28 relative p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div className="w-11/12 ">
          <div className="text-center">
            <h1 className="text-5xl text2 font-bold lg:w-10/12">
              Let's Connect
            </h1>
            <p className="mt-14 text2 text-xl lg:w-10/12">
              We're here to assist you in finding the perfect POS solution for
              your business.
            </p>
          </div>
            <div className="flex justify-center items-center mt-10">
              <div>
                <div className="flex items-center gap-4 mb-20">
                  <div>
                    <p className="text2 text-2xl mb-2">• Phone:</p>
                    <h3 className="text-3xl text2 font-medium">01**********</h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-20">
                  <div>
                    <p className="text2 text-2xl mb-2">• Email:</p>
                    <h3 className="text-3xl text2 font-medium">
                      *****@gmail.com
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text2 text-2xl mb-2">• Address:</p>
                    <h3 className="text-xl text2 font-medium w-80">
                      ******************
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="hidden md:flex h-[735px] -mb-40"
                  src="/images/cont-img1.webp"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-2xl text-center lg:w-9/12 mx-auto text2 font-bold">
              Alternatively, fill out our contact form, and a member of our team will reach out to you promptly.
              </h1>
            </div>
            <div>
              <div className="mt-10">
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
    </div>
  );
};

export default ContactForm;
