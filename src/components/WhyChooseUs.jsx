import React from "react";
import item1 from "../assets/item-1.png";
import item2 from "../assets/item-2.png";
import item3 from "../assets/item-3.png";
import item8 from "../assets/item-9.jpg";
import SpacialItemCard from "./SpacialItemCard";

const SpacialItemData = [
  {
    image: item1,
    itemName: "Sizzle Snap Burgers",
  },
  {
    image: item2,
    itemName: "Italian Spicy Burgers",
  },
  {
    image: item3,
    itemName: "Snacks Meat Burgers",
  },

  {
    image: item8,
    itemName: "Crunchy Snap Hot-Dog",
  },
];

const SpacialItems = () => {
  return (
    <>
      <div className=" bg-zinc-200 flex justify-between  max-w-full w-full items-center ">
        <h1 className=" bg-whit text-3xl md:text-5xl font-semibold px-6 py-7 md:py-12 chooseUs">
          <p className="text-sm font-thin text-orange-600">- Tasty & Fresh</p>
          Our <span className="text-orange-600">Spacial items </span>🤷‍♂️
        </h1>

        {/* <button
          type="submit"
          className="flex items-center bg-blue-500 text-white gap-1 mx-4 px-4 h-10 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
        >
          See more
          <svg
            className="w-5 h-5 hover:animate-spin"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button> */}
      </div>
      <div className=" bg-zinc-200 flex gap-4 justify-around flex-wrap">
        {SpacialItemData.map((data, index) => (
          <SpacialItemCard
            key={index}
            image={data.image}
            itemName={data.itemName}
          />
        ))}
      </div>
    </>
  );
};

export default SpacialItems;
