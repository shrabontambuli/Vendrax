import React from "react";

const TailoringPos = () => {
  return (
    <div className="max-w-7xl mx-auto lg:mt-48 my-24">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-end gap-5 px-2 lg:px-0">
          <div className="h-full w-full">
            <img className="h-full w-full rounded-2xl object-cover" src="https://plus.unsplash.com/premium_photo-1661749563624-588819471ab2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEJ1c2luZXNzZXMlMjBkZXNrJTIwYmx1ciUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D" alt="img" />
          </div>
          <div className="relative">
              <div className="bg-[#2a2e30] rounded-lg space-y-10 text-center px-2 py-5 lg:absolute z-30 bottom-0">
                <h1 className="text-white font-medium text- md:text-xl lg:text-6xl">
                  <span className="">Tailoring</span> POS Systems
                  For
                  <span className=""> Your Restaurant</span>,
                  <span className="">Retail</span>,
                  <span className=""> Beauty </span> Any Other{" "}
                  <span className=""> Businesses </span>.
                </h1>
                <p className="text-gray-300 md:text-xl">
                  Our POS systems are designed to be versatile and adaptable,
                  catering to a wide range of industries including restaurants,
                  retail stores, beauty salons, and more. Whether you run a
                  bustling restaurant, manage a busy retail outlet, or operate a
                  thriving beauty business, our tailored POS solutions are here
                  to smoothen your operations and improve your customer
                  experience.
                </p>
              </div>
              <div className="absolute hidden lg:flex -bottom-2 -right-2 h-[460px] w-[560px] bg1 z-20 rounded-[100px]"></div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default TailoringPos;
