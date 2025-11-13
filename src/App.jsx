// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

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
