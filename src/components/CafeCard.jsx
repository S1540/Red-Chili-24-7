import React from "react";
import image from "../assets/cafe-2.png";
import { IoTimeOutline } from "react-icons/io5";

const CafeCard = ({ image, title }) => {
  return (
    <>
      <div className=" pb-5 w-70 bg-gray-200 rounded-md flex flex-col items-center shadow-lg hover:shadow-xl transition-all duration-300 hover:translate-y-2 hover:justify-around leading-relaxed">
        <div className="flex flex-col items-center leading-3 text-xs ">
          <img
            src={image}
            className="object-cover w-full h-60 cursor-not-allowed py-2"
          />
          <p className="text-xl font-semibold text-center font-[Inter]  hover:text-orange-500 transition-all duration-300 ">
            {title || "Cafe & Resaturent"}
          </p>
          <p className=" text-gray-600 text-xs">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
        <div className="flex items-center flex-col pt-4 pb-2 ">
          <div className="flex items-center px-3 font-medium">
            <IoTimeOutline />
            <span className="text-green-600 text-xs">Open Now</span>
            <span className="text-xs pl-4"> 10:00 AM - 11:00 PM</span>
          </div>

          <div className="flex items-center w-full justify-between px-3 py-2">
            <p className="text-orange-600 text-sm">Fast Delivery</p>
            <p className="text-green-600 text-sm">30 min</p>
          </div>
        </div>
        <button className="w-44 bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-300 flex items-center justify-center ">
          <p>Order Now</p>
        </button>
      </div>
    </>
  );
};

export default CafeCard;
