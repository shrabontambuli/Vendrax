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
      <div className="max-w-7xl mx-auto rounded-2xl bgs shadow-xl lg:px-20 py-10 mb-28 p-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="w-11/12 ">
            <div className="text-center">
              <h1 className="text-3xl lg:text-5xl text2 font-bold lg:w-10/12">
                Let's Connect
              </h1>
              <p className="mt-6 text2 text-xl md:w-10/12 mx-auto">
                We're here to assist you in finding the perfect POS solution for
                your business.
              </p>
            </div>
            <div className="flex justify-center items-center mt-10">
              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div>
                    <p className="text2 text-2xl mb-2">• Phone:</p>
                    <h3 className="text-xl text2 font-medium">
                      (855) 262-0796
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-10">
                  <div>
                    <p className="text2 text-2xl mb-2">• Email:</p>
                    <h3 className="text-xl text2 font-medium">
                      info@fundrax.com
                    </h3>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div>
                    <p className="text2 text-2xl mb-2">• Address:</p>
                    <h3 className="text-xl text2 font-medium w-80">
                      9431 Haven Avenue Suite 100 Rancho Cucamonga CA 91730
                    </h3>
                  </div>
                </div>
              </div>
              <div>
                <img
                  className="hidden md:flex h-[735px] lg:-mb-40"
                  src="/images/cont-img1.webp"
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-xl lg:text-2xl text-center lg:w-11/12 mx-auto text2 font-bold">
                Alternatively, fill out our contact form, and a member of our
                team will reach out to you promptly.
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
                      <div className="w-full h-28">
                        <label className="label">Full Name*</label>
                        <input
                          type="text"
                          placeholder="Full name here"
                          {...register("name", {
                            required: "Full name is required",
                            minLength: {
                              value: 2,
                              message: "At least 2 characters",
                            },
                          })}
                          className={`border p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#228800] ${
                            errors.name ? "border-red-500" : ""
                          }`}
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full h-28">
                        <label className="label">Email Address*</label>
                        <input
                          type="email"
                          placeholder="Add email"
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                              message: "Invalid email address",
                            },
                          })}
                          className={`border p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#228800] ${
                            errors.email ? "border-red-500" : ""
                          }`}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="md:flex items-center gap-8">
                      <div className="w-full h-28">
                        <label className="label">Phone*</label>
                        <input
                          type="number"
                          placeholder="Your number"
                          {...register("number", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^\+?[0-9]{7,15}$/,
                              message: "Invalid phone number",
                            },
                          })}
                          className={`border p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#228800] ${
                            errors.number ? "border-red-500" : ""
                          }`}
                        />
                        {errors.number && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.number.message}
                          </p>
                        )}
                      </div>
                      <div className="w-full h-28">
                        <label className="label">Subject*</label>
                        <input
                          type="text"
                          placeholder="Business Name"
                          {...register("business", {
                            required: "Subject is required",
                          })}
                          className={`border p-3 w-full bg-white rounded-sm focus:outline-none focus:ring-1 focus:ring-[#228800] ${
                            errors.business ? "border-red-500" : ""
                          }`}
                        />
                        {errors.business && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.business.message}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="w-full h-36">
                        <label className="label">Comments/Questions*</label>
                        <textarea
                          placeholder="Enter Your Message Here"
                          {...register("sms", {
                            required: "Message is required",
                            minLength: {
                              value: 10,
                              message: "At least 10 characters",
                            },
                          })}
                          className={`w-full bg-white border p-3 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#228800] resize-none ${
                            errors.sms ? "border-red-500" : ""
                          }`}
                          rows="4"
                        />
                        {errors.sms && (
                          <p className="text-red-500 text-sm mt-1">
                            {errors.sms.message}
                          </p>
                        )}
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
      </div>
    </div>
  );
};

export default ContactForm;
