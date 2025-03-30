import React, { useEffect, useState } from "react";

const FloatingBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hide on scroll down, show on scroll up
    if (currentScrollY < lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-gray-100 shadow-lg transition-transform transform ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="container md:mx-20 flex flex-col md:flex-row justify-between items-center py-4 px-4 md:px-8">
        <p className="text-gray-700 font-normal text-lg md:text-2xl text-center md:text-left mb-2 md:mb-0">
          Hungry for instant delights? Book your Chefit now and get in-home cooked meal!!
        </p>
        <button className="bg-orange-500 text-white px-6 py-3 md:px-10 md:py-4 rounded-lg font-bold w-full md:w-auto md:mr-24 md:ml-0">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FloatingBanner;
