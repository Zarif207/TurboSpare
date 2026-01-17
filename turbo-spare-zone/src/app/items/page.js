import items from "@/data/items.json";
import Image from "next/image";
import Link from "next/link";
import { FiEye, FiHeart, FiShuffle } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

export default function ItemsPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* HEADER */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-semibold mb-3">Best Sellers</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Your one-stop shop for everything from exhaust to suspensions.
          you’re sure to find what you need
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map(item => (
          <div
            key={item.id}
            className="group border rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl"
          >
            {/* IMAGE */}
            <div className="relative h-72 bg-gray-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* DISCOUNT */}
              <span className="absolute top-4 right-4 bg-white px-3 py-1 text-sm font-semibold text-green-600 rounded">
                -{item.discount}%
              </span>

              {/* HOVER ICONS */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <IconBtn icon={<FiShuffle />} />
                <IconBtn icon={<FiEye />} />
                <IconBtn icon={<FiHeart />} />
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-medium mb-2">{item.name}</h3>

              {/* PRICE */}
              <div className="flex items-center gap-2 mb-2">
                <span className="text-yellow-500 text-lg font-semibold">
                  Tk {item.price.toLocaleString()}
                </span>
                <span className="text-gray-400 line-through">
                  Tk {item.oldPrice.toLocaleString()}
                </span>
              </div>

              {/* RATING */}
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    className={`text-sm ${
                      i < item.rating
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* COLORS */}
              <div className="flex gap-2 mb-5">
                {item.colors.map((c, i) => (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>

              {/* DETAILS BUTTON */}
              <Link href={`/items/${item.id}`}>
                <button className="relative overflow-hidden w-full py-3 border-2 border-[#ffb700] text-yellow-500 font-semibold group/button">
                  <span className="absolute inset-0 bg-[#ffb700] translate-x-[-100%] group-hover/button:translate-x-0 transition-transform duration-300 ease-out"></span>
                  <span className="relative z-10 group-hover/button:text-white transition-colors duration-300">
                    View Details
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ICON BUTTON */
function IconBtn({ icon }) {
  return (
    <button className="w-11 h-11 bg-white rounded-full flex items-center justify-center shadow hover:bg-yellow-500 hover:text-white transition">
      {icon}
    </button>
  );
}