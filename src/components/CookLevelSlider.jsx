import { useState } from "react";
import chili1 from "../assets/chili-1.png";
import chili2 from "../assets/chili-2.png";
import veg1 from "../assets/veg-1.png";
import veg2 from "../assets/veg-2.png";
import veg3 from "../assets/veg-3.png";
import veg4 from "../assets/veg-4.png";
import veg5 from "../assets/veg-5.png";
import veg6 from "../assets/veg-6.png";

const CookLevelSlider = () => {
  const [cookLevel, setCookLevel] = useState(1); // 0 = Rare, 1 = Medium, 2 = Full Baked

  const labels = ["Rare", "Medium", "Full Baked"];

  return (
    <>
      <div className="w-full max-w-xl">
        <h1 className="text-xl font-semibold font-[Inter] pb-2">
          How Spicy for You
        </h1>
        <div className="flex gap-3 items-center">
          <img
            src={chili1}
            alt=""
            className="w-20 h-20 shadow-lg shadow-neutral-400  rounded-sm"
          />
          <img
            src={chili2}
            alt=""
            className="w-20 h-20 shadow-lg shadow-neutral-400 rounded-sm "
          />
        </div>

        <div className="relative py-4">
          <input
            type="range"
            min="0"
            max="2"
            step="1"
            value={cookLevel}
            onChange={(e) => setCookLevel(parseInt(e.target.value))}
            className="w-full cursor-pointer"
          />
          {/* Labels Below */}
          <div className="flex justify-between text-sm mt-1 text-gray-600 font-medium">
            {labels.map((label, i) => (
              <span
                key={i}
                className={`${
                  cookLevel === i ? "text-orange-600 font-bold" : ""
                }`}
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Customize food */}

      <div className="max-w-xl w-full">
        <h1 className="font-[Inter] font-medium">Veg Item</h1>
        <div className="flex justify-around items-center flex-wrap gap-4">
          {[veg1, veg2, veg3, veg4, veg5, veg6].map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt=""
                className="w-20 h-20 shadow-lg shadow-neutral-400 rounded-sm"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default CookLevelSlider;
