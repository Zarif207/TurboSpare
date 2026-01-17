import React from "react";

const blogs = [
  {
    id: 1,
    title: "How Brake Systems Work in Modern Cars",
    image:
      "https://images.unsplash.com/photo-1518303675041-1c5c9c8b7a3b",
    excerpt:
      "Brake systems are one of the most critical safety components in automobiles. Learn how disc brakes, ABS, and brake fluids work together.",
    date: "Apr 15, 2024",
    author: "AutoTech Team",
  },
  {
    id: 2,
    title: "Suspension Parts Explained: Comfort Meets Control",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70",
    excerpt:
      "From shock absorbers to struts and control arms — discover how suspension components improve handling and ride comfort.",
    date: "Mar 28, 2024",
    author: "Car Mechanics Hub",
  },
  {
    id: 3,
    title: "Engine Components You Should Know About",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9",
    excerpt:
      "Pistons, crankshafts, camshafts — understanding engine parts helps you maintain better performance and longevity.",
    date: "Feb 12, 2024",
    author: "Performance Garage",
  },
];

function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Automobile Parts Blog
          </h1>
          <p className="mt-6 text-lg text-zinc-300">
            Deep insights, expert guides, and modern automotive knowledge —
            designed for car enthusiasts and professionals.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-zinc-900 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02]"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-zinc-400">
                  {blog.date} • {blog.author}
                </p>

                <h2 className="mt-3 text-xl font-bold group-hover:text-red-500 transition">
                  {blog.title}
                </h2>

                <p className="mt-3 text-zinc-400 text-sm leading-relaxed">
                  {blog.excerpt}
                </p>

                <button className="mt-6 inline-block text-sm font-semibold text-red-500 hover:text-red-400 transition">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[] py-16 text-center">
        <h2 className="text-3xl font-bold">
          Want Expert Auto Parts Advice?
        </h2>
        <p className="mt-4 text-red-100">
          Stay updated with professional guides and modern automotive trends.
        </p>
        <button className="mt-6 px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-zinc-900 transition">
          Subscribe Now
        </button>
      </section>
    </div>
  );
}

export default Blog;