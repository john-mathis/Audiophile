import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-white bg-black h-14 p-6">
      <GiHamburgerMenu className="h-6 w-5 cursor-pointer lg:hidden" />
      <h1 className="font-extrabold text-xl md:flex cursor-pointer">
        audiophile
      </h1>
      <ul className="text-white flex justify-between w-96">
        <li>Home</li>
        <li>Headphones</li>
        <li>Speakers</li>
        <li>Earphones</li>
      </ul>

      <AiOutlineShoppingCart className="h-6 w-5 cursor-pointer" />
    </nav>
  );
};

const navItems = {};

export default Navbar;
