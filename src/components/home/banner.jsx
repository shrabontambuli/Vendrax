import { useEffect, useState } from "react";

const Banner = () => {
  const banners = [
    {
      id: 1,
      title: "Build A Trustworthy Customer Relationship",
      description:
        "Vendrax, your gateway to maximizing revenue through our ISO/Reseller Program. As an ISO, you can leverage our industry expertise and robust infrastructure to focus solely on sales while we handle all post-sale services.",
      btn: "Get Started",
      imageUrl: "https://www.vendrax.com/assets/images/slide1.jpg",
      points: [
        "Apparel Stores",
        "Electronic Retailers",
        "Food & Beverage Wholesalers",
        "Auto Repair Shops",
      ],
    },
    {
      id: 2,
      title: "Partner with Vendrax Earn Rewards and Revenue",
      description:
        "Join our partnership programs and start earning today! Whether you refer clients, become an authorized agent, or partner as an ISO reseller, Vendrax offers lucrative opportunities for you to earn incentives and revenue shares. Explore our flexible partnership options tailored to maximize your earnings and grow your business with us",
      btn: "Submit Referral",
      imageUrl: "https://www.vendrax.com/assets/images/home-banner.webp",
      points: [
        "Retail Chains",
        "Restaurants",
        "E-commerce Platforms",
        "Local Businesses",
      ],
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:px-1 lg:px-0 pt-24 lg:pt-60">
          {/* Text Section */}
          <div className="flex flex-col justify-center text-center md:text-left p-4">
            <h1 className="text-2xl text2 lg:text-4xl font-bold mb-6">
              {banners[currentIndex].title}
            </h1>
            <p className="text-lg text-gray-700 mb-10 w-full md:w-10/12">
              {banners[currentIndex].description}
            </p>

            {/* Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {banners[currentIndex].points?.map((point, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="text-green-400">
                    <img src="/images/tick1.webp" alt="" />
                  </span>
                  <span className="text2">{point}</span>
                </div>
              ))}
            </div>

            <button className="btn1 w-60">{banners[currentIndex].btn}</button>
          </div>

          {/* Image Section */}
          <div className="w-full h-full">
            <img
              className="w-full h-full rounded-2xl"
              src={banners[currentIndex].imageUrl}
              alt={banners[currentIndex].title}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 flex left-1/2 transform -translate-x-1/2 space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg1" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
      {/* down */}
      <div className="bg1 mt-24 pt-14 lg:pt-28 md:h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 max-w-7xl mx-auto p-2 lg:p-0">
          <div>
            <img
              className="w-[675px] h-[481px]"
              src="/images/stat-img.webp"
              alt=""
            />
          </div>
          <div className="text-center md:text-start pb-5 md:pb-0">
            <h1 className="text-3xl lg:text-5xl text-white font-medium mb-10">
              <span className="font-bold">More Than 200K</span> <br />{" "}
              Entrepreneurs Use Vendrax
            </h1>
            <div className="md:flex items-center gap-10">
              <div>
                <h1 className="text-white text-5xl lg:text-7xl font-bold mb-5">
                  100%
                </h1>
                <p className="text-xl text-white">
                  Success rate in installing top-tier point-of-sale machines
                </p>
              </div>
              <div>
                <h1 className="text-white text-5xl lg:text-7xl font-bold mb-5">
                  100%
                </h1>
                <p className="text-xl text-white">
                  Businesses equipped with high-tech payment solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
