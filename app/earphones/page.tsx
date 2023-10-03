"use client";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import ListItems from "../components/ProductPreview/ProductList";
import Categories from "../components/Categories/Categories";
import BestAudio from "../components/BestAudio/BestAudio";

const page = () => {
  const earphones = ListItems.filter((items) => items.category === "Earphones");

  return (
    <section>
      <ProductPreview props={earphones} />
      <Categories />
      <BestAudio />
    </section>
  );
};

export default page;
