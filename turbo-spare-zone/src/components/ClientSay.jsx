"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ===== IMAGES ===== */
import client1 from "../../public/images/client-image/african-american-car-mechanic-with-face-mask-examining-engine-breakdown-workshop_637285-8620.avif";
import client2 from "../../public/images/client-image/cleaning-hands-portrait-mechanic-workshop-600nw-2478228143.webp";
import client3 from "../../public/images/client-image/istockphoto-1349412663-612x612.jpg";
import client4 from "../../public/images/client-image/portrait-mechanic-woman-smartphone-auto-600nw-2478227989.webp";

/* ===== CLIENT DATA ===== */
const clients = [
  {
    id: 1,
    name: "Daisy Lana",
    role: "Mechanical Engineer",
    image: client1,
    text: "The build quality and performance of these parts exceeded my expectations. Installation was smooth and the precision was impressive.",
  },
  {
    id: 2,
    name: "John Carter",
    role: "Automotive Engineer",
    image: client2,
    text: "I’ve worked with many suppliers, but the reliability and durability here truly stand out. Highly recommended for professional use.",
  },
  {
    id: 3,
    name: "Sophia Lee",
    role: "Production Engineer",
    image: client3,
    text: "Excellent craftsmanship and attention to detail. These components helped us improve both safety and efficiency in our project.",
  },
  {
    id: 4,
    name: "Michael Brown",
    role: "Senior Mechanical Engineer",
    image: client4,
    text: "From ordering to installation, everything was seamless. The products deliver consistent performance even under heavy load.",
  },
];

export default function ClientSay() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? clients.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === clients.length - 1 ? 0 : i + 1));
  };

  const client = clients[index];

  return (
    <section className="max-w-5xl mx-auto px-4 py-24 text-center relative">
      {/* HEADER */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        What Our Clients Say
      </h2>

      <p className="text-gray-500 max-w-2xl mx-auto mb-16 leading-relaxed">
        Trusted by engineers and professionals who rely on precision, durability,
        and performance in every component.
      </p>

      {/* LEFT ARROW */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition"
      >
        <FiChevronLeft size={28} />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition"
      >
        <FiChevronRight size={28} />
      </button>

      {/* CONTENT */}
      <div className="transition-all duration-500 ease-out">
        <p className="text-lg text-gray-600 mb-12 leading-relaxed px-6">
          “{client.text}”
        </p>

        <div className="flex items-center justify-center gap-4">
          <Image
            src={client.image}
            alt={client.name}
            width={64}
            height={64}
            className="rounded-full object-cover shadow"
          />

          <div className="text-left">
            <h4 className="font-semibold text-gray-900 text-lg">
              {client.name}
            </h4>
            <p className="text-yellow-500 text-sm tracking-wide">
              {client.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}