import React from "react";
import Image from "next/image";
import { BsCaretRightFill } from "react-icons/bs";

interface CategoryProps {
  img: any;
  category: string;
}

const Category: React.FC<CategoryProps> = ({ img, category }) => {
  return (
    <div className="relative bg-[--beige] mt-12 mb-16 w-80 md:w-[21rem] h-40 mx-auto rounded ">
      <div className="relative bottom-12">
        <Image className="relative w-28 m-auto" src={img} alt={category} />
        <p className="uppercase text-center text-sm font-bold">{category}</p>
        <p className="cursor-pointer flex justify-center items-center uppercase text-center text-xs mt-3 font-bold">
          Shop
          <span className="ml-2 text-[--dark-orange]">
            <BsCaretRightFill />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Category;
