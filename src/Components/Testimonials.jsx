import { motion } from "framer-motion";

const testimonials = [
  { name: "Sophia L.", text: "Fashora transformed my wardrobe. Love the quality and style!" },
  { name: "James T.", text: "Fast delivery and excellent customer service. Highly recommended." },
  { name: "Mia K.", text: "Beautiful designs, very premium feel. I’m obsessed!" }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <h2 className="text-3xl font-serif text-center mb-12 text-brand-dark">Testimonials</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8 px-4">
        {testimonials.map((t, idx) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-md"
          >
            <p className="mb-4 text-gray-700 italic">"{t.text}"</p>
            <h4 className="text-brand-dark font-semibold">{t.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

