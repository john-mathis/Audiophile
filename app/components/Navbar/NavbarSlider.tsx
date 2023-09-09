"use client";
import React, { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  setIsSliderOpen: Dispatch<SetStateAction<boolean>>;
}

const NavbarSlider: React.FC<NavbarProps> = () => {
  return (
    <div className={`bg-black text-white w-48 h-screen`}>
      <p>Hey</p>
    </div>
  );
};

export default NavbarSlider;
