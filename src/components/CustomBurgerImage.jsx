import React from "react";
import burger from "../assets/burger.png";

const CustomBurgerImage = () => {
  return (
    <>
      <div className=" bg-gray-100 max-w-xl shadow-xl shadow-neutral-400 lg:mt-32 px-2 rounded-xl ">
        <img src={burger} className=" w-full h-[460px] object-contain" />
      </div>
    </>
  );
};

export default CustomBurgerImage;
