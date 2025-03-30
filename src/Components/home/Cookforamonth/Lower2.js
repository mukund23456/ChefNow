import React from 'react'

const Lower2 = () => {
  return (
    <div>
      <section className="text-gray-600 bg-[#f1f1f1] body-font">
        <div className="container mx-auto flex px-5 py-12 lg:py-24 flex-col-reverse md:flex-row items-center">
          <div className="lg:w-1/2 w-full md:w-2/3 lg:pr-12 md:pr-8 flex flex-col md:items-start md:text-left text-center mb-10 md:mb-0">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-500">
              Homemade food that <br className="hidden md:block" /> warms the soul
            </h1>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-black leading-relaxed">
              Never have to worry about skipping meals or <br className="hidden md:block" /> eating oily outside food.
            </p>
            <button className="mt-6 inline-flex text-white text-lg sm:text-2xl bg-orange-500 border-0 py-4 px-6 sm:py-6 sm:px-8 rounded-md hover:bg-orange-600">
              Book now
            </button>
          </div>
          <div className="lg:w-1/2 md:w-1/3 w-full flex justify-center">
            <img 
              className="object-cover object-center rounded w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              alt="hero" 
              src="https://thechefkart.com/_next/image?url=https%3A%2F%2Fchefkart-strapi-media.s3.ap-south-1.amazonaws.com%2FSubscription_banner_02_1_f9ff5bf256.webp&w=1920&q=75" 
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lower2
