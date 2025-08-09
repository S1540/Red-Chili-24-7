import React from "react";
import { FaCrown } from "react-icons/fa";

const ChefCard = ({ chefs }) => {
  return (
    <>
      <div className="flex justify-center text-center">
        <div className="font-[Inter] max-w-4xl w-full flex flex-col items-center gap-5 px-5 py-8  ">
          <span>
            <FaCrown size={60} color="gold" className="mx-auto" />{" "}
          </span>
          <h1 className="text-3xl font-bold">{chefs.specialist}</h1>
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            suscipit, quo, quis eos obcaecati voluptatem similique iste hic
            natus at enim maxime aut itaque dolorem! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quaerat quod accusantium unde
            voluptatibus, aperiam laudantium earum ipsam rerum sunt sit!
          </p>

          <div className="flex flex-col items-center mt-8">
            <img
              src={chefs.image}
              alt="cheaf Image"
              className="w-32 h-32 rounded-full object-cover mx-auto "
            />
            <p className="font-semibold text-lg">{chefs.name} </p>
            <p className="text-sm text-orange-500 font-medium">{chefs.level}</p>
            <p className="text-amber-300">{chefs.experience}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChefCard;
