import React from 'react';
import ShowCard1 from './ShowCard';

const BannerDow1 = () => {
  return (
    <div >
      <section className="text-orange-600 bg-slate-200 body-font ">
      <div className="container flex flex-wrap px-5 py-12 mx-auto items-center pb-0">
          {/* Left Section */}
          <div className="w-full md:w-1/2 md:pr-12 md:py-8 mt-0 md:mb-0 pb-10  md:border-b-0 md:border-r-2 border-orange-500">
            <h4 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-center md:text-left text-orange-500">
              Why Choose? </h4>
            <h1 className="leading-relaxed text-3xl md:text-5xl font-bold text-black text-center md:text-left">
            Chef for Party
            </h1>
          </div>

          {/* Right Section */}
          <div className="flex flex-col items-center md:items-start md:w-1/2 md:pl-12">
            <h2 className="title-font text-black tracking-wider text-xl md:text-2xl text-center md:text-left mb-3">
            Hire a professional Multi-cuisine expert chef to elevate your party hosting experience
            </h2>
          </div>
        </div>

        {/* ShowCard Component */}
        <ShowCard1 />
      </section>
    </div>
  );
};

export default BannerDow1;