export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h4 className="text-lg font-semibold mb-4">Subscribe to our newsletter</h4>
        <div className="flex justify-center gap-2 mb-6">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-md text-black w-64"
          />
          <button className="bg-brand-gold px-4 py-2 rounded-r-md font-medium hover:shadow-md transition">Subscribe</button>
        </div>
        <p className="text-gray-300">© 2025 Fashora. All rights reserved.</p>
      </div>
    </footer>
  );
}
