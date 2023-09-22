import React from "react";
import CtaButton from "../common/CtaButton";

const NewProduct = () => {
  return (
    <section className="pt-24 pb-32 mb-20 bg-black text-white ">
      <div className="border-2 text-center md:w-[24rem] md:m-auto lg:m-0 lg:text-left lg:w-full lg:m-auto">
        <p className="uppercase tracking-[.5rem] mb-3">new product</p>
        <h1 className="uppercase m-auto text-4xl md:text-5xl w-80 md:w-96 tracking-wider font-semibold mb-4">
          xx99 mark ii headphones
        </h1>
        <p className="w-80 md:w-96 m-auto">
          Experince natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <CtaButton bgColor={"bg-red-500"} textColor={"text-white"} />
      </div>
    </section>
  );
};

export default NewProduct;
