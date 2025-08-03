import React from "react";

const MakeOwnTest = ({ name }) => {
  return (
    <>
      <div className="max-w-xl w-full">
        <h1 className=" bg-zinc-200 text-3xl md:text-5xl font-semibold  py-7 md:py-12 chooseUs">
          <p className="text-sm font-thin text-orange-600">- Make & Buy</p>
          Your {name} -<span className="text-orange-600"> Your Way </span>
        </h1>
      </div>
    </>
  );
};

export default MakeOwnTest;
