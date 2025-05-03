import React from "react";
import { Link } from "react-router-dom";

const Smartphone = () => {
  return (
    <div className="max-w-7xl mx-auto pb-24 pt-32 lg:pt-56">
      <h2 className="text-3xl lg:text-5xl font-bold text2 text-center">
        Comprehensive Tools to Elevate Your Business
      </h2>
      <div className="md:flex md:flex-row-reverse items-center px-2 lg:px-0 gap-10 mt-20 lg:mt-24">
        <div className="space-y-14 md:w-11/12">
          <div className="space-y-6 text-center md:text-start">
            <div>
              <h1 className="text-xl lg:text-3xl text2 font-medium mb-4">
                • Offline Mode:
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
                Continue operations without internet connectivity.
              </span>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl text2 font-medium mb-4">
                • Multi-Store Management:
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
                Oversee multiple locations from a single dashboard.
              </span>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl text2 font-medium mb-4">
                • Inventory Management:
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
                Real-time stock updates and alerts.
              </span>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl text2 font-medium mb-4">
                • Integrated Payments:
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
                Support for various payment methods.
              </span>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl text2 font-medium mb-4">
                • Secure Transactions:
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
                Advanced encryption and fraud prevention.
              </span>
            </div>
            <div>
              <h1 className="text-2xl lg:text-3xl text2 font-medium mb-4">
                • Real-Time Monitoring:
              </h1>
              <span className="text-lg lg:text-xl text-gray-600">
                Instant alerts for unusual activities
              </span>
            </div>
          </div>
        </div>
        <div className="w-full h-full mt-10 md:mt-0">
          <img
            className="w-full h-full rounded-2xl"
            src="https://media.istockphoto.com/id/609070448/photo/the-most-successful-ideas-are-formulated-as-a-team.jpg?s=612x612&w=0&k=20&c=Nmu9wA9hkQMbRGT8ca5m13lbgzmk7HHm9lv4zv3bGOM="
            alt="img"
          />
        </div>
      </div>
      <Link to="/contact">
        <button className="flex items-center justify-center btn1 mt-20 mx-auto">
          Get Started
        </button>
      </Link>
    </div>
  );
};

export default Smartphone;
