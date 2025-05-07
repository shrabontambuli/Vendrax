import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const banners = [
    {
      id: 1,
      title: "Empowering Your Business with Advanced POS Solutions",
      description:
        "At Fundrax, we specialize in delivering state-of-the-art Point-of-Sale (POS) systems designed to streamline your operations and enhance customer experiences. Our solutions are tailored to meet the unique needs of various industries, ensuring efficiency and growth.",
      btn: "Get Started",
      imageUrl:
        "/images/female-sound-engineer-studio-using-digital-tablet_107420-96160.avif",
      // points: [
      //   "Retail Stores",
      //   "Restaurants",
      //   "E-commerce Platforms",
      //   "Service-Based Businesses",
      // ],
    },
    {
      id: 2,
      title: "Empowering Your Business with Advanced POS Solutions.",
      description:
        "At Fundrax, we specialize in delivering state-of-the-art Point-of-Sale (POS) systems designed to streamline your operations and enhance customer experiences. Our solutions are tailored to meet the unique needs of various industries, ensuring efficiency and growth.",
      btn: "Submit Referral",
      imageUrl:
        "/images/happy-family-paying-with-credit-card_171337-2413.avif",
      // points: [
      //   "Retail Stores",
      //   "Restaurants",
      //   "E-commerce Platforms",
      //   "Service-Based Businesses",
      // ],
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
    <div className="">
      <div className="relative w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4 px-2 lg:px-0 pt-28 lg:pt-60">
          {/* Text Section */}
          <div className="flex flex-col justify-center text-left h-full lg:h-96">
            <h1 className="text-2xl text2 lg:text-4xl font-bold mb-2 md:mb-0 lg:mb-6">
              {banners[currentIndex].title}
            </h1>
            <p className="text-lg text-gray-700 mb-4 md:mb-0 lg:mb-10 w-full h-52 flex items-center md:w-10/12">
              {banners[currentIndex].description}
            </p>

            {/* Bullet Points */}
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {banners[currentIndex].points?.map((point, idx) => (
                <div key={idx} className="flex items-center space-x-2">
                  <span className="text2 flex items-center">
                    <p className="text-4xl">•</p>
                  </span>
                  <span className="text2 text-xl font-medium">{point}</span>
                </div>
              ))}
            </div> */}
            <Link to="/contact">
              <button className="btn1 w-60">{banners[currentIndex].btn}</button>
            </Link>
          </div>

          {/* Image Section */}
          <div className="w-full mt-10 md:mt-0 h-full md:h-96">
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
      <div className="bg1 mt-24 py-20"
       style={{
        backgroundImage: "url(/images/glasses-lie-laptop-reflecting-light-from-screen-dark_169016-52267.avif)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      >
        <div className="max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl text-center mx-auto md:text-5xl lg:w-10/12 leading-tight font-bold text-white mb-10 lg:mb-20">
              Why Choose Fundrax?
            </h2>
          </div>
            {/* <div>
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://img.freepik.com/free-photo/vacancy-career-recruitment-available-job-work-concept_53876-120677.jpg?ga=GA1.1.2098199704.1726909822&semt=ais_hybrid&w=740"
                alt=""
              />
            </div> */}
          <div className="max-w-7xl mx-auto px-2 lg:px-0">
            <div className="text-center md:text-start space-y-6">
              <div>
                <h1 className="text-2xl lg:text-4xl text-white font-medium mb-6">
                  • Comprehensive Solutions:
                </h1>
                <span className="text-lg lg:text-2xl text-white">
                  From hardware to software, we provide end-to-end POS
                  solutions.
                </span>
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl text-white font-medium mb-6">
                  • Expert Support:
                </h1>
                <span className="text-lg lg:text-2xl text-white">
                  Our team offers dedicated support to ensure seamless
                  integration and operation.
                </span>
              </div>
              <div>
                <h1 className="text-2xl lg:text-4xl text-white font-medium mb-6">
                  • Customized Packages:
                </h1>
                <span className="text-lg lg:text-2xl text-white">
                  Tailored solutions to meet the unique needs of your business
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
