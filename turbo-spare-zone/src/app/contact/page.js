import React from "react";

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-900 via-black to-zinc-800 text-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493238792000-8113da705763')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
            Contact TurboSpare
          </h1>
          <p className="mt-6 text-lg text-zinc-300">
            Have questions about auto parts, orders, or support?  
            Our team is ready to help you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold">Get In Touch</h2>
          <p className="text-zinc-400 leading-relaxed">
            Whether you are looking for premium automobile parts, technical
            guidance, or order support — TurboSpare delivers expert help with
            precision and speed.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h3 className="font-semibold text-lg">📍 Address</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                121 Auto Drive, Motor City  
                Dhaka, Bangladesh
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h3 className="font-semibold text-lg">📞 Phone</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                +880 1234 567 890  
                +880 9876 543 210
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h3 className="font-semibold text-lg">📧 Email</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                support@turbospare.com  
                sales@turbospare.com
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition">
              <h3 className="font-semibold text-lg">⏰ Working Hours</h3>
              <p className="mt-2 text-zinc-400 text-sm">
                Mon – Sat: 9AM – 8PM  
                Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-zinc-900/80 backdrop-blur-xl p-10 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-6">
            <div>
              <label className="text-sm text-zinc-400">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-2 w-full px-4 py-3 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-red-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="mt-2 w-full px-4 py-3 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-red-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-zinc-400">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="mt-2 w-full px-4 py-3 rounded-xl bg-black border border-zinc-700 focus:outline-none focus:border-red-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-500 font-semibold hover:opacity-90 transition transform hover:scale-[1.02]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;