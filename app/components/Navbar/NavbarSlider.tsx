import React, { Dispatch } from "react";
import NavItems from "./NavItems";

interface NavbarProps {
  isSliderOpen: any;
}

const NavbarSlider: React.FC<NavbarProps> = ({ isSliderOpen }) => {
  return (
    <div
      className={
        isSliderOpen
          ? "absolute z-10 bg-black text-black w-48 h-screen lg:hidden transition-all ease-in-out duration-500 transform"
          : "absolute ml-[-10rem] w-0 ease-in-out duration-500 transform h-screen"
      }
    >
      <ul className="text-white pl-6 pt-12 flex flex-col justify-between h-52">
        {NavItems.map((items) => {
          return (
            <li
              key={items}
              className="uppercase cursor-pointer hover:text-[--dark-orange] w-fit"
            >
              {items}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarSlider;
