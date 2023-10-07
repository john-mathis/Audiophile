import React from "react";
import navItems from "../Navbar/NavItems";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <section className="bg-black text-white px-6 py-10 text-center mt-24">
      <p>audiophile </p>
      <div className="flex flex-col ">
        {navItems.map((items) => (
          <Link className="my-2" href={items === "home" ? "/" : items}>
            {items.toLocaleUpperCase()}
          </Link>
        ))}
      </div>
      <p className="text-base w-[20rem] ">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>

      <p>Copyright 2021. All Rights Reserved</p>

      <div>
        <AiFillFacebook />
        <AiOutlineTwitter />
        <AiOutlineInstagram />
      </div>
    </section>
  );
};

export default Footer;
