import React from "react";

const SideNavbar = () => {
  return (
    <div>
      <ul className="bg-black text-white justify-between w-96 hidden sm:flex md:flex lg:hidden">
        <li className="uppercase cursor-pointer">Home</li>
        <li className="uppercase cursor-pointer">Headphones</li>
        <li className="uppercase cursor-pointer">Speakers</li>
        <li className="uppercase cursor-pointer">Earphones</li>
      </ul>
    </div>
  );
};

export default SideNavbar;
