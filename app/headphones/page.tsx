"use client";
import React from "react";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import ListItems from "../components/ProductPreview/ProductList";
import Categories from "../components/Categories/Categories";
import BestAudio from "../components/BestAudio/BestAudio";

const page = () => {
  const headphones = ListItems.filter(
    (items) => items.category === "Headphones"
  );
  return (
    <section>
      <ProductPreview props={headphones} />
      <Categories />
      <BestAudio />
    </section>
  );
};

export default page;
