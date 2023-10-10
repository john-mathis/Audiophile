import React from "react";
import navItems from "../Navbar/NavItems";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="relative bg-black text-white px-6 py-10 text-center md:text-left mt-24">
      <div className="max-w-[69rem] xl:m-auto">
        <div className="relative bottom-10 border-t-4 w-24 mx-auto md:mx-0 border-[--dark-orange]"></div>

        <div className="lg:flex lg:justify-between lg:items-center">
          <p className="text-2xl font-bold mb-8 lg:mb-0">audiophile </p>

          {/* Maps over and displays each navbar item.   */}
          <div className="flex flex-col md:flex-row justify-between md:w-[26rem]">
            {navItems.map((items) => (
              <Link
                className="my-2 font-bold"
                href={items === "home" ? "/" : items}
              >
                {items.toLocaleUpperCase()}
              </Link>
            ))}
          </div>
        </div>
        <p className="my-8 text-base md:w-[46rem]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </p>

        <div className="md:flex items-center md:justify-between md:mt-20">
          <p className="font-bold">Copyright 2021. All Rights Reserved</p>

          {/* Maps over and displays each social media icon */}
          <div className="flex mt-6 md:mt-0 m-auto md:m-0 justify-center">
            {footerIcons.map((icon) => (
              <span className="text-3xl mx-2 md:flex">{icon}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const footerIcons = [
  <AiFillFacebook />,
  <AiOutlineTwitter />,
  <AiOutlineInstagram />,
];

export default Footer;
