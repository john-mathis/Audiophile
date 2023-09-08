"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const TopNavbar = () => {
  return (
    <nav className="flex justify-between items-center text-white bg-black h-14 p-6">
      <GiHamburgerMenu className="h-6 w-5 cursor-pointer lg:hidden" />
      <h1 className="font-extrabold text-xl md:flex cursor-pointer">
        audiophile
      </h1>
      <ul className="text-white justify-between w-96 hidden sm:hidden md:hidden lg:flex">
        <li className="uppercase cursor-pointer">Home</li>
        <li className="uppercase cursor-pointer">Headphones</li>
        <li className="uppercase cursor-pointer">Speakers</li>
        <li className="uppercase cursor-pointer">Earphones</li>
      </ul>

      <AiOutlineShoppingCart className="h-6 w-5 cursor-pointer" />
    </nav>
  );
};

const navItems = {};

export default TopNavbar;
