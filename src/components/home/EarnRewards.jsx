import React from "react";

const EarnRewards = () => {
  return (
    <div
      style={{
        backgroundImage: "url(https://images.unsplash.com/photo-1653410065609-1a6ffa4e49ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzEyfHxidXNpbmVzcyUyMFBhcnRuZXIlMjBiYWNrZ3JvdW5kJTIwYmx1ciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D)",
        backgroundRepeat:"no-repeat",
        backgroundPosition:"center",
        backgroundSize:"cover"
      }}
    >
      <div className="max-w-7xl mx-auto px-1 lg:px-0 text-center py-20 space-y-10">
        <h1 className="text-2xl lg:text-6xl text-white font-medium">
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
    </div>
  );
};

export default EarnRewards;
