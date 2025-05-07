import React from "react";
import { Link } from "react-router-dom";

const Smartphone = () => {
  return (
    <div className="pt-32 lg:pt-44 mb-24">
      <h2 className="text-3xl lg:text-5xl font-bold text2 text-center lg:w-9/12 mx-auto mb-10">
        Markets We Serve:
      </h2>
      <div
        className="py-20"
        style={{
          backgroundImage: "url(/images/istockphoto-1210766757-612x612.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-2 lg:px-0 ">
          <h2 className="text-3xl lg:text-5xl font-bold text2 text-center">
            Comprehensive Tools to Elevate Your Business
          </h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-10 mt-20 text-center">
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">
                    CBD / C8 / C9 
                  </span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">Liquor stores</span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">
                    Cigarette & E-cigarette shops
                  </span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">Pubs & bars</span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">
                    Cigarette & E-cigarette shops
                  </span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">
                    Restaurants & quick-service
                  </span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">restaurants (QSR)</span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">
                    Taxi fleets & transportation services
                  </span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">
                    Grocery stores & supermarkets
                  </span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">
                    Convenience stores
                  </span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">Retail boutiques</span>
                </div>
              </div>
              <div className="card bgs2 shadow-xl w-96 h-60 flex justify-center items-center p-2">
                <div>
                  <span className="text-2xl text-white">
                    Specialty stores (vape shops, dispensaries, gift shops)
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="md:flex md:flex-row-reverse items-center gap-10 mt-20 lg:mt-24"> */}
          {/* <div className="w-full h-full mt-10 md:mt-0">
              <img
                className="w-full h-full rounded-2xl"
                src="https://media.istockphoto.com/id/609070448/photo/the-most-successful-ideas-are-formulated-as-a-team.jpg?s=612x612&w=0&k=20&c=Nmu9wA9hkQMbRGT8ca5m13lbgzmk7HHm9lv4zv3bGOM="
                alt="img"
              />
            </div> */}
        </div>
        <Link to="/contact">
          <button className="flex items-center justify-center btn1 mt-20 mx-auto">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Smartphone;
