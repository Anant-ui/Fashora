import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-white to-yellow-50 text-center px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-serif text-brand-dark mb-4"
      >
        Contact Us
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-xl mx-auto text-gray-600 mb-10"
      >
        Have questions or feedback? We'd love to hear from you! 
        Drop us a message and our team will get back to you soon.
      </motion.p>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 flex flex-col gap-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        ></textarea>
        <button
          type="submit"
          className="bg-brand-gold text-white px-6 py-2 rounded-full font-medium shadow-md hover:shadow-lg transition-all"
        >
          Send Message
        </button>
      </motion.form>
    </section>
  );
}
