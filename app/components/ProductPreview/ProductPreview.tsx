import React from "react";
import CtaButton from "../common/CtaButton";

interface ProductPreviewProps {
  props: any;
}

const ProductPreview: React.FC<ProductPreviewProps> = ({ props }) => {
  return (
    <section>
      <h1 className="bg-black text-white text-center flex items-center	justify-center h-24 md:h-48  border-t-[1px] uppercase text-4xl mb-8 md:mb-24">
        {props[0].category}
      </h1>
      {props.map((info: any) => {
        return (
          <div className="mb-24 w-80 md:w-[43rem] m-auto lg:flex" key={info.id}>
            {/* Image container */}
            <picture className="m-auto w-full">
              <img
                className="mb-6 md:hidden lg:hidden xl:hidden"
                src={info.img.src}
              />
              <img
                className="mb-6 hidden md:flex md:w-full  lg:hidden xl:hidden"
                src={info.imgMD.src}
              />
              <img
                className="mb-6 hidden lg:flex xl:flex"
                src={info.imgLG.src}
              />
            </picture>

            <p className="text-center uppercase text-[--light-orange] mb-6 tracking-widest">
              {info.new ? info.new : ""}
            </p>
            <img src={info.img} alt="" />
            <p className="uppercase text-center text-2xl font-bold">
              {info.title}
            </p>
            <p className="text-center mt-4">{info.description}</p>
            <CtaButton bgColor="bg-[--dark-orange]" textColor="white" />
          </div>
        );
      })}
    </section>
  );
};

export default ProductPreview;
