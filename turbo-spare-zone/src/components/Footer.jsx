"use client";

import React from "react";
import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

import footer1 from "../../public/images/footer/Mastercard-logo.png";
import footer2 from "../../public/images/footer/paypal-featured-image.webp";
import footer3 from "../../public/images/footer/VISA-logo.jpg";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#1f2224] text-gray-300">
      {/* ===== NEWSLETTER ===== */}
      <div className="bg-[#ffb700] py-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl font-bold text-white">
            Subscribe Our Newsletter
          </h3>

          <div className="flex w-full md:w-[520px]">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full px-4 py-3 outline-none text-gray-700"
            />
            <button className="bg-[#2b2f32] text-white px-6">Subscribe</button>
          </div>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* LOGO + ABOUT */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-4">
            Turbo<span className="text-yellow-400">Spare</span>
          </h2>
          <p className="text-sm leading-relaxed mb-6">
            If you are going to use of Lorem Ipsum need to be sure there isn't
            hidden of text.
          </p>

          <div className="flex gap-4 text-lg">
            <FaFacebookF className="hover:text-yellow-400 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-400 cursor-pointer" />
            <FaGooglePlusG className="hover:text-yellow-400 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-400 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-400 cursor-pointer" />
          </div>
        </div>

        {/* USEFUL LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-5">Useful Links</h4>
          <ul className="space-y-3 text-sm">
            <li>Site Map</li>
            <li>Search Terms</li>
            <li>Suppliers</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* CATEGORY */}
        <div>
          <h4 className="text-white font-semibold mb-5">Category</h4>
          <ul className="space-y-3 text-sm">
            <li>Brake Disc</li>
            <li>Deals Of The Week</li>
            <li>Featured Products</li>
            <li>Latest Products</li>
          </ul>
        </div>

        {/* MY ACCOUNT */}
        <div>
          <h4 className="text-white font-semibold mb-5">My Account</h4>
          <ul className="space-y-3 text-sm">
            <li>My Account</li>
            <li>Checkout</li>
            <li>Login</li>
            <li>Address</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h4 className="text-white font-semibold mb-5">Contact Info</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <FiMapPin className="mt-1" />
              123 Street, Old Trafford, NewYork, USA
            </li>
            <li className="flex gap-3">
              <FiMail className="mt-1" />
              info@turbo-spare.com
            </li>
            <li className="flex gap-3">
              <FiPhone className="mt-1" />
              +123 456 789 12
            </li>
          </ul>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <p>© 2026 All Rights Reserved by TurboSpare</p>

          <div className="flex gap-3 items-center">
            <Image src={footer1} alt="Visa" className="h-6 w-auto" />
            <Image src={footer2} alt="Mastercard" className="h-6 w-auto" />
            <Image src={footer3} alt="Paypal" className="h-6 w-auto" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
