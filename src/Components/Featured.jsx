import { sampleProducts } from "../Data/products";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext"; 

export default function Featured() {
  const { addToCart } = useCart(); 

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative py-20 overflow-hidden"
      id="products"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(120deg, #fff4e6, #f9e6ff, #e0f7fa, #fffde7)",
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
      ></motion.div>

     
      <motion.div
        className="absolute top-10 left-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl opacity-30"
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

     
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-serif text-center mb-12 text-brand-dark">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {sampleProducts.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{
                y: -10,
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)",
              }}
              className="bg-white shadow-md rounded-2xl overflow-hidden cursor-pointer transition"
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-5 flex flex-col gap-2">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="text-brand-dark font-bold">{p.price}</p>

                
                <button
                  onClick={() => addToCart(p)} 
                  className="mt-2 bg-brand-gold text-white px-4 py-2 rounded hover:shadow-md transition"
                >
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
