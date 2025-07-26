import { useState } from "react";
import chili1 from "../assets/chili-1.png";
import chili2 from "../assets/chili-2.png";
import CookItemOwn from "./CookItemOwn";

const CookLevelSlider = () => {
  const [cookLevel, setCookLevel] = useState(1);
  const labels = ["Rare", "Medium", "Full Baked"];

  return (
    <>
      <div className="w-full max-w-xl bg-zinc-200">
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
    </>
  );
};
export default CookLevelSlider;
