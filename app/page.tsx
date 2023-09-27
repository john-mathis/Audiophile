"use client";
import Navbar from "./components/Navbar/Navbar";
import "../app/globals.css";
import NewProduct from "./components/NewProduct/NewProduct";
import Categories from "./components/Categories/Categories";
import ProductPreview from "./components/ProductPreview/ProductPreview";
import ListItems from "../app/components/ProductPreview/ProductList";
export default function Home() {
  return (
    <main>
      <NewProduct />
      <Categories />
      <ProductPreview props={ListItems} />
    </main>
  );
}
