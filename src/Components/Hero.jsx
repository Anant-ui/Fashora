import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


export default function Hero() {
  const navigate = useNavigate();

  const handleShopNow = () => {
    
    navigate("/featured");


  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden"
      id="hero"
    >
   
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-yellow-200 via-white to-yellow-100 opacity-60"
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% 200%",
          zIndex: 0,
        }}
      />

    
      <motion.div
        className="absolute top-0 left-0 w-full h-full overflow-hidden"
        animate={{}}
      >
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute bg-yellow-300 rounded-full opacity-30"
            style={{
              width: Math.random() * 60 + 20,
              height: Math.random() * 60 + 20,
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

     
      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-serif text-brand-dark mb-6"
        >
          Elevate Your Style
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl text-gray-600 mb-8"
        >
          Discover exclusive fashion pieces and accessories that bring your personality to life.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleShopNow}
          className="bg-brand-gold text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
        >
          Shop Now
        </motion.button>
      </div>
    </motion.section>
  );
}
