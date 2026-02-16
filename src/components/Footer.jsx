import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaChevronRight,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300">

      {/* GLOW */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 right-10 w-72 h-72 bg-red-500/20 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-24 left-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="space-y-4">
          <Link to="/">
            <h1 className="text-3xl font-extrabold bg-gradient-to-r from-red-500 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition">
              GulluMart
            </h1>
          </Link>
          <p className="text-sm text-gray-400 leading-relaxed">
            Powering your world with the best in electronics.
          </p>
          <p className="text-sm">📍 123 Electronics St, NY</p>
          <p className="text-sm">📧 support@gullu.com</p>
          <p className="text-sm">📞 +1 374 444 4444</p>
        </div>

        {/* CUSTOMER SERVICE */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Customer Service
          </h3>

          <ul className="space-y-3 text-sm">

            <li className="group flex items-center gap-2 cursor-pointer text-gray-400 hover:text-red-400 transition">
              <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition" />
              <span className="group-hover:translate-x-1 transition">Contact Us</span>
            </li>

            <li className="group flex items-center gap-2 cursor-pointer text-gray-400 hover:text-red-400 transition">
              <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition" />
              <span className="group-hover:translate-x-1 transition">Shipping & Returns</span>
            </li>

            <li className="group flex items-center gap-2 cursor-pointer text-gray-400 hover:text-red-400 transition">
              <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition" />
              <span className="group-hover:translate-x-1 transition">FAQs</span>
            </li>

            <li className="group flex items-center gap-2 cursor-pointer text-gray-400 hover:text-red-400 transition">
              <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition" />
              <span className="group-hover:translate-x-1 transition">Order Tracking</span>
            </li>

            <li className="group flex items-center gap-2 cursor-pointer text-gray-400 hover:text-red-400 transition">
              <FaChevronRight className="text-xs opacity-0 group-hover:opacity-100 transition" />
              <span className="group-hover:translate-x-1 transition">Size Guide</span>
            </li>

          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">
            <span className="p-3 bg-gray-800 rounded-full hover:bg-blue-500 hover:scale-110 transition cursor-pointer">
              <FaFacebookF />
            </span>
            <span className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 hover:scale-110 transition cursor-pointer">
              <FaInstagram />
            </span>
            <span className="p-3 bg-gray-800 rounded-full hover:bg-sky-500 hover:scale-110 transition cursor-pointer">
              <FaTwitter />
            </span>
            <span className="p-3 bg-gray-800 rounded-full hover:bg-red-600 hover:scale-110 transition cursor-pointer">
              <FaPinterest />
            </span>
          </div>
        </div>

        {/* NEWSLETTER */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">
            Stay in the Loop
          </h3>
          <p className="text-sm text-gray-400">
            Get offers & latest updates.
          </p>

          <form className="flex">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-3 rounded-l-xl bg-gray-800 text-sm outline-none focus:ring-2 focus:ring-red-500"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-red-500 to-purple-500 px-5 py-3 rounded-r-xl text-white hover:opacity-90 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-800 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}{" "}
        <span className="text-red-500 font-semibold">GulluMart</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
