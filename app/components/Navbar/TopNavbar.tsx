"use client";
import { Dispatch, SetStateAction } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavItems from "./NavItems";

interface NavbarProps {
  isSliderOpen: any;
  setIsSliderOpen: Dispatch<SetStateAction<boolean>>;
}

const TopNavbar: React.FC<NavbarProps> = ({
  setIsSliderOpen,
  isSliderOpen,
}) => {
  return (
    <nav className="flex justify-between items-center text-white bg-black h-14 p-6">
      <GiHamburgerMenu
        className="h-6 w-5 cursor-pointer lg:hidden"
        onClick={() => {
          setIsSliderOpen(!isSliderOpen);
        }}
      />
      <h1 className="font-extrabold text-xl md:flex cursor-pointer">
        audiophile
      </h1>
      <ul className="text-white justify-between w-96 hidden sm:hidden md:hidden lg:flex">
        {NavItems.map((items) => {
          return (
            <li
              key={items}
              className="uppercase cursor-pointer hover:text-[--dark-orange]"
            >
              {items}
            </li>
          );
        })}
      </ul>

      <AiOutlineShoppingCart className="h-6 w-5 cursor-pointer" />
    </nav>
  );
};

export default TopNavbar;
