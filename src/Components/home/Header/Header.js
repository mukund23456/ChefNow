import React from "react";
import { BiBowlHot } from "react-icons/bi";
const NotificationBanner = () => {
  return (
    <div className="text-black py-3 px-5 flex items-center justify-center" style={{ backgroundColor: "rgb(250, 238, 230)" }}>
      <BiBowlHot className="text-rose-600 mr-2 text-4xl" />
      <span className="font-bold text-3xl">
        Now get a cook for one time in Delhi, Gurgaon & Bangalore!
      </span>
    </div>
  );
};

export default NotificationBanner;