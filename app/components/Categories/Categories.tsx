import React from "react";
import Category from "./Category";
import Headphones from "../../../public/assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg";
import Speakers from "../../../public/assets/product-zx9-speaker/mobile/image-category-page-preview.jpg";
import Earphones from "../../../public/assets/product-yx1-earphones/mobile/image-category-page-preview.jpg";

const Categories = () => {
  return (
    <div className="md:flex md:w-[43rem] md:m-auto md:justify-between">
      {categoryItems.map((item) => {
        return <Category img={item.img} category={item.category} />;
      })}
    </div>
  );
};

const categoryItems = [
  {
    category: "Headphones",
    img: Headphones,
  },
  {
    category: "Speakers",
    img: Speakers,
  },
  {
    category: "Earphones",
    img: Earphones,
  },
];

export default Categories;
