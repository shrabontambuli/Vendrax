import React from "react";

const Consistency = () => {
  return (
      <div className="md:max-w-screen-2xl mx-auto lg:px-10 py-20 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          <div className="space-y-10 p-4">
            <span className="inline-block w-44 py-1 bg-red-100 text-red-600 rounded-full font-semibold text-lg text-center tracking-widest">
              Who We Are?
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900">
              GAdhering To the Consistency, Excellence, And Innovation
            </h2>
            <p className="text-gray-600 text-xl">
              Our commitment to consistency, excellence, and innovation sets us
              apart in the industry. We prioritize delivering exceptional
              results while maintaining a standard of excellence that surpasses
              expectations. Our dedication to innovation drives us to constantly
              evolve and adapt to emerging trends.
            </p>
            <button className="flex items-center justify-center bg-[#e53e29] text-white font-semibold px-6 py-4 rounded-full hover:bg-[#00c6c0] transition-all w-64 text-lg relative uppercase">
              Get Started
              <img
                className="absolute -right-3"
                src="/images/red-btn.webp"
                alt=""
              />
            </button>
          </div>
          <div className="relative h-[620px] w-[400px] mx-auto md:mx-0 md:w-[844px] lg:h-[708px] lg:w-[624px]">
            <div className="bg-[#00a7a2] p-5 md:p-16 rounded-3xl space-y-8 h-full w-full absolute z-30">
                <div className="flex items-center gap-6">
                    <img className="w-16 h-14" src="/images/need-ic1.webp" alt="icon" />
                    <h3 className="text-2xl text-white font-medium">High-Speed, Secure & Multi Store Scalable</h3>
                </div>
                <div className="flex items-center gap-6">
                    <img className="w-16 h-14" src="/images/need-ic2.webp" alt="icon" />
                    <h3 className="text-2xl text-white font-medium">Leverage Latest Technology Such As AI, PWA</h3>
                </div>
                <div className="flex items-center gap-6">
                    <img className="w-16 h-14" src="/images/need-ic3.webp" alt="icon" />
                    <h3 className="text-2xl text-white font-medium">Leading Industry Integration</h3>
                </div>
                <div className="flex items-center gap-6">
                    <img className="w-16 h-14" src="/images/need-ic4.webp" alt="icon" />
                    <h3 className="text-2xl text-white font-medium">Real-Time Monitoring and Alerts</h3>
                </div>
                <div className="flex items-center gap-6">
                    <img className="w-16 h-14" src="/images/need-ic5.webp" alt="icon" />
                    <h3 className="text-2xl text-white font-medium">Secure Transaction Processing</h3>
                </div>
                <div className="flex items-center gap-6">
                    <img className="w-16 h-14" src="/images/need-ic6.webp" alt="icon" />
                    <h3 className="text-2xl text-white font-medium">An All-In-One Solution for Instore POS</h3>
                </div>
            </div>
            <div className="absolute -bottom-5 -right-5 md:-bottom-5 md:-right-0 lg:-right-5 h-[460px] w-[300px] md:h-[460px] md:w-[560px] bg-[#ffbf41] z-20 rounded-3xl">
            </div>
            <img className="absolute -top-7 -left-7" src="/images/bg2.webp" alt="icon" />
            <img className="absolute z-10 -bottom-16 -right-5 md:right-0 md:-bottom-28 lg:-bottom-32 lg:-right-32" src="/images/bg1.webp" alt="icon" />
          </div>
        </div>
      </div>
  );
};

export default Consistency;
