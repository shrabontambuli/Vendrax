import React from "react";

const EarnRewards = () => {
  return (
    <div className="relative"
      style={{
        backgroundImage: "url(/images/orctabg.jpg)",
      }}
    >
      <div className="md:max-w-screen-2xl mx-auto lg:px-10 text-center py-28 space-y-10">
        <h1 className="text-3xl lg:text-6xl text-white font-medium">
        Partner with Vendrax: <br />
          <span className="font-bold">Earn Rewards and Revenue</span>
        </h1>
        <p className="text-white text-xl w-8/12 mx-auto">
          Our commitment to consistency, excellence, and innovation sets us
          apart in the industry. We prioritize delivering exceptional results
          while maintaining a standard of excellence that surpasses
          expectations. Our dedication to innovation drives us to constantly
          evolve and adapt to emerging trends.
        </p>
        <button className="flex items-center justify-center bg-black text-white font-semibold px-6 py-4 rounded-full hover:bg-white hover:text-black transition-all w-64 text-lg relative uppercase mx-auto">
          Get Started
          <img
            className="absolute -right-3"
            src="/images/red-btn.webp"
            alt=""
          />
        </button>
      </div>
      <img className="absolute bottom-0 md:-bottom-8 md:left-0 lg:-bottom-20 lg:-left-10 w-4/12" src="/images/cta2-device.png" alt="icon" />
    </div>
  );
};

export default EarnRewards;
