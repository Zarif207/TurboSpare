import React from "react";
import Image from "next/image";
import { FiHeart, FiShuffle, FiZoomIn } from "react-icons/fi";

/* ===== IMAGES ===== */
import engineImg from "../../public/images/exclusive/BrakeDiscforBMW_2cef1b4e-6e81-4734-aaf0-e65b8e803d47_1024x1024.webp";
import silentBlockImg from "../../public/images/exclusive/PistonRodClevis_348ff041-5e20-4e81-9d1d-30f68f5a51c7_1024x1024.webp";
import pistonImg from "../../public/images/exclusive/SilentBlockBushes_3eafd970-bea8-4f99-a329-83af64370165_1024x1024.webp";
import brakeDiscImg from "../../public/images/exclusive/SteamEngineModel_3b983396-a997-4db1-bbbd-73f4b0a1208a_1024x1024.webp";

import banner01 from "../../public/images/exclusive/banner-3-1-1_1024x1024.webp";
import banner02 from "../../public/images/exclusive/banner-3-2_1024x1024.webp";
import banner03 from "../../public/images/exclusive/banner-3-3_1024x1024.webp";

/* ===== PRODUCTS DATA ===== */

const products = [
  {
    id: 1,
    title: "Steam Engine Model E1",
    image: engineImg,
    price: 6900,
    oldPrice: 9400,
    discount: "-27%",
    badge: "SALE",
    badgeColor: "bg-green-600",
  },
  {
    id: 2,
    title: "Silent Block Bushes",
    image: silentBlockImg,
    price: 6300,
  },
  {
    id: 3,
    title: "Piston Rod Clevis",
    image: pistonImg,
    price: 8700,
    oldPrice: 10600,
    discount: "-18%",
    badge: "SALE",
    badgeColor: "bg-green-600",
  },
  {
    id: 4,
    title: "Zbrake Disc For BMW",
    image: brakeDiscImg,
    price: 2400,
    oldPrice: 3600,
    discount: "-33%",
    badge: "SOLDOUT",
    badgeColor: "bg-orange-500",
  },
];

function Exclusive() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* ===== HEADER ===== */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Exclusive Products</h2>

        <div className="flex gap-8 text-lg font-medium">
          <button className="text-yellow-500 border-b-2 border-yellow-500">
            Brake Disc
          </button>
          <button className="text-gray-700 hover:text-yellow-500 transition">
            Replica Wheels
          </button>
          <button className="text-gray-700 hover:text-yellow-500 transition">
            Steel Rim
          </button>
        </div>
      </div>

      <hr className="mb-10" />

      {/* ===== PRODUCTS GRID ===== */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded shadow-sm hover:shadow-xl transition duration-300"
          >
            {/* IMAGE */}
            <div className="relative bg-gray-100 h-[280px] flex items-center justify-center group overflow-hidden">
              {/* BADGES */}
              {product.badge && (
                <span
                  className={`absolute top-4 left-4 text-xs text-white px-3 py-1 z-10 ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
              )}

              {product.discount && (
                <span className="absolute top-12 left-4 bg-yellow-500 text-white text-xs px-3 py-1 z-10">
                  {product.discount}
                </span>
              )}

              {/* PRODUCT IMAGE */}
              <Image
                src={product.image}
                alt={product.title}
                width={260}
                height={260}
                quality={100}
                sizes="(max-width: 768px) 100vw, 260px"
                className={`object-contain transition-transform duration-500 group-hover:scale-110 ${
                  product.badge === "SOLDOUT" ? "opacity-60" : ""
                }`}
              />

              {/* HOVER ICONS (ALL CARDS) */}
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center gap-3">
                <button className="w-10 h-10 bg-white flex items-center justify-center hover:bg-yellow-400 transition">
                  <FiShuffle />
                </button>
                <button className="w-10 h-10 bg-white flex items-center justify-center hover:bg-yellow-400 transition">
                  <FiZoomIn />
                </button>
                <button className="w-10 h-10 bg-white flex items-center justify-center hover:bg-yellow-400 transition">
                  <FiHeart />
                </button>
              </div>
            </div>

            {/* CONTENT */}
            <div className="p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {product.title}
              </h3>

              <div className="flex items-center gap-2 text-lg font-semibold">
                <span className="text-yellow-500">
                  Tk {product.price.toLocaleString()}
                </span>

                {product.oldPrice && (
                  <>
                    <span className="text-gray-400 line-through text-base">
                      Tk {product.oldPrice.toLocaleString()}
                    </span>
                    <span className="text-green-600 text-sm">
                      {product.discount}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== PROMO BANNERS ===== */}
      {/* ===== PROMO BANNERS ===== */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* BANNER 01 */}
        <div className="relative h-[230px] overflow-hidden bg-[#FFC107] group">
          <Image
            src={banner01}
            alt="New Collection"
            fill
            quality={100}
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 flex items-center justify-end pr-8">
            <div className="text-black">
              <p className="text-xs font-medium mb-1">Super Sale</p>
              <h3 className="text-2xl font-bold leading-tight mb-3">
                New <br /> Collection
              </h3>
              <button className="bg-white px-5 py-2 text-sm rounded font-medium hover:bg-black hover:text-white transition">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* BANNER 02 */}
        <div className="relative h-[230px] overflow-hidden bg-[#DFF2FF] group">
          <Image
            src={banner02}
            alt="New Collection"
            fill
            quality={100}
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 flex items-center justify-end pr-8">
            <div className="text-black">
              <p className="text-xs font-medium mb-1">Super Sale</p>
              <h3 className="text-2xl font-bold leading-tight mb-3">
                New <br /> Collection
              </h3>
              <button className="bg-white px-5 py-2 text-sm rounded font-medium hover:bg-black hover:text-white transition">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>

        {/* BANNER 03 */}
        <div className="relative h-[230px] overflow-hidden bg-[#F85C0A] group">
          <Image
            src={banner03}
            alt="New Collection"
            fill
            quality={100}
            className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 flex items-center justify-end pr-8">
            <div className="text-black">
              <p className="text-xs font-medium mb-1">Super Sale</p>
              <h3 className="text-2xl font-bold leading-tight mb-3">
                New <br /> Collection
              </h3>
              <button className="bg-white px-5 py-2 text-sm rounded font-medium hover:bg-black hover:text-white transition">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exclusive;
