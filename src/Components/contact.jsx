import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[90vh] flex flex-col justify-center items-center px-6 pt-28 bg-gradient-to-b from-yellow-50 via-white to-yellow-100 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-gray-800 tracking-wide mb-3">
          Get in Touch
        </h2>
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed text-sm md:text-base">
          Have a question or feedback? We’d love to hear from you!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="backdrop-blur-md bg-white/70 border border-yellow-100 shadow-lg rounded-2xl p-6 md:p-8 w-full max-w-sm"
      >
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-left text-gray-700 font-medium mb-1 text-sm">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 bg-white/90 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-1 text-sm">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 bg-white/90 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            />
          </div>

          <div>
            <label className="block text-left text-gray-700 font-medium mb-1 text-sm">
              Message
            </label>
            <textarea
              placeholder="Type your message..."
              rows="4"
              className="w-full rounded-xl border border-gray-300 bg-white/90 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="mt-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white font-semibold py-2 rounded-full shadow-md hover:shadow-xl transition-all text-sm"
          >
            Send Message ✉️
          </motion.button>
        </form>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.15, x: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute top-24 left-10 w-16 h-16 bg-yellow-200 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-16 right-12 w-24 h-24 bg-yellow-300 rounded-full blur-3xl"
      ></motion.div>
    </section>
  );
}
