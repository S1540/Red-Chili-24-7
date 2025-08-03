import React from "react";
import Resaturent from "../assets/Restaurent.jpg";
import SpacialItemCard from "./SpacialItemCard";
// import item1 from "../assets/cafe-1.png";
// import item2 from "../assets/cafe-2.png";
// import item3 from "../assets/cafe-3.jpg";
// import item8 from "../assets/cafe-4.png";

// const SpacialItemData = [
//   {
//     image: item1,
//     itemName: "Sizzle Snap Burgers",
//   },
//   {
//     image: item2,
//     itemName: "Italian Spicy Burgers",
//   },
//   {
//     image: item3,
//     itemName: "Snacks Meat Burgers",
//   },

//   {
//     image: item8,
//     itemName: "Crunchy Snap Hot-Dog",
//   },
// ];

const Cafe = () => {
  return (
    <>
      <div>
        <img src={Resaturent} alt="" className="bg-fixed" />
        <SpacialItemCard />
      </div>
    </>
  );
};

export default Cafe;
