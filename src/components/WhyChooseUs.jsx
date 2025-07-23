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
    itemName: "Sizzle Snap Burgers",
  },

  {
    image: item8,
    itemName: "Sizzle Snap Burgers",
  },
];

const SpacialItems = () => {
  return (
    <>
      <h1 className=" bg-white/90 text-3xl md:text-5xl font-semibold px-6 py-5 chooseUs">
        Our Spacial items 🤷‍♂️
      </h1>
      <div className=" bg-white/90 flex gap-4 justify-around flex-wrap">
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
