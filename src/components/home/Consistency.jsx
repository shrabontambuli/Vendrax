import React from "react";
import { Link } from "react-router-dom";

const Consistency = () => {
  return (
    <div className="max-w-7xl mx-auto lg:px-0 my-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        <div className="space-y-10 p-4">
          <span className="inline-block w-44 py-1 bgs text2 rounded-full font-semibold text-lg text-center tracking-widest">
            Who We Are?
          </span>
          <h2 className="text-2xl lg:text-5xl font-bold text2">
            Gadhering To the Consistency, Excellence, And Innovation
          </h2>
          <p className="text-gray-600 text-xl">
            Our commitment to consistency, excellence, and innovation sets us
            apart in the industry. We prioritize delivering exceptional results
            while maintaining a standard of excellence that surpasses
            expectations. Our dedication to innovation drives us to constantly
            evolve and adapt to emerging trends.
          </p>
          <Link to='/'>
            <button className="btn1 mt-6">
              Get Started
            </button>
          </Link>
        </div>
        <div className="relative h-[550px] w-full mx-auto lg:mx-0 md:w-[844px] lg:h-[708px] lg:w-[624px]">
          <div className="bg1 p-5 md:p-16 rounded-3xl space-y-8 h-full w-full absolute z-30">
            <div className="flex items-center gap-6">
              <img
                className="w-16 h-14"
                src="/images/need-ic1.webp"
                alt="icon"
              />
              <h3 className="text-xl md:text-2xl text-white font-medium">
                High-Speed, Secure & Multi Store Scalable
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <img
                className="w-16 h-14"
                src="/images/need-ic2.webp"
                alt="icon"
              />
              <h3 className="text-xl md:text-2xl text-white font-medium">
                Leverage Latest Technology Such As AI, PWA
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <img
                className="w-16 h-14"
                src="/images/need-ic3.webp"
                alt="icon"
              />
              <h3 className="text-xl md:text-2xl text-white font-medium">
                Leading Industry Integration
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <img
                className="w-16 h-14"
                src="/images/need-ic4.webp"
                alt="icon"
              />
              <h3 className="text-xl md:text-2xl text-white font-medium">
                Real-Time Monitoring and Alerts
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <img
                className="w-16 h-14"
                src="/images/need-ic5.webp"
                alt="icon"
              />
              <h3 className="text-xl md:text-2xl text-white font-medium">
                Secure Transaction Processing
              </h3>
            </div>
            <div className="flex items-center gap-6">
              <img
                className="w-16 h-14"
                src="/images/need-ic6.webp"
                alt="icon"
              />
              <h3 className="text-xl md:text-2xl text-white font-medium">
                An All-In-One Solution for Instore POS
              </h3>
            </div>
          </div>
          <div className="absolute -bottom-5 right-0 md:-bottom-5 md:-right-0 lg:-right-5 h-[460px] w-[300px] md:h-[460px] md:w-[560px] bgs z-20 rounded-3xl hidden lg:flex"></div>
          <img
            className="absolute -top-7 -left-7"
            src="/images/bg2.webp"
            alt="icon"
          />
          <img
            className="absolute hidden md:flex z-10 -bottom-16 -right-5 md:right-0 md:-bottom-28 lg:-bottom-32 lg:-right-7"
            src="/images/bg1.webp"
            alt="icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Consistency;
