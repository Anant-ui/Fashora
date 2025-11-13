export default function Categories() {
  const cats = [
    { title: "Men", img: "https://picsum.photos/seed/men/400/400" },
    { title: "Women", img: "https://picsum.photos/seed/women/400/400" },
    { title: "Accessories", img: "https://picsum.photos/seed/acc/400/400" },
  ];

  return (
    <section className="py-20 max-w-7xl mx-auto px-4">
      <h2 className="text-3xl font-serif text-center mb-10 text-brand-dark">Shop by Category</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {cats.map((c) => (
          <div key={c.title} className="relative group overflow-hidden rounded-2xl shadow-md">
            <img src={c.img} alt={c.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
              <span className="text-white text-xl font-semibold">{c.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
