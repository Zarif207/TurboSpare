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
    <section className="max-w-7xl mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-gray-900">
          Shop by <span className="text-yellow-500">Category</span>
        </h2>
        <p className="text-gray-500 mt-3">
          Find the right parts faster from our popular categories
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="group border rounded-lg p-8 text-center cursor-pointer transition-all duration-300 hover:shadow-xl hover:border-yellow-500"
          >
            {/* Icon */}
            <div className="text-4xl text-yellow-500 mb-5 flex justify-center transition-transform duration-300 group-hover:scale-110">
              {cat.icon}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {cat.title}
            </h3>

            {/* Sub text */}
            <p className="text-sm text-gray-500">{cat.items}</p>

            {/* Hover underline */}
            <div className="h-1 w-0 bg-yellow-500 mx-auto mt-4 transition-all duration-300 group-hover:w-12"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;