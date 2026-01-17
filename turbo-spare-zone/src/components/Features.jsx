"use client";

import { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ================= CATEGORY IMAGES ================= */
import brakeDisc from "../../public/images/categories/Brake_Disc_831da691-b828-430d-bde4-df5e58299ec0.avif";
import steelRim from "../../public/images/categories/Steel_Rim.webp";
import enginePiston from "../../public/images/categories/Engine_Piston.webp";
import replicaWheels from "../../public/images/categories/DOE_Replica_Wheels.avif";
import silentBlock from "../../public/images/categories/Silent_Block_Bushes.webp";
import steamEngine from "../../public/images/categories/Steam_Engine_Model.webp";
import steeringWheel from "../../public/images/categories/Steering_Wheel_Cover.avif";
import pistonRod from "../../public/images/categories/Piston_Rod_Clevis.webp";

/* ================= BANNERS ================= */
import banner1 from "../../public/images/banners/banner-1-h4_1024x1024.jpg";
import banner2 from "../../public/images/banners/banner-22-h4_1024x1024.jpg";

/* ================= DATA ================= */
const categories = [
  { name: "Steel Rim", img: steelRim },
  { name: "Engine Model", img: steamEngine },
  { name: "Silent Block", img: silentBlock },
  { name: "Piston Rod", img: pistonRod },
  { name: "Engine Piston", img: enginePiston },
  { name: "Replica Wheels", img: replicaWheels },
  { name: "Steering Cover", img: steeringWheel },
  { name: "Brake Disc", img: brakeDisc },
];

const ITEM_WIDTH = 170;
const VISIBLE_COUNT = 5;

// duplicate for infinite loop
const loopedCategories = [...categories, ...categories];

export default function Features() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  return (
    <section className="max-w-7xl mx-auto px-4 py-20">

      {/* ================= CATEGORY SLIDER ================= */}
      <div className="relative mb-24 flex items-center justify-center">

        {/* LEFT ARROW */}
        <button
          onClick={prev}
          className="
            absolute left-0 z-20
            w-12 h-12
            bg-white
            hover:bg-yellow-400
            rounded-full
            shadow-lg
            flex items-center justify-center
            transition
          "
        >
          <FiChevronLeft size={22} />
        </button>

        {/* VIEWPORT */}
        <div className="overflow-hidden w-full max-w-5xl">
          <div
            className="flex"
            style={{
              transform: `translateX(-${(index % categories.length) * ITEM_WIDTH}px)`,
              transition: "transform 600ms cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {loopedCategories.map((item, i) => (
              <div
                key={`${item.name}-${i}`}
                className="
                  w-[170px]
                  flex-shrink-0
                  flex flex-col
                  items-center
                  gap-4
                  cursor-pointer
                  group
                "
              >
                <div className="
                  w-28 h-28
                  bg-gray-100
                  rounded-full
                  flex items-center justify-center
                  transition
                  group-hover:scale-110
                ">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={105}
                    height={105}
                    className="object-contain"
                  />
                </div>

                <p className="text-sm font-semibold text-gray-800 text-center">
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT ARROW */}
        <button
          onClick={next}
          className="
            absolute right-0 z-20
            w-12 h-12
            bg-white
            hover:bg-yellow-400
            rounded-full
            shadow-lg
            flex items-center justify-center
            transition
          "
        >
          <FiChevronRight size={22} />
        </button>
      </div>

      {/* ================= PROMO BANNERS ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT BANNER */}
        <div className="group relative h-[320px] overflow-hidden">
          <Image
            src={banner1}
            alt="Wheels Collection"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-y-0 right-0 w-[55%] bg-[#111827]/90 flex items-center">
            <div className="px-10 text-white">
              <p className="uppercase text-sm mb-2 opacity-80">
                Super Sale
              </p>
              <h3 className="text-3xl font-bold mb-6">
                Wheels Collection
              </h3>
              <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT BANNER */}
        <div className="group relative h-[320px] overflow-hidden">
          <Image
            src={banner2}
            alt="New Suspension"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 flex items-center justify-end">
            <div className="mr-10 text-white max-w-xs">
              <h3 className="text-3xl font-bold mb-2">
                New Suspension
              </h3>
              <p className="text-lg mb-6">
                Sale 40% Off
              </p>
              <button className="bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
                Shop Now
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}