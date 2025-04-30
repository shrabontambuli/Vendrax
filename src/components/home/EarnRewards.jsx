import React from "react";

const EarnRewards = () => {
  return (
    <div className="relative"
      style={{
        backgroundImage: "url(/images/orctabg.jpg)",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover"
      }}
    >
      <div className="max-w-7xl mx-auto px-1 lg:px-0 text-center py-20 space-y-10">
        <h1 className="text-3xl lg:text-6xl text-white font-medium">
        Partner with Vendrax: <br />
          <span className="font-bold">Earn Rewards and Revenue</span>
        </h1>
        <p className="text-white text-xl lg:w-9/12 mx-auto">
          Our commitment to consistency, excellence, and innovation sets us
          apart in the industry. We prioritize delivering exceptional results
          while maintaining a standard of excellence that surpasses
          expectations. Our dedication to innovation drives us to constantly
          evolve and adapt to emerging trends.
        </p>
        <button className="btn1">
          Get Started
        </button>
      </div>
      <img className="absolute bottom-0 md:-bottom-8 md:left-0 lg:-bottom-20 lg:-left-10 w-4/12" src="/images/cta2-device.png" alt="icon" />
    </div>
  );
};

export default EarnRewards;
