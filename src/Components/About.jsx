import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
      className="relative py-24 text-center overflow-hidden"
    >
      
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(120deg, #fff9f0, #fff0f5, #e3f2fd, #fefce8)",
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
        className="absolute top-20 left-10 w-64 h-64 bg-yellow-100 rounded-full opacity-40 blur-3xl"
        animate={{
          y: [0, 40, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

     
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-pink-100 rounded-full opacity-30 blur-3xl"
        animate={{
          y: [0, -30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

     
      <div className="relative z-10 px-6 max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-serif text-brand-dark mb-6"
        >
          About Fashora
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-gray-700 leading-relaxed text-lg"
        >
          Fashora is a modern fashion brand built for dreamers, trendsetters, and creators.
          We believe in minimal design, premium comfort, and empowering self-expression.
          From timeless classics to bold new arrivals, Fashora brings you the best of both worlds.
        </motion.p>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "120px", opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="h-1 bg-brand-gold mx-auto mt-6 rounded-full"
        />
      </div>
    </motion.section>
  );
}
