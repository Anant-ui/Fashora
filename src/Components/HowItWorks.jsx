import { FiTruck, FiCreditCard, FiPackage } from "react-icons/fi";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    { icon: <FiPackage size={32} />, title: "Choose Product", text: "Select your favorite items from our collection." },
    { icon: <FiCreditCard size={32} />, title: "Easy Payment", text: "Secure and fast checkout for peace of mind." },
    { icon: <FiTruck size={32} />, title: "Fast Delivery", text: "Get your order delivered quickly to your door." }
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-serif text-center mb-12 text-brand-dark">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="flex flex-col items-center bg-brand-gray p-8 rounded-2xl shadow-md text-center"
          >
            <div className="mb-4 text-brand-gold">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-600">{s.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
