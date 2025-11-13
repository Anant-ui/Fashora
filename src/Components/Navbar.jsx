import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useCart } from "../context/cart"; 
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { cartItems } = useCart();
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <motion.nav
      className="flex justify-between items-center px-8 py-4 bg-white shadow-md fixed top-0 left-0 w-full z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-serif font-bold text-brand-dark">
        Fashora
      </h1>

      <div className="flex gap-6 items-center font-medium">
        <Link to="/" className="hover:text-brand-gold transition">Home</Link>
        <Link to="/featured" className="hover:text-brand-gold transition">Shop</Link>
        <Link to="/about" className="hover:text-brand-gold transition">About</Link>
        <Link to="/contact" className="hover:text-brand-gold transition">Contact</Link>


        <Link
          to="/cart"
          className="relative bg-brand-gold text-white px-4 py-2 rounded-full hover:shadow-md transition flex items-center gap-2"
        >
          <ShoppingCart size={18} />
          <span>Cart</span>


          <span className="absolute -top-2 -right-2 text-black text-xs rounded-full px-2">
            {itemCount > 0 ? itemCount : 0}
          </span>
        </Link>
      </div>
    </motion.nav>
  );
}
