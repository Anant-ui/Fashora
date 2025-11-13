import { motion } from "framer-motion";
import { useCart } from "../context/cart";

export default function Cart() {
  const { cartItems, removeFromCart } = useCart();

  return (
    <section className="relative min-h-screen pt-28 px-6 flex flex-col items-center overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-yellow-100">
      
     
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(120deg, #fff4e6, #f9e6ff, #e0f7fa, #fffde7)",
          backgroundSize: "300% 300%",
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-yellow-200 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-56 h-56 bg-yellow-300 rounded-full blur-3xl opacity-20"
        animate={{ y: [0, -25, 0], x: [0, -15, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 w-full max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif text-center mb-8 text-gray-800"
        >
          Your Cart 🛍️
        </motion.h2>

        {cartItems.length === 0 ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-500 text-center text-lg mt-10"
          >
            No products added yet 😔
          </motion.p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            {cartItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ scale: 1.02, y: -5 }}
                className="flex items-center justify-between bg-white/90 backdrop-blur-md shadow-md rounded-2xl p-5 transition"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover border border-gray-200"
                  />
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-800">{item.price}</p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-500 hover:underline mt-2"
                  >
                    Remove
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

     
        {cartItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex justify-center mt-10"
          >
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-xl transition-all hover:scale-105">
              Proceed to Checkout →
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
