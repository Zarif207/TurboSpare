import items from "@/data/items.json";
import Image from "next/image";
import {
  FaEye,
  FaShieldAlt,
  FaUndo,
  FaMoneyBillWave,
  FaHeart,
  FaStar,
} from "react-icons/fa";

export default async function ItemDetails({ params }) {
  const { id } = await params;
  const item = items.find((item) => item.id === id);

  if (!item) {
    return <p className="p-8 text-center text-gray-500">Item not found</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT – IMAGE */}
        <div>
          <div className="border rounded-lg p-6 bg-gray-50">
            <div className="relative w-full h-[420px]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Thumbnails */}
          <div className="flex gap-4 mt-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-20 h-20 border rounded-md p-2 bg-white cursor-pointer hover:border-yellow-500"
              >
                <Image
                  src={item.image}
                  alt="thumbnail"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – DETAILS */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">{item.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={
                  i < item.rating
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}
          </div>

          {/* Price */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-bold text-yellow-500">
              Tk {item.price.toLocaleString()}.00
            </span>

            <span className="line-through text-gray-400">
              Tk {item.oldPrice.toLocaleString()}.00
            </span>

            <span className="text-green-600 font-medium">
              -{item.discount}%
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-5">
            This high-quality automotive component is manufactured to meet OEM
            standards, ensuring reliable performance and long service life.
            Built using durable materials, it improves vehicle efficiency,
            reduces wear, and delivers consistent results even under demanding
            driving conditions.
          </p>

          {/* Viewing now */}
          <p className="flex items-center gap-2 text-gray-600 mb-4">
            <FaEye />
            <span className="font-medium">22</span>
            people are viewing this product right now
          </p>

          {/* Features */}
          <ul className="space-y-2 text-gray-600 mb-6">
            <li className="flex items-center gap-2">
              <FaShieldAlt className="text-yellow-500" />
              1 Year Manufacturer Warranty
            </li>
            <li className="flex items-center gap-2">
              <FaUndo className="text-yellow-500" />
              30 Day Easy Return Policy
            </li>
            <li className="flex items-center gap-2">
              <FaMoneyBillWave className="text-yellow-500" />
              Cash on Delivery Available
            </li>
          </ul>

          {/* Colors */}
          <div className="mb-6">
            <p className="font-medium mb-2">Color :</p>
            <div className="flex gap-3">
              {item.colors.map((color) => (
                <span
                  key={color}
                  className="w-6 h-6 rounded-full border cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </div>

          {/* Quantity + Cart */}
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center border rounded-md">
              <button className="px-4 py-2">−</button>
              <span className="px-4">1</span>
              <button className="px-4 py-2">+</button>
            </div>

            <button className="px-8 py-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition">
              Add To Cart
            </button>

            <button className="text-xl text-gray-400 hover:text-red-500 transition">
              <FaHeart />
            </button>
          </div>

          {/* Buy now */}
          <button className="px-10 py-4 bg-yellow-500 text-white font-semibold rounded-md hover:bg-yellow-600 transition mb-6">
            Buy it now
          </button>

          {/* Meta */}
          <div className="text-sm text-gray-600 space-y-2 border-t pt-4">
            <p><strong>SKU:</strong> 3010</p>
            <p>
              <strong>Category:</strong> Brake Disc, Featured Products, Deals
            </p>
            <p>
              <strong>Tags:</strong> premium, durable, performance, genuine
            </p>
          </div>

          <p className="mt-4 font-medium">
            Guaranteed safe & secure checkout
          </p>
        </div>
      </div>
    </div>
  );
}