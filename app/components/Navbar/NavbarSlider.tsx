import React, { Dispatch, SetStateAction } from "react";

interface NavbarProps {
  setIsSliderOpen: Dispatch<SetStateAction<boolean>>;
}

const NavbarSlider = () => {
  return (
    <div className={`bg-black text-white w-48 h-screen hidden`}>
      <p>Hey</p>
    </div>
  );
};

export default NavbarSlider;
