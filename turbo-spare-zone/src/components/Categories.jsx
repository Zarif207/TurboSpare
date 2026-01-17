import React from "react";
import { FaCarBattery, FaOilCan, FaCarSide, FaTools } from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Engine Parts",
    icon: <FaTools />,
    items: "120+ Products",
  },
  {
    id: 2,
    title: "Car Batteries",
    icon: <FaCarBattery />,
    items: "80+ Products",
  },
  {
    id: 3,
    title: "Lubricants & Oil",
    icon: <FaOilCan />,
    items: "65+ Products",
  },
  {
    id: 4,
    title: "Body Parts",
    icon: <FaCarSide />,
    items: "150+ Products",
  },
];

function Categories() {
  return (
    <section className="relative overflow-hidden py-24">
      {/* Background accent */}
      <div className="absolute inset-0  -skew-y-3 origin-top" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-gray-900">
            Explore by <span className="text-yellow-500">Category</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            A curated selection of essential automobile parts, engineered for
            performance and reliability.
          </p>
        </div>

        {/* Zig-Zag Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className={`relative group ${
                index % 2 === 1 ? "md:mt-16" : ""
              }`}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-10 shadow-lg border border-gray-100 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl">
                {/* Floating icon */}
                <div className="absolute -top-8 left-10 w-16 h-16 rounded-2xl bg-yellow-500 flex items-center justify-center text-white text-3xl shadow-lg transition-transform duration-300 group-hover:rotate-6">
                  {cat.icon}
                </div>

                {/* Content */}
                <div className="mt-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {cat.title}
                  </h3>

                  <p className="text-gray-500 mb-6">{cat.items}</p>

                  {/* Accent line */}
                  <div className="h-1 w-12 bg-yellow-500 transition-all duration-300 group-hover:w-20" />

                  {/* CTA */}
                  <button className="mt-6 text-sm font-semibold text-yellow-600 hover:text-yellow-700 transition">
                    View Products →
                  </button>
                </div>
              </div>

              {/* Decorative number */}
              <span className="absolute -bottom-10 right-6 text-7xl font-extrabold text-gray-100 select-none">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;