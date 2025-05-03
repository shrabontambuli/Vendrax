import React from "react";
import { Link } from "react-router-dom";

const Smartphone = () => {
  return (
    <div className="pt-16">
      <div
        className="my-24 py-20"
        style={{
          backgroundImage:
            "url(https://media.istockphoto.com/id/1210766757/photo/calling-it-a-night-after-a-long-day-of-work.jpg?s=612x612&w=0&k=20&c=APN7Rzo1ooqFk0ii8vrR2TJC06zDYhFM_UtSwq_L9HM=)",
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
                <div className="card bg-base-300 shadow-xl w-96 h-60 py-6">
                  <div className="card-body">
                    <h1 className="text-2xl text2 font-medium mb-4">
                      • Offline Mode:
                    </h1>
                    <span className="text-lg lg:text-xl text-white">
                      Continue operations without internet connectivity.
                    </span>
                  </div>
                </div>
                <div className="card bg-base-300 shadow-xl w-96 h-60 py-6">
                  <div className="card-body">
                    <h1 className="text-2xl text2 font-medium mb-4">
                      • Multi-Store Management:
                    </h1>
                    <span className="text-lg lg:text-xl text-white">
                      Oversee multiple locations from a single dashboard.
                    </span>
                  </div>
                </div>
                <div className="card bg-base-300 shadow-xl w-96 h-60 py-6">
                  <div className="card-body">
                    <h1 className="text-2xl  text2 font-medium mb-4">
                      • Inventory Management:
                    </h1>
                    <span className="text-lg lg:text-xl text-white">
                      Real-time stock updates and alerts.
                    </span>
                  </div>
                </div>
                <div className="card bg-base-300 shadow-xl w-96 h-60 py-6">
                  <div className="card-body">
                    <h1 className="text-2xl text2 font-medium mb-4">
                      • Integrated Payments:
                    </h1>
                    <span className="text-lg lg:text-xl text-white">
                      Support for various payment methods.
                    </span>
                  </div>
                </div>
                <div className="card bg-base-300 shadow-xl w-96 h-60 py-6">
                  <div className="card-body">
                    <h1 className="text-2xl text2 font-medium mb-4">
                      • Secure Transactions:
                    </h1>
                    <span className="text-lg lg:text-xl text-white">
                      Advanced encryption and fraud prevention.
                    </span>
                  </div>
                </div>
                <div className="card bg-base-300 shadow-xl w-96 h-60 py-6">
                  <div className="card-body">
                    <h1 className="text-2xl text2 font-medium mb-4">
                      • Real-Time Monitoring:
                    </h1>
                    <span className="text-lg lg:text-xl text-white">
                      Instant alerts for unusual activities
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
