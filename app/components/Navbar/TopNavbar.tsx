"use client";
import { Dispatch, SetStateAction } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import NavItems from "./NavItems";
import Link from "next/link";

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

      
      {/* Responsible for opening the navbar menu */}
      <GiHamburgerMenu
        className="h-6 w-5 cursor-pointer lg:hidden"
        onClick={() => {
          setIsSliderOpen(!isSliderOpen);
        }}
      />

      {/* Audiophile heading */}
      <h1 className="font-extrabold text-xl md:flex cursor-pointer">
        audiophile
      </h1>

      {/*Displays every item in the NavItems array as a navbar link */}
      <ul className="text-white justify-between w-[30rem] hidden sm:hidden md:hidden lg:flex">
        {NavItems.map((items) => {
          return (
            <Link href={items}>
              <li
                onClick={() => {
                  console.log(isSliderOpen);
                }}
                key={items}
                className="uppercase cursor-pointer hover:text-[--dark-orange]"
              >
                {items}
              </li>
            </Link>
          );
        })}
      </ul>

      {/*Shopping cart icon  */}
      <AiOutlineShoppingCart className="h-6 w-5 cursor-pointer hover:text-[--dark-orange]" />
    </nav>
  );
};

export default TopNavbar;
