import veg1 from "../assets/veg-1.png";
import veg2 from "../assets/veg-2.png";
import veg3 from "../assets/veg-3.png";
import veg4 from "../assets/veg-4.png";
import veg5 from "../assets/veg-5.png";
import veg6 from "../assets/veg-6.png";
import souce1 from "../assets/souce-1.png";
import souce2 from "../assets/souce-2.png";
import souce3 from "../assets/souce-3.png";
import souce4 from "../assets/souce-4.png";
import souce5 from "../assets/souce-5.png";
import souce6 from "../assets/souce-6.png";
import React, { useState } from "react";

const CookItemOwn = () => {
  const [selectedVeg, setSelectedVeg] = useState([]);
  const [selectedSouce, setSelectedSouce] = useState([]);

  const images = [veg1, veg2, veg3, veg4, veg5, veg6];

  const souces = [souce1, souce2, souce3, souce4, souce5, souce6];

  const toggleSelectVeg = (index) => {
    if (selectedVeg.includes(index)) {
      setSelectedVeg(selectedVeg.filter((i) => i !== index));
    } else {
      setSelectedVeg([...selectedVeg, index]);
    }
  };

  const toggleSelectSouce = (index) => {
    if (selectedSouce.includes(index)) {
      setSelectedSouce(selectedSouce.filter((i) => i !== index));
    } else {
      setSelectedSouce([...selectedSouce, index]);
    }
  };
  return (
    <>
      <div className="max-w-xl w-full bg-zinc-200 ">
        <h1 className="font-sans font-bold pb-2">Veg Item</h1>
        <div className="flex items-center flex-wrap  gap-2">
          {images.map((img, index) => {
            return (
              <img
                key={index}
                src={img}
                alt=""
                onClick={() => toggleSelectVeg(index)}
                className={`w-20 h-20 shadow-lg shadow-neutral-400 transition-all duration-300 ease-in-out rounded-sm ${
                  selectedVeg.includes(index)
                    ? "ring-1 ring-orange-500 scale-105  "
                    : ""
                }`}
              />
            );
          })}
        </div>

        <div className="max-w-xl w-full py-6 bg-zinc-200">
          <h1 className="font-sans font-bold pb-2">Souce</h1>
          <div className="flex items-center flex-wrap gap-2">
            {souces.map((img, index) => {
              return (
                <img
                  key={index}
                  src={img}
                  alt=""
                  onClick={() => toggleSelectSouce(index)}
                  className={`w-20 h-20 shadow-lg shadow-neutral-400 transition-all duration-300 ease-in-out rounded-sm ${
                    selectedSouce.includes(index)
                      ? "ring-1 ring-orange-500 scale-105  "
                      : ""
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CookItemOwn;
