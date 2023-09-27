"use client";
import TopNavbar from "./TopNavbar";
import NavbarSlider from "./NavbarSlider";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
  return (
    <>
      <TopNavbar
        isSliderOpen={isSliderOpen}
        setIsSliderOpen={setIsSliderOpen}
      />
      <NavbarSlider isSliderOpen={isSliderOpen} />
    </>
  );
};

export default Navbar;
