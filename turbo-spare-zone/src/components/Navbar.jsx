"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiShoppingCart,
  FiMenu,
  FiPhone,
  FiZap,
} from "react-icons/fi";

export default function Navbar() {
  const [showSticky, setShowSticky] = useState(false);
  const { data: session, status } = useSession();

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full">
      {/* ================= TOP BAR ================= */}
      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center">
              <FiZap className="text-black text-xl" />
            </div>
            <div>
              <h2 className="font-extrabold text-lg">TurboSpare</h2>
              <p className="text-xs text-gray-400">Auto Parts Store</p>
            </div>
          </Link>

          {/* SEARCH */}
          <div className="flex-1 hidden md:flex">
            <input
              type="text"
              placeholder="Search our store"
              className="w-full px-4 py-2 text-black outline-none"
            />
            <button className="bg-yellow-400 px-6 font-semibold text-black hover:bg-yellow-500 transition">
              Search
            </button>
          </div>

          {/* AUTH + ICONS */}
          <div className="flex items-center gap-5 ml-auto">
          
            {/* AUTH */}
            {status === "loading" && null}

            {status === "authenticated" && (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300">
                  Hi, <strong>{session.user?.name || "User"}</strong>
                </span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded
                 hover:bg-yellow-400 hover:text-black transition text-sm"
                >
                  Logout
                </button>
              </div>
            )}

            {status === "unauthenticated" && (
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded
                 hover:bg-yellow-400 hover:text-black transition text-sm"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-4 py-2 bg-yellow-400 text-black rounded
                 hover:bg-yellow-500 transition text-sm font-semibold"
                >
                  Register
                </Link>
              </div>
            )}

            <FiHeart className="text-xl hover:text-yellow-400 cursor-pointer" />

            <div className="relative">
              <FiShoppingCart className="text-xl hover:text-yellow-400 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= YELLOW STICKY BAR ================= */}
      <div
        className={`
          fixed top-0 left-0 w-full z-50
          bg-yellow-400 shadow-md
          transition-transform duration-300
          ${showSticky ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
          {/* CATEGORIES */}
          <button className="bg-white px-5 py-2 flex items-center gap-3 font-semibold rounded hover:bg-gray-100 transition">
            ALL CATEGORIES
            <FiMenu />
          </button>

          {/* MENU */}
          <nav className="hidden lg:flex gap-8 font-semibold text-sm">
            <Link href="/" className="hover:text-white transition">
              HOME
            </Link>
            <Link href="/items" className="hover:text-white transition">
              SHOP
            </Link>
            <Link href="/pages" className="hover:text-white transition">
              PAGES
            </Link>
            <Link href="/blog" className="hover:text-white transition">
              BLOG
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              CONTACT
            </Link>
          </nav>

          {/* PHONE */}
          <div className="hidden md:flex items-center gap-2 font-semibold">
            <FiPhone />
            (1234) 1234 012
          </div>
        </div>
      </div>
    </header>
  );
}
