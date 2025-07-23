import React from "react";
import GooglePlay from "../assets/GooglePlay.png";
import AppStore from "../assets/AppStore.png";
import { FaAnglesDown } from "react-icons/fa6";
import SpacialItem from "./WhyChooseUs";

const Main = () => {
  return (
    <>
      <main className="max-w-full min-h-screen">
        <div className="relative h-screen px-5 py-5 md:px-20 md:py-10">
          <div className="absolute top-32 left-0 right-0 px-5 md:left-20 md:right-20 max-w-md h-full leading-relaxed text-white space-y-4 transition-all duration-500 ease-in-out">
            <p className="text-4xl md:text-5xl font-semibold leading-14">
              <span className="text-green-600">Welcome</span> To{" "}
              <span className="text-red-500 ">Red Chili</span> - Your Perfect
              Bite <span className="text-yellow-400">Awaits</span> 🤷‍♂
            </p>

            <p className="inter">
              Every dish has a soul — and every bite tells a story. At Red
              Chili, we turn meals into memories. Spice, warmth, comfort — all
              served fresh, just for you. Your seat is ready. Let’s make it
              delicious.
            </p>

            <form className="leading-relaxed py-5">
              <label htmlFor="" className="text-3xl px-1 font-semibold booking">
                Quick Booking Here{" "}
              </label>
              <div className="flex gap-3 py-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-zinc-900 text-white placeholder-gray-400 border border-gray-600 focus:border-red-500 focus:ring-1 focus:ring-red-500 outline-none transition duration-300"
                />
                <button
                  type="submit"
                  className="flex items-center bg-blue-500 text-white gap-1 px-4 cursor-pointer font-semibold tracking-widest rounded-md hover:bg-blue-400 duration-300 hover:gap-2 hover:translate-x-3"
                >
                  Send
                  <svg
                    className="w-5 h-5 hover:animate-spin"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                </button>
              </div>
            </form>

            <div className="w-full flex justify-between flex-wrap items-center py-2">
              <img
                src={GooglePlay}
                className="hover:scale-105 hover:transition-all duration-300 ease-in-out object-cover h-auto w-40 sm:w-48"
              />
              <img
                src={AppStore}
                className="hover:scale-105 hover:transition-all duration-300 ease-in-out object-cover h-auto w-40 sm:w-48"
              />
            </div>
          </div>
        </div>

        {/* WhyChooseUs Section */}
        <SpacialItem />
      </main>
    </>
  );
};

export default Main;
