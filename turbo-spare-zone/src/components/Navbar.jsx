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
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  const [showSticky, setShowSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
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
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* LOGO */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-yellow-400 flex items-center justify-center">
                <FiZap className="text-black text-base sm:text-xl" />
              </div>
              <div className="hidden sm:block">
                <h2 className="font-extrabold text-base sm:text-lg">TurboSpare</h2>
                <p className="text-xs text-gray-400">Auto Parts Store</p>
              </div>
            </Link>

            {/* SEARCH - Desktop */}
            <div className="flex-1 hidden lg:flex max-w-2xl">
              <input
                type="text"
                placeholder="Search our store"
                className="w-full px-4 py-2 text-black outline-none"
              />
              <button className="bg-yellow-400 px-6 font-semibold text-black hover:bg-yellow-500 transition whitespace-nowrap">
                Search
              </button>
            </div>

            {/* MOBILE SEARCH ICON */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="lg:hidden text-xl hover:text-yellow-400"
            >
              <FiSearch />
            </button>

            {/* AUTH + ICONS */}
            <div className="flex items-center gap-3 sm:gap-5">
              {/* AUTH - Desktop */}
              <div className="hidden md:flex items-center">
                {status === "loading" && null}

                {status === "authenticated" && (
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-300 hidden lg:inline">
                      Hi, <strong>{session.user?.name || "User"}</strong>
                    </span>
                    <button
                      onClick={() => signOut()}
                      className="px-3 lg:px-4 py-2 border border-yellow-400 text-yellow-400 rounded
                     hover:bg-yellow-400 hover:text-black transition text-xs lg:text-sm"
                    >
                      Logout
                    </button>
                  </div>
                )}

                {status === "unauthenticated" && (
                  <div className="flex items-center gap-2 lg:gap-3">
                    <Link
                      href="/login"
                      className="px-3 lg:px-4 py-2 border border-yellow-400 text-yellow-400 rounded
                     hover:bg-yellow-400 hover:text-black transition text-xs lg:text-sm"
                    >
                      Login
                    </Link>
                    <Link
                      href="/register"
                      className="px-3 lg:px-4 py-2 bg-yellow-400 text-black rounded
                     hover:bg-yellow-500 transition text-xs lg:text-sm font-semibold"
                    >
                      Register
                    </Link>
                  </div>
                )}
              </div>

              {/* WISHLIST */}
              <FiHeart className="text-lg sm:text-xl hover:text-yellow-400 cursor-pointer hidden sm:block" />

              {/* CART */}
              <div className="relative">
                <FiShoppingCart className="text-lg sm:text-xl hover:text-yellow-400 cursor-pointer" />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-bold">
                  0
                </span>
              </div>

              {/* MOBILE MENU TOGGLE */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-xl hover:text-yellow-400"
              >
                {mobileMenuOpen ? <FiX /> : <FiMenu />}
              </button>
            </div>
          </div>

          {/* MOBILE SEARCH BAR */}
          {mobileSearchOpen && (
            <div className="lg:hidden mt-3 flex">
              <input
                type="text"
                placeholder="Search our store"
                className="w-full px-4 py-2 text-black outline-none"
              />
              <button className="bg-yellow-400 px-4 sm:px-6 font-semibold text-black hover:bg-yellow-500 transition text-sm">
                Search
              </button>
            </div>
          )}

          {/* MOBILE MENU */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-2 border-t border-gray-700 pt-4">
              <nav className="flex flex-col gap-4 mb-4">
                <Link
                  href="/"
                  className="hover:text-yellow-400 transition font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link
                  href="/items"
                  className="hover:text-yellow-400 transition font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  SHOP
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-yellow-400 transition font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  BLOG
                </Link>
                <Link
                  href="/contact"
                  className="hover:text-yellow-400 transition font-semibold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </nav>

              {/* MOBILE AUTH */}
              {status === "authenticated" && (
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-700">
                  <span className="text-sm text-gray-300">
                    Hi, <strong>{session.user?.name || "User"}</strong>
                  </span>
                  <button
                    onClick={() => {
                      signOut();
                      setMobileMenuOpen(false);
                    }}
                    className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded
                   hover:bg-yellow-400 hover:text-black transition text-sm w-full"
                  >
                    Logout
                  </button>
                </div>
              )}

              {status === "unauthenticated" && (
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-700">
                  <Link
                    href="/login"
                    className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded
                   hover:bg-yellow-400 hover:text-black transition text-sm text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="px-4 py-2 bg-yellow-400 text-black rounded
                   hover:bg-yellow-500 transition text-sm font-semibold text-center"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Register
                  </Link>
                </div>
              )}

              {/* MOBILE PHONE */}
              <div className="flex items-center gap-2 font-semibold mt-4 pt-4 border-t border-gray-700">
                <FiPhone />
                (1234) 1234 012
              </div>
            </div>
          )}
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
        <div className="max-w-7xl mx-auto px-4 py-2 sm:py-3">
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* CATEGORIES */}
            <button className="bg-white px-3 sm:px-5 py-2 flex items-center gap-2 sm:gap-3 font-semibold rounded hover:bg-gray-100 transition text-xs sm:text-sm">
              <span className="hidden sm:inline">ALL CATEGORIES</span>
              <span className="sm:hidden">CATEGORIES</span>
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
              <Link href="/blog" className="hover:text-white transition">
                BLOG
              </Link>
              <Link href="/contact" className="hover:text-white transition">
                CONTACT
              </Link>
            </nav>

            {/* PHONE */}
            <div className="hidden md:flex items-center gap-2 font-semibold text-xs sm:text-sm">
              <FiPhone />
              <span className="hidden lg:inline">(1234) 1234 012</span>
              <span className="lg:hidden">Call Us</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}