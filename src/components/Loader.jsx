import React from "react";
import bike from "../assets/delivery.png";

const Loader = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen bg-red-950 overflow-hidden">
        {/* Road */}
        <div className="relative w-full h-20 bg-gray-500 rounded">
          {/* Dotted White Road Lines */}
          <div className="absolute inset-0 top-9 flex justify-between">
            <div className="w-6 h-1 bg-white mt-0.5" />
            <div className="w-6 h-1 bg-white mt-0.5" />
            <div className="w-6 h-1 bg-white mt-0.5" />
            <div className="w-6 h-1 bg-white mt-0.5" />
            <div className="w-6 h-1 bg-white mt-0.5" />
            <div className="w-6 h-1 bg-white mt-0.5" />
            <div className="w-6 h-1 bg-white mt-0.5" />
            <div className="w-6 h-1 bg-white mt-0.5" />
          </div>
          {/* 🚚 Truck */}
          <div className="absolute top-[-40px] text-4xl h-20 w-20 animate-truck">
            <img src={bike} alt="bike" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
