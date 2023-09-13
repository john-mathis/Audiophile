import React from "react";
import Image from "next/image";
import CtaButton from "../common/CtaButton";

const NewProduct = () => {
  return (
    <div>
      <p className="uppercase tracking-[.5rem] m-auto text-center">
        new product
      </p>
      <h1 className="uppercase m-auto text-center text-4xl w-80 md:w-96 tracking-wider font-semibold mb-4">
        xx99 mark ii headphones
      </h1>
      <p className="w-80 md:w-96 m-auto text-center">
        Experince natural, lifelike audio and exceptional build quality made for
        the passionate music enthusiast.
      </p>
      <CtaButton bgColor={"bg-red-500"} textColor={"text-white"} />
    </div>
  );
};

export default NewProduct;
