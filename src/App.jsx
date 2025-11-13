// src/App.jsx
import { Routes, Route } from "react-router";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Featured from "./components/featured.jsx";
import About from "./components/about.jsx";
import Contact from "./components/contact.jsx";
import Cart from "./components/cartt.jsx";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
