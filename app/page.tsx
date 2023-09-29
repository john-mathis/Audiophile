"use client";
import Navbar from "./components/Navbar/Navbar";
import "../app/globals.css";
import NewProduct from "./components/NewProduct/NewProduct";
import Categories from "./components/Categories/Categories";

export default function Home() {
  return (
    <main>
      <NewProduct />
      <Categories />
    </main>
  );
}
