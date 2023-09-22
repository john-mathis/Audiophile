"use client";
import Navbar from "./components/Navbar/Navbar";
import "../app/globals.css";
import NewProduct from "./components/NewProduct/NewProduct";
import Categories from "./components/Categories/Categories";
import ProductPreview from "./components/ProductPreview/ProductPreview";

export default function Home() {
  return (
    <main>
      <Navbar />
      <NewProduct />
      <Categories />
      <ProductPreview />
    </main>
  );
}
