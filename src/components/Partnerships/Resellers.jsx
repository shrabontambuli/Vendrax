import React from "react";
import { Link } from "react-router-dom";

const Resellers = () => {
  return (
    <div className="my-24">
      <div className="bg1 mt-24 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-10 px-2 lg:px-0">
            <div className="text-center md:text-start space-y-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                ISO Reseller Program
              </h2>
              <p className="text-2xl text-gray-300 mt-6">
                Expand your business by reselling our POS solutions, with
                comprehensive support and attractive margins.
              </p>
              <Link to="/contact">
                <button className="btn1 border-white border-2 w-60 mt-20">Get Started</button>
              </Link>
            </div>
            <div>
              <img
                className="w-full h-full object-cover rounded-2xl"
                src="https://media.istockphoto.com/id/1291058230/vector/franchise-business-concept-franchise-owner-and-new-franchisee-shake-hands-after-successful.jpg?s=612x612&w=0&k=20&c=uL4sbUpnIxJZBZupkuyqBSq_UEQ6n9uBzC7XTJUJ3I0="
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resellers;
