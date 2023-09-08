import Navbar from "./components/Navbar/TopNavbar";
import "../app/globals.css";
import NavbarSlider from "./components/Navbar/NavbarSlider";
import TopNavbar from "./components/Navbar/TopNavbar";

export default function Home() {
  return (
    <main>
      <TopNavbar />
      <NavbarSlider />
    </main>
  );
}
