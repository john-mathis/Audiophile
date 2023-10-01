import React from "react";
import BestGearImage from "../../../public/assets/shared/mobile/image-best-gear.jpg";

const BestAudio = () => {
  return (
    <section className="w-80 md:w-[43rem]  m-auto">
      <img className="m-auto rounded-md" src={BestGearImage.src} alt="" />
      <div className="md:w-[35rem] mx-auto md:my-12">
        <p className="uppercase text-3xl md:text-4xl text-center my-4 font-semibold">
          Bringing you the <span className="text-[--dark-orange]">best </span>
          audio gear
        </p>
        <p className="text-center">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default BestAudio;
