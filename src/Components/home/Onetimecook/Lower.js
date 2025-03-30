import React from "react";

const Lower1 = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-orange-50 py-8 md:py-12 px-4">
      <section className="body-font max-w-7xl w-full mx-auto px-4 md:px-8 mb-10 mt-10">
        <div className="flex flex-col md:flex-row items-center text-center md:text-left">
          <h2 className="font-bold text-4xl sm:text-4xl md:text-5xl text-gray-900 mb-4 md:mb-0 md:w-2/5">
            <p className="text-orange-500 tracking-normal leading-none">Why order online <br className="hidden sm:block" /> when you can just <br className="hidden sm:block" /> Chefit?</p>
          </h2>
          <div className="md:w-3/5 md:pl-6 mt-4 md:mt-0">
            <p className="text-lg sm:text-xl md:text-2xl text-black font-semibold leading-relaxed">
              Enjoy your favorite comfort food cooked in your kitchen without burning your wallet. Get a cook for a one-time meal at an affordable price.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower1;