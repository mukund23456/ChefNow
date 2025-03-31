import React from "react";

const VideoBanner = () => {
return (
    <div className="relative h-[450px] bg-center overflow-hidden flex justify-center items-center">
        {/* Background Video */}
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay loop muted>
            <source src="https://chefkart-strapi-media.s3.ap-south-1.amazonaws.com/hygiene_740470aa24_674070e837.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>

        {/* Content */}
        <div className="absolute z-1 flex flex-col justify-center items-center text-center h-full text-white ">
            <h2 className="text-6xl md:text-4xl lg:text-6xl font-semibold">
                Your Safety, Our Top-Priority
            </h2>
            <p className="text-2xl font-bold mt-4 items-center text-center ">
                All our chefs follow the food safety guidelines &<br/> 
                <span className="text-orange-500">adhere to hygienic practices.</span>
            </p>
        </div>
    </div>
);
};

export default VideoBanner;