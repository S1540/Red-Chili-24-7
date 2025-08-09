import ChefCard from "./ChefCard";
import ChefParticles from "./ChefParticles";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import chef1 from "../assets/chef-1.jpg";
import chef2 from "../assets/chef-2.jpg";
import chef3 from "../assets/chef-3.jpg";
import chef4 from "../assets/chef-4.jpg";
import { useEffect, useState } from "react";

function MeetOurChef() {
  const Chefs = [
    {
      name: "Zarin Banu",
      specialist: "Bangladeshi Cuisine",
      image: chef1,
      level: "Expert",
      experience: "7 Years of Experience",
    },
    {
      name: "John Doe",
      specialist: "Non-Vegetarian Cuisine",
      image: chef2,
      level: "Expert",
      experience: "10+ Years of Experience",
    },
    {
      name: "Lazarus Smith",
      specialist: "Italian Cuisine",
      image: chef3,
      level: "Expert",
      experience: "7 Years of Experience",
    },
    {
      name: "Ayesha Khan",
      specialist: "Indian Cuisine",
      image: chef4,
      level: "Expert Head Chef ",
      experience: "8 Years of Experience",
    },
  ];

  const [currentChefIndex, setCurrentChefIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handleNextChef = () => {
    setDirection(1);
    setCurrentChefIndex((prev) => (prev + 1) % Chefs.length);
  };

  const handlePrevChef = () => {
    setDirection(-1);
    setCurrentChefIndex((prev) => (prev - 1 + Chefs.length) % Chefs.length);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      handleNextChef();
    }, 3000);
    return () => clearTimeout(interval);
  }, [currentChefIndex]);

  return (
    <div className="relative w-full  bg-zinc-700 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* <ChefParticles /> */}
      </div>

      <div className="relative z-10 py-5 text-white">
        <h1 className="text-3xl md:text-5xl font-semibold chooseUs text-center">
          Meet Our Chef
        </h1>

        <div className="relative w-full flex items-center justify-center overflow-hidden ">
          <div
            className={`w-full flex transition-transform duration-500 ease-in-out`}
            style={{
              transform: `translateX(${-currentChefIndex * 100}%)`,
            }}
          >
            {Chefs.map((chef, index) => (
              <div key={index} className="w-full flex-shrink-0">
                <ChefCard chefs={chef} />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-6 mt-5 bg-white rounded-md mx-auto w-40">
          <button
            onClick={handlePrevChef}
            className="bg-orange-600/70 px-6 py-2 rounded-l-md hover:bg-yellow-300 transition-all duration-300 ease-in-out hover:-translate-x-2 cursor-pointer"
          >
            <BsArrowLeft size={20} color="black" />
          </button>
          <button
            onClick={handleNextChef}
            className="bg-orange-600/70 px-6 py-1 rounded-r-md hover:bg-yellow-300 transition-all duration-300 ease-in-out hover:translate-x-2 cursor-pointer"
          >
            <BsArrowRight size={20} color="black" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MeetOurChef;
