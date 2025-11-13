import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Featured from "./Components/Featured";
import About from "./Components/About";
import Contact from "./Components/Contact"; 
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}
