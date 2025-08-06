import React from "react";
import Resaturent from "../assets/banner-cafe.png";
import SpacialItemCard from "./SpacialItemCard";
import CafeCard from "./CafeCard";
import item1 from "../assets/cafe-1.png";
import item2 from "../assets/cafe-2.png";
import item3 from "../assets/cafe-3.jpg";
import item4 from "../assets/cafe-4.png";

const SpacialItemData = [
  {
    image: item1,
    itemName: "Monaco Biriyani",
  },
  {
    image: item2,
    itemName: "Handi Chicken",
  },
  {
    image: item3,
    itemName: "Chicken Rolls Fries",
  },

  {
    image: item4,
    itemName: "Chaumin Chicken ",
  },
];

const Cafe = () => {
  return (
    <>
      <div className="relative w-full h-full bg-zinc-200 pb-5">
        <img src={Resaturent} alt="" className="bg-fixed w-full " />
        <h1 className=" bg-whit text-3xl md:text-5xl font-semibold px-6 py-7 md:py-12 chooseUs">
          <p className="text-sm font-thin text-orange-600">
            - Sponsored by Zomato
          </p>
          Cafe & Resaturent{" "}
          <span className="text-orange-600"> 12:00 PM Spacial Offer </span>🤷‍♂️
        </h1>
        <div className=" flex justify-around flex-wrap gap-4">
          {SpacialItemData.map((data, index) => (
            <CafeCard key={index} image={data.image} title={data.itemName} />
          ))}
        </div>
        <div className="flex justify-center items-center mt-10">
          <a
            href="#"
            className="relative w-32 group inline-block py-4 px-6 text-center text-white hover:text-black bg-gray-800 font-semibold rounded-full overflow-hidden transition duration-200"
          >
            <div className="absolute top-0 right-full w-full h-full bg-yellow-400 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500" />
            <span className="relative">View More</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Cafe;
