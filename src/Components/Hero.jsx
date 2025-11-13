import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const [sparks, setSparks] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Sparks for button hover
  const handleHover = () => {
    const newSparks = Array.from({ length: 8 }).map(() => ({
      id: Math.random(),
      x: Math.random() * 60 - 30,
      y: Math.random() * -60,
    }));
    setSparks(newSparks);
    setTimeout(() => setSparks([]), 500);
  };

  const handleShopNow = () => navigate("/featured");

  // Mouse movement for parallax shapes
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-gradient-to-tr from-cyan-200 via-white to-pink-200">
      
      {/* ===== Floating Glassy Blobs ===== */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            width: 200 + Math.random() * 300,
            height: 200 + Math.random() * 300,
            top: Math.random() * 80 + "%",
            left: Math.random() * 80 + "%",
            background: `radial-gradient(circle, rgba(255,255,255,0.3), transparent)`,
          }}
          animate={{
            x: [0, 30 - Math.random() * 60, 0],
            y: [0, 20 - Math.random() * 40, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ===== Floating Geometric Shapes ===== */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-lg bg-white/20 blur-xl mix-blend-overlay"
          style={{
            width: 80 + Math.random() * 120,
            height: 80 + Math.random() * 120,
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            x: (mousePos.x / window.innerWidth - 0.5) * 40,
            y: (mousePos.y / window.innerHeight - 0.5) * 40,
          }}
          animate={{ rotate: [0, 360] }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* ===== Futuristic Grid Lines (Optional) ===== */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-full h-full bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05) 1px,transparent 1px,transparent 20px)]" />
        <div className="w-full h-full bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05),rgba(255,255,255,0.05) 1px,transparent 1px,transparent 20px)] absolute top-0 left-0" />
      </motion.div>

      {/* ===== Hero Content ===== */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center">
       <motion.h1
  className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-pink-500"
  animate={{ y: [0, -6, 0] }}
  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
>
  Elevate Your Style
</motion.h1>


        <motion.p
          className="text-gray-700 max-w-xl mt-6 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Discover exclusive fashion pieces and accessories that bring your personality to life.
        </motion.p>

        {/* Button with sparks */}
        <div className="relative inline-block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={handleHover}
            onClick={handleShopNow}
            className="bg-cyan-400 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-2xl transition-all relative z-10 overflow-hidden"
          >
            Shop Now
          </motion.button>

          {sparks.map((spark) => (
            <motion.span
              key={spark.id}
              className="absolute bg-white rounded-full w-2 h-2"
              style={{ left: "50%", bottom: 0 }}
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{ x: spark.x, y: spark.y, opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
