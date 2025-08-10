import React from "react";
import footerImage from "../assets/footer.png";

const Footer = () => {
  return (
    <>
      <footer className="relative w-full bg-zinc-800/90 text-white flex items-center justify-center">
        <img src={footerImage} alt="" className="w-full object-cover " />
      </footer>
    </>
  );
};

export default Footer;
