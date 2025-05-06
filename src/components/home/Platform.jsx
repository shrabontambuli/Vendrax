import React from "react";
import { Link } from "react-router-dom";

const Platform = () => {
  const features = [
    {
      id: "1",
      head: "Offline Mode:",
      sub: "Keep transactions running smoothly even without internet connectivity.",
    },
    {
      id: "2",
      head: "Multi-Store Management:",
      sub: "Manage multiple business locations from one central dashboard.",
    },
    {
      id: "3",
      head: "Inventory Management:",
      sub: "Real-time tracking, stock alerts, and automated reordering.",
    },
    {
      id: "4",
      head: "Integrated Payments",
      sub: " Accept all major payment types, including EMV, NFC, mobile wallets, and crypto (optional).",
    },
    {
      id: "5",
      head: "Secure Transactions:",
      sub: "Build repeat business with points, rewards, and promotions.",
    },
    {
      id: "5",
      head: "Real-Time Monitoring & Reporting:",
      sub: "Get instant insights into sales, inventory, and employee performance.",
    },
  ];

  return (
    <div className="lg:mt-28">
      <div
        className="my-24 py-20"
        style={{
          backgroundImage:
            "url(/images/istockphoto-1210766757-612x612.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="max-w-7xl mx-auto px-2 lg:px-0 ">
          <h2 className="text-3xl lg:text-5xl font-bold text2 text-center">
            Platform Features:
          </h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-10 mt-20 text-center">
              {features?.map((d) => (
                <div key={d.id} className="card bgs2 shadow-xl w-96 h-60 py-6">
                  <div className="card-body">
                    <h1 className="text-xl text2 font-medium mb-4">
                      {d?.head}
                    </h1>
                    <span className="text-lg text-white">
                      {d?.sub}
                    </span>
                  </div>
                </div>
              ))}
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

export default Platform;
