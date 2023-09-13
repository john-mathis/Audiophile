"use client";
import Navbar from "./components/Navbar/Navbar";
import "../app/globals.css";
import NewProduct from "./components/NewProduct/NewProduct";

export default function Home() {
  return (
    <main>
      <Navbar />
      <NewProduct />
    </main>
  );
}
