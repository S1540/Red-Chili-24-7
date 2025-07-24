import React from "react";

import { RiSubtractFill } from "react-icons/ri";
import { IoAddSharp } from "react-icons/io5";
import { BsFillCartPlusFill } from "react-icons/bs";

const SpacialItemCard = ({ image, itemName }) => {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div
        className=" max-w-xs bg-white/80 flex flex-col justify-center items-center text-center leading-relaxed 
      shadow-left-right rounded-xl pb-3 overflow-hidden"
      >
        <img
          src={image}
          className=" w-2xs h-64 hover:scale-105 transition-all duration-300 ease-in object-cover"
        />
        <p className="text-2xl font-semibold  hover:text-orange-500 transition-all duration-200 ease-in ">
          {itemName}
        </p>
        <p className="py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ea
          laboriosam adipisci esse amet harum?
        </p>
        <div className="w-full flex justify-around items-center">
          <div className="bg-black/10 flex items-center gap-2 px-2 py-1 rounded-md itemIncress ">
            <RiSubtractFill
              className="text-3xl text-red-500"
              onClick={() => setCount(count - 1)}
            />
            <p className=" text-xl ">{count}</p>
            <IoAddSharp
              className="text-3xl text-green-500"
              onClick={() => setCount(count + 1)}
            />
          </div>
          <div className="flex items-center pt-2 gap-6 itemIncress">
            <p className="text-xl font-semibold py-2">Rs. {count * 10}</p>
            <BsFillCartPlusFill className="text-3xl text-blue-500 hover:border rounded-sm p-1 h-10 w-10 hover:bg-orange-400 hover:text-black transition-all duration-300 ease-in" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SpacialItemCard;
