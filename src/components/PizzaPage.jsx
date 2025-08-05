import React, { useEffect, useState } from "react";
import Background from "../assets/pizza.png";
import Background2 from "../assets/banner-bg2.png";

const PizzaPage = () => {
  const images = [Background, Background2];
  const [currentImage, setCurrentImage] = useState(0);
  const [slide, setSlide] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlide(false);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setSlide(true);
      }, 100);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative max-w-full w-full h-screen bg-orange-600 overflow-hidden flex flex-col items-center lg:items-start text-center lg:text-start justify-between text-white lg:flex-row gap-5 px-5 pt-5">
      {/* 🔥 Animated Pizza Image */}
      <img
        src={images[currentImage]}
        alt="Pizza Banner"
        className={`order-2 max-w-4xl w-full h-full object-cover transform transition-all duration-500 ease-in-out
        ${slide ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      />

      {/* ✅ Text Section */}
      <div className="order-1 w-xs md:w-md flex flex-col gap-3">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-[Inter]">
            <span className="text-black animate-pulse">12:00 PM</span> Exclusive
            - Flat 50% Off on all Pizza!
          </h1>
          <h1 className="text-start text-3xl font-semibold text-black/80 chooseUs">
            Every Time Hottest Pizza
          </h1>
          <p className="text-start text-lg font-semibold text-black/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut officiis
            veniam necessitatibus doloribus. Perferendis, earum distinctio
            maxime deleniti ab suscipit!
          </p>
        </div>
        <div>
          <button className="bg-black h-17 w-44 rounded-full text-white font-semibold hover:bg-gray-800 transition duration-300 ease-in-out">
            Get Pizza
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
