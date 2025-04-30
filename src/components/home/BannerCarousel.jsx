import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

export default function BannerCarousel() {
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
      <div className="relative w-full min-h-screen flex items-center">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-6 py-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center text-white absolute z-10 lg:left-52 left-0 p-3 md:mt-10 lg:mt-0 lg:top-[50%] top-2/4 transform -translate-y-1/2 lg:max-w-3xl lg:pt-28">
            <div>
              <h1 className="text-[24px] md:text-3xl lg:text-5xl font-bold mb-8 md:mb-4 lg:mb-8 leading-tight">
                {banners[currentIndex].title}
              </h1>
              <p className="text-xl md:text-sm lg:text-2xl font-medium text-gray-300 mb-8 md:mb-4 lg:mb-8">
                {banners[currentIndex].description}
              </p>

              {/* Bullet Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                {banners[currentIndex].points?.map((point, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <span className="text-green-400">
                      <img src="/images/tick1.webp" alt="" />
                    </span>
                    <span className="text-gray-300">{point}</span>
                  </div>
                ))}
              </div>

              {/* Button */}
              <Link to="/">
                <button className="btn1 uppercase">
                  {banners[currentIndex].btn}{" "}
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full h-screen lg:h-full left-0 top-0 absolute">
            <img
              src={banners[currentIndex].imageUrl}
              alt="Banner"
              className="w-full h-full object-cover transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 lg:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {banners.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-4 h-4 rounded-full cursor-pointer ${
                currentIndex === index ? "bg-[#228800]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <div className="bg1 pt-14 lg:pt-28 md:h-[500px]">
        <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-8 max-w-screen-2xl mx-auto p-2 lg:p-0">
          <div>
            <img
              className="w-[675px] h-[481px]"
              src="/images/stat-img.webp"
              alt=""
            />
          </div>
          <div className="text-center md:text-start pb-5 md:pb-0">
            <h1 className="text-3xl lg:text-6xl text-white font-medium mb-10">
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
}
