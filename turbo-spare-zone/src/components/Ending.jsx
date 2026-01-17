import React from "react";
import Image from "next/image";
import wheelImg from "../../public/images/footer/single-banner_c881906e-6e8d-4abc-91fa-0da5a590b39c.webp"; // adjust path to your imported image

function Ending() {
  return (
    <section className="bg-[#f6fbff] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={wheelImg}
              alt="Auto Parts"
              className="max-w-md w-full object-contain"
              priority
            />
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <p className="text-yellow-500 text-lg mb-3">New season trends!</p>

            <h2 className="text-4xl font-bold text-gray-900 leading-tight mb-4">
              Best Auto Parts Collection
            </h2>

            <p className="text-gray-600 text-lg mb-8">Sale Get up to 50% Off</p>

            <button className="relative overflow-hidden px-8 py-3 border-2 border-yellow-500 text-yellow-500 font-semibold group">
              {/* Animated background */}
              <span className="absolute inset-0 bg-yellow-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>

              {/* Button text */}
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                Shop Now
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ending;
