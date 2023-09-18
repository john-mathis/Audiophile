import React from "react";
import CtaButton from "../common/CtaButton";

const NewProduct = () => {
  return (
    <section className="pt-24 pb-32 mb-20 bg-black text-white ">
      <div className="text-center lg:text-left w-[24rem] border-2 ">
        <p className="uppercase tracking-[.5rem] mb-3">new product</p>
        <h1 className="uppercase text-4xl w-80 md:w-96 tracking-wider font-semibold mb-4">
          xx99 mark ii headphones
        </h1>
        <p className="w-80 md:w-96">
          Experince natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <CtaButton bgColor={"bg-red-500"} textColor={"text-white"} />
      </div>
    </section>
  );
};

export default NewProduct;
