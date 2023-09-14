import React from "react";
import Image from "next/image";

interface CategoryProps {
  img: any;
  category: string;
}

const Category: React.FC<CategoryProps> = ({ img, category }) => {
  return (
    <div className="relative bg-red-500 mt-12 mb-16 w-80 h-40 mx-auto">
      <Image
        className="relative w-20 bottom-10 m-auto"
        src={img}
        alt={category}
      />
      <p className="uppercase text-center font-bold">{category}</p>
      <p className="uppercase text-center mt-2 font-bold">Shop</p>
    </div>
  );
};

export default Category;
