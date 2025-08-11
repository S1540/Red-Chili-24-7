import React from "react";
// import footerImage from "../assets/footer.png";
import redChili from "../assets/Red-Chilii.png";
import footerPng from "../assets/footerPng.png";
const Footer = () => {
  return (
    <>
      <footer className=" bg-zinc-700 text-gray-200 max-w-full w-full h-auto px-10 py-10">
        <div className=" max-w-3xl w-full opacity-30 mx-auto pb-10">
          <img src={footerPng} alt="" />
        </div>

        <div className="flex flex-col md:flex-row justify-around md:items-center md:gap-6">
          <div className=" max-w-lg w-full ">
            <img src={redChili} className="w-44 object-cover pb-4" />
            <p>
              One is to focus on the quality of your meat. If you can call out
              organic beef, sustainable farming
            </p>
            <p className="font-medium py-4">
              Phone :{" "}
              <span className="text-sm font-extralight">+91 70500 43530</span>
            </p>
            <p className="font-medium">
              E-mail :{" "}
              <span className="text-sm font-extralight">
                shubhamkumar2452004@gmail.com
              </span>
            </p>
          </div>

          <div className="py-5 flex flex-col gap-2 text-gray-400">
            <h1 className="font-semibold text-white text-xl">Our Service</h1>
            <a
              className="hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
              href=""
            >
              Home
            </a>
            <a
              className="hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
              href=""
            >
              Menu
            </a>
            <a
              className="hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
              href=""
            >
              Book Your Seat
            </a>
            <a
              className="hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
              href=""
            >
              Report a Problem
            </a>
            <a
              className="hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
              href=""
            >
              Our Community
            </a>
          </div>

          <div className="py-5 flex flex-col text-gray-400 gap-2">
            <h1 className="font-semibold text-white text-xl">Contact Media</h1>
            <a
              className="hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
              href="#"
            >
              Instagram
            </a>
            <a
              className="hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
              href="#"
            >
              Twitter
            </a>
            <a
              className="hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
              href="#"
            >
              FaceBook
            </a>
            <a
              className="hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
              href="#"
            >
              Whatsapp Chat
            </a>
            <a
              className="hover:text-orange-500 transition-all duration-300 ease-in-out hover:-translate-y-1"
              href="#"
            >
              YouTube
            </a>
          </div>
        </div>
        <hr />
        <div className="text-center pt-3 text-lg  mx-auto">
          <p> Copyright 2025 © Theme Created By React All Rights Reserved </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
