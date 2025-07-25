import React from "react";
import CookLevelSlider from "./CookLevelSlider";

const MakeOwnTest = () => {
  return (
    <>
      <h1 className=" bg-zinc-200 text-3xl md:text-5xl font-semibold px-6 py-7 md:py-12 chooseUs">
        <p className="text-sm font-thin text-orange-600">- Make & Buy</p>
        Your Burger -<span className="text-orange-600"> Your Way </span>
      </h1>
      <div className="bg-zinc-200 px-6">
        <CookLevelSlider />
        <div></div>
      </div>
    </>
  );
};

export default MakeOwnTest;
