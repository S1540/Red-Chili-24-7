import React from "react";
import Background from "../assets/pizza.png";

const PizzaPage = () => {
  return (
    <>
      <div className="relative max-w-full w-full h-full bg-orange-600 flex flex-col items-center lg:items-start text-center lg:text-start  justify-between text-white lg:flex-row gap-5 px-5 py-5">
        <img src={Background} className=" order-2" />

        <div className="order-1 w-xs md:w-md flex flex-col gap-3">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-[Inter]">
              {" "}
              <span className="text-black animate-pulse">12:00 PM</span>{" "}
              Exclusive - Flat 50% Off on all Pizza !{" "}
            </h1>
            <h1 className="text-start text-3xl font-semibold text-black/80 chooseUs">
              Every Time Hottest Pizza
            </h1>
            <p className="text-start text-lg font-semibold text-black/80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut
              officiis veniam necessitatibus doloribus. Perferendis, earum
              distinctio maxime deleniti ab suscipit!
            </p>
          </div>
          <div>
            <button className="bg-black h-17 w-44 rounded-full text-white font-semibold hover:bg-gray-800 transition duration-300 ease-in-out">
              Get Pizza
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaPage;
