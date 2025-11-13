// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Hero from "./Components/Hero.jsx";
import Featured from "./Components/Featured.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Cart from "./Components/Cart.jsx";


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
