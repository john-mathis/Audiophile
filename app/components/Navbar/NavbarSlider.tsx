import React, { Dispatch, SetStateAction } from "react";
import NavItems from "./NavItems";
import Link from "next/link";

interface NavbarProps {
  isSliderOpen: any;
  setIsSliderOpen: Dispatch<SetStateAction<boolean>>;
}

const NavbarSlider: React.FC<NavbarProps> = ({
  isSliderOpen,
  setIsSliderOpen,
}) => {
  return (
    <div
      className={
        isSliderOpen
          ? "absolute z-10 bg-black text-black w-48 h-screen lg:hidden transition-all ease-in-out duration-500 transform"
          : "absolute ml-[-10rem] z-10 w-0 ease-in-out duration-500 transform h-screen"
      }
    >
      <ul className="text-white pl-6 pt-12 flex flex-col justify-between h-52">
        {NavItems.map((items) => {
          return (
            <Link href={items === "home" ? "/" : items} key={items}>
              <li
                key={items}
                className="uppercase cursor-pointer hover:text-[--dark-orange] w-fit"
                onClick={() => {
                  setIsSliderOpen(!isSliderOpen);
                }}
              >
                {items}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default NavbarSlider;
