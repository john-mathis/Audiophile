"use client";
import ProductPreview from "../components/ProductPreview/ProductPreview";
import ListItems from "../components/ProductPreview/ProductList";
import Categories from "../components/Categories/Categories";

const page = () => {
  const earphones = ListItems.filter((items) => items.category === "Earphones");
  console.log(earphones);
  return (
    <section>
      <ProductPreview props={earphones} />
      <Categories />
    </section>
  );
};

export default page;
