import React from "react";
// import burger from "../assets/burger.png";
import girlPic from "../assets/girl-bg.png";

const CustomBurgerImage = () => {
  return (
    <>
      <div className=" max-w-3xl px-2 rounded-xl bg-center bg-cover shrink-0 md:h-[500px] lg:h-[600px] bg-no-repeat">
        <img src={girlPic} className=" w-full h-full  object-center" />
      </div>
    </>
  );
};

export default CustomBurgerImage;
