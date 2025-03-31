// import React from "react";

// const VideoBanner = () => {
//   return (
//     <div className="relative h-[350px]  bg-center" style={{ backgroundImage: "url('https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/Rectangle_60_bfb1e0017f.png')" }}>
//       {/* Overlay */}
//       <div className="absolute inset-0 "></div>

//       {/* Content */}
//       <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-4">
//         <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
//         Your Safety, Our Top-Priority
//         </h2>
//         <p className="text-6xl font-bold mt-4">
//         All our chefs follow the food safety guidelines and <br/> <span className="text-orange-500">adhere to hygienic practices.</span>
//         </p>
//       </div>

//       {/* Floating Icons */}
      
      
//     </div>
//   );
// };

// export default VideoBanner;

import React from "react";

const VideoBanner = () => {
  return (
    <div className="relative h-[450px] bg-center overflow-hidden">
      {/* Background Video */}
      <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
        <source src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/hygiene_740470aa24_674070e837.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="absolute z-1 flex flex-col justify-center h-full text-white px-4">
        <h2 className="text-6xl md:text-2xl lg:text-xl font-semibold">
          Your Safety, Our Top-Priority
        </h2>
        <p className="text-2xl font-bold mt-4 ">
          All our chefs follow the food safety guidelines and <br/> 
          <span className="text-orange-500">adhere to hygienic practices.</span>
        </p>
      </div>
    </div>
  );
};

export default VideoBanner;