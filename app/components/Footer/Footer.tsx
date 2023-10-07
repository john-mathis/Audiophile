import React from "react";
import navItems from "../Navbar/NavItems";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="bg-black text-white px-6 py-10 text-center md:text-left mt-24">
      <p className="text-2xl font-bold mb-8 border-t-2">audiophile </p>
      <div className="flex flex-col md:flex-row justify-between md:w-[26rem]	 ">
        {navItems.map((items) => (
          <Link
            className="my-2 font-bold"
            href={items === "home" ? "/" : items}
          >
            {items.toLocaleUpperCase()}
          </Link>
        ))}
      </div>
      <p className="my-8 text-base">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <div className="md:flex items-center md:justify-between md:mt-20">
        <p className="font-bold">Copyright 2021. All Rights Reserved</p>

        <div className="flex mt-6 md:mt-0 m-auto justify-center">
          {footerIcons.map((icon) => (
            <span className="text-3xl mx-2 md:flex">{icon}</span>
          ))}
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
