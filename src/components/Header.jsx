import React from "react";
import logo from "../assets/Red-Chili.png";
import { HiBarsArrowDown } from "react-icons/hi2";

const Header = () => {
  return (
    <>
      <header className="max-w-full w-full h-auto bg-black/30 backdrop-blur-sm flex justify-between md:justify-around items-center fixed top-0 left-0 right-0 z-50">
        <div className="max-w-32 shrink-0 h-full">
          <img
            src={logo}
            alt="Red-Chili"
            className="w-32 h-24 object-contain shrink-0 "
          />
        </div>
        <nav className="max-w-2xl w-full hidden md:flex justify-around items-center text-white">
          <a
            href=""
            className="font-semibold px-2 hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Home
          </a>
          <a
            href=""
            className="font-semibold px-2 hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Menu
          </a>
          <a
            href=""
            className="font-semibold px-2 hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Service
          </a>
          <a
            href=""
            className="font-semibold px-2 hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Grab Your Seat{" "}
          </a>
          <a
            href=""
            className="font-semibold px-2 hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Account
          </a>
          <a
            href=""
            className="font-semibold px-2 hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            Orders
          </a>
        </nav>

        <div className="max-w-52 w-full hidden md:block space-x-3">
          <button className="border border-white px-5 py-1.5 rounded-md text-white bg-white/10 hover:bg-orange-500">
            Sign Up
          </button>
          <button className="border border-white px-5 py-1.5 rounded-md text-white bg-orange-500 hover:bg-white/10">
            Sign In
          </button>
        </div>

        <HiBarsArrowDown
          size={45}
          color="white"
          className="md:hidden px-4 mt-4 w-20"
        />
      </header>
    </>
  );
};

export default Header;
