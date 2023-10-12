import React from "react";
import BestGearSm from "../../../public/assets/shared/mobile/image-best-gear.jpg";
import BestGearMed from "../../../public/assets/shared/tablet/image-best-gear.jpg";
import BestGearLg from "../../../public/assets/shared/desktop/image-best-gear.jpg";

const BestAudio = () => {
  return (
    <section className="w-80 md:w-[43rem] m-auto lg:flex lg:w-[60rem] xl:w-[69rem]">
      {/* Displays correct image based on screen size */}
      <picture className="lg:order-3">
        {/* Mobile Image */}
        <img
          className="m-auto rounded-md order-2 md:hidden lg:hidden xl:hidden"
          src={BestGearSm.src}
          alt=""
        />
        {/* Tablet Image */}
        <img
          className="m-auto rounded-md hidden md:flex lg:hidden"
          src={BestGearMed.src}
          alt=""
        />
        {/* Desktop Image */}
        <img
          className="m-auto rounded-md order-2 text-left w-[33rem] hidden lg:flex xl:flex"
          src={BestGearLg.src}
          alt=""
        />
      </picture>

      <div className="md:w-[35rem] xl:w-[27rem] mx-auto md:my-12 order-1 text-center lg:text-left lg:p-8">
        <p className="uppercase text-3xl md:text-4xl my-4 font-semibold">
          Bringing you the <span className="text-[--dark-orange]">best </span>
          audio gear
        </p>
        <p>
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
