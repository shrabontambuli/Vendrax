import React from "react";

const FeaturesBanner = () => {
  return (
    <div
    style={{
      backgroundImage: "url(/images/acc-banner.webp)",
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
      backgroundSize:"cover"
    }}
  >
    <div className="md:max-w-screen-2xl mx-auto px-4 lg:px-10 pt-32 md:pt-24 lg:pt-56">
      <h1 className="text-4xl lg:text-6xl text-white font-medium mb-10 md:mb-20 lg:mb-32 lg:w-9/12">Multitude Features of a Cloud-based
      POS System</h1>
      <div className="md:flex gap-6">
        <div>
          <img src="/images/feat-ban1.webp" alt="img" />
        </div>
        <div>
          <h4 className="text-white text-xl lg:text-2xl mt-6 md:mt-0 w-full md:w-96">A number of essential features are offered by our POS systems to simplify your client interactions, inventory control, and sales.</h4>
          <div className="w-20 h-2 bg-[#105964] my-4"></div>
          <img src="/images/about-ban2.webp" alt="img" />
        </div>
      </div>
    </div>
  </div>
  );
};

export default FeaturesBanner;
