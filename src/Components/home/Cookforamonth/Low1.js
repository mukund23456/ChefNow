// import React from "react";

// const Lower1 = () => {
//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center bg-orange-50 py-8 md:py-12 px-4">
//       <section className="body-font max-w-7xl w-full mx-auto px-4 md:px-8">
//         <div className="flex flex-col md:flex-row items-center text-center md:text-left">
//           <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 mb-4 md:mb-0 md:w-2/5">
//             <p className="text-orange-500 tracking-wider">Why order online <br className="hidden sm:block" /> when you can just <br className="hidden sm:block" /> Chefit?</p>
//           </h2>
//           <div className="md:w-3/5 md:pl-6 mt-4 md:mt-0">
//             <p className="text-lg sm:text-xl md:text-2xl text-black font-semibold leading-relaxed">
//               Enjoy your favorite comfort food cooked in your kitchen without burning your wallet. Get a cook for a one-time meal at an affordable price.
//             </p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Lower1;

import React from "react";

const Lower1 = () => {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container mx-auto px-5 md:px-10 max-w-none">
          <div className="flex flex-wrap lg:flex-nowrap">
            {/* Image Section */}
            <img
              alt="ecommerce"
              className="w-full lg:w-1/2 h-64 lg:h-auto object-cover object-center rounded-md"
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FBest_cooks_to_serve_you_3876478f4c.webp&w=1920&q=75"
            />

            {/* Text Section */}
            <div className="w-full lg:w-1/2 bg-[#214e34] flex items-center p-6 lg:pl-10 lg:py-6">
              <h3 className="text-4xl text-center lg:text-left text-gray-900 title-font font-bold leading-relaxed lg:leading-tight">
                <span className="text-orange-500  font-bold">
                
                Discover your ideal cook from <br/> a team of over 4500 experts.
                 
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
