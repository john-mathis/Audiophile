import TopNavbar from "./TopNavbar";
import NavbarSlider from "./NavbarSlider";
import { useState } from "react";

const Navbar: React.FC = () => {
  const [isSliderOpen, setIsSliderOpen] = useState<boolean>(false);
  return (
    <>
      <TopNavbar />
      <NavbarSlider />
    </>
  );
};

export default Navbar;
