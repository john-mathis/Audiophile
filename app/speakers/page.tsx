"use client";
import React from "react";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import ListItems from "../components/ProductPreview/ProductList";
import Categories from "../components/Categories/Categories";
import BestAudio from "../components/BestAudio/BestAudio";

const page = () => {
  const speakers = ListItems.filter((items) => items.category === "Speakers");
  return (
    <section>
      <ProductPreview props={speakers} />
      <Categories />
      <BestAudio />
    </section>
  );
};

export default page;
