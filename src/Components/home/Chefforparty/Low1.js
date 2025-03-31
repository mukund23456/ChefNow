import React from "react";

const Lower1 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container w-full">
          <div className="flex flex-wrap flex-col lg:flex-row min-h-screen">
            {/* Image Section */}
            <div className="w-full lg:w-1/2">
              <img
                alt="ecommerce"
                className="w-full h-64 md:h-96 lg:h-full object-cover object-center rounded-md"
                src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FSign_up_d1762e3ca9.webp&w=1920&q=75"
              />
            </div>

            {/* Text Section */}
            <div className="w-full lg:w-1/2 bg-[#214e34] flex items-center justify-center p-6 lg:px-20 lg:py-20 min-h-screen">
              <h3 className="text-2xl md:text-4xl text-center lg:text-left text-gray-900 title-font font-bold leading-relaxed lg:leading-tight">
                <span className="text-orange-500 font-bold">The Taste of Luxury</span>{" "}
                <span className="text-white font-bold">
                  Experience elevated culinary perfection,
                  <br className="hidden lg:block" /> as our
                </span>
                <span className="text-orange-500 font-bold"> highly skilled chefs</span>{" "}
                <span className="text-white font-bold">
                  take your party to new heights.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower1;
