import React from 'react';

const Lower = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-orange-100 py-8 md:py-16">
      <section className="text-gray-600 body-font max-w-5xl mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <h2 className="leading-[3rem] md:leading-[4rem] tracking-normal font-bold text-3xl md:text-5xl text-gray-900 mb-4 md:mb-0 md:w-2/5 text-center md:text-left">
            ChefKart के <span className="text-orange-400 tracking-wide">4500 से भी ज़्यादा कुक्स</span> का हिस्सा बनें।
          </h2>

          <div className="md:w-3/5 md:pl-6 mt-4 md:mt-0">
            <p className="leading-relaxed text-sm md:text-base text-black text-center md:text-left">
              इज़्ज़त और गर्व के साथ जिएँ। ChefKart की ट्रेनिंग व सहायता से अपने खाना बनाने के कौशल को एक नई मंज़िल पर ले जाएँ।
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lower;
