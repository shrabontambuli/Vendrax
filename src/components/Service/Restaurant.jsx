import React from "react";

const Restaurant = () => {
  return (
    <div className="my-24">
      <div className="bg1 mt-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl text-center mx-auto md:text-5xl lg:w-10/12 leading-tight font-bold text-white mb-16">
              Restaurant POS Systems
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10 max-w-7xl mx-auto px-2 lg:px-0">
            <div className="text-center md:text-start">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                E-commerce Integration
              </h2>
              <p className="text-2xl text-gray-300 mt-6">
                Optimize your restaurant operations with features like:
              </p>
              <div className="mt-14 space-y-6">
                <div>
                  <h1 className="text-2xl lg:text-3xl text-white font-medium mb-4">
                    • Order Management:
                  </h1>
                  <span className="text-xl lg:text-2xl text-white">
                    Efficient handling of dine-in and takeout orders.
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl text-white font-medium mb-4">
                    • Inventory Tracking:
                  </h1>
                  <span className="text-xl lg:text-2xl text-white">
                    Real-time stock monitoring.
                  </span>
                </div>
                <div>
                  <h1 className="text-2xl lg:text-3xl text-white font-medium mb-4">
                    • Customer Relationship Management:
                  </h1>
                  <span className="text-xl lg:text-2xl text-white">
                    Personalized dining experiences.
                  </span>
                </div>
              </div>
            </div>
            <div>
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://media.istockphoto.com/id/1271319069/photo/small-business-people-and-service-concept-happy-man-or-waiter-in-apron-at-counter-with.jpg?s=612x612&w=0&k=20&c=0jOZiljlfLckM3b-yGf8RhLOfK9SngbYV1Axopk8uUI="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
