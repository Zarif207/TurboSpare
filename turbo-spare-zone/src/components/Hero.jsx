"use client";

import { FiSearch } from "react-icons/fi";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        lg:h-[80vh]
        w-full
        bg-cover
        bg-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto min-h-[90vh] lg:h-full px-4 sm:px-6 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 w-full items-center">

          {/* LEFT */}
          <div className="text-white max-w-xl text-center lg:text-left">
            <p className="uppercase tracking-widest text-xs sm:text-sm mb-3 text-yellow-400">
              Limited Offer
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Car Spare <br className="hidden sm:block" /> Parts Store
            </h1>

            <p className="text-base sm:text-lg text-gray-200 mb-7">
              Get up to{" "}
              <span className="text-yellow-400 font-semibold">50% off</span> on
              premium auto parts today only.
            </p>

            <button className="bg-yellow-400 text-black px-8 sm:px-10 py-3 font-semibold tracking-wide hover:bg-yellow-500 transition rounded-lg">
              SHOP NOW
            </button>
          </div>

          {/* RIGHT SEARCH */}
          <div className="relative bg-white shadow-xl w-full max-w-md mx-auto lg:mx-0 justify-self-end overflow-hidden border border-gray-100">

            {/* Header */}
            <div className="px-6 sm:px-8 pt-6 pb-4 border-b">
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                Find Parts for Your Vehicle
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Choose your vehicle details to get exact matches
              </p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-4">
              {[
                { step: 1, label: "Choose Make", options: ["Toyota", "Honda", "BMW"] },
                { step: 2, label: "Choose Model", options: ["Corolla", "Civic", "X5"] },
                { step: 3, label: "Choose Year", options: ["2024", "2023", "2022"] },
                { step: 4, label: "Choose Engine", options: ["Petrol", "Diesel", "Hybrid"] },
              ].map((item) => (
                <div key={item.step} className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-yellow-400 text-black text-xs font-bold flex items-center justify-center shadow-sm">
                    {item.step}
                  </span>

                  <select
                    defaultValue=""
                    className="
                      select select-bordered
                      w-full
                      pl-12 sm:pl-14
                      h-11 sm:h-12
                      rounded-xl
                      text-gray-700
                      focus:outline-none
                      focus:border-yellow-400
                    "
                  >
                    <option value="" disabled>
                      {item.label}
                    </option>
                    {item.options.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}

              {/* Button */}
              <button
                className="
                  mt-6
                  w-full
                  h-12
                  rounded-xl
                  bg-yellow-400
                  hover:bg-yellow-500
                  text-black
                  font-semibold
                  text-base sm:text-lg
                  flex
                  items-center
                  justify-center
                  gap-2
                  transition
                  shadow-md
                "
              >
                <FiSearch size={20} />
                Search Parts
              </button>

              <p className="text-center text-xs text-gray-400 pt-2">
                Fast results • Perfect fit • Trusted quality
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}