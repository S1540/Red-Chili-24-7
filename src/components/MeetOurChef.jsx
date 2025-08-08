import ChefCard from "./ChefCard";
import ChefParticles from "./ChefParticles";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";

export default function MeetOurChef() {
  return (
    <div className="relative  w-full h-[750px] bg-zinc-700">
      {/* Particles Background */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
        <ChefParticles />
      </div>

      <div className="relative z-10 py-5 h-full text-white">
        <h1 className="text-3xl md:text-5xl font-semibold chooseUs text-center ">
          Meet Our Chef
        </h1>
        <ChefCard />
        <div className="flex justify-center items-center gap-15 mt-5 bg-white w-41 rounded-md mx-auto ">
          <button className="bg-orange-600/70 px-4 py-1 rounded-l-md hover:bg-yellow-300 transition-all duration-300 ease-in-out hover:-translate-x-2">
            {" "}
            <BsArrowLeft size={20} color="black" />{" "}
          </button>
          <button className="bg-orange-600/70 px-4 py-1 rounded-r-md hover:bg-yellow-300 transition-all duration-300 ease-in-out hover:translate-x-2">
            <BsArrowRight size={20} color="black" />
          </button>
        </div>
      </div>
    </div>
  );
}
