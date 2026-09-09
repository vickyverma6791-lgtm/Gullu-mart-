import { MapPin, Menu, X } from "lucide-react";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import y from "../assets/y.png";
import { useCart } from "../Context/CartContext";
import { useAuth } from "../Context/AuthContext";

const Navbar = ({ location, getloaction }) => {
  const [openDropdown, setopenDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { cartItem } = useCart();
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const navLinkStyle = ({ isActive }) =>
    `relative px-2 pb-1 text-lg font-semibold
     transition-all duration-300
     ${isActive ? "text-primary" : "theme-text hover:text-primary"}`;

  const underlineStyle = (isActive) =>
    `absolute left-0 -bottom-1 h-[3px] bg-primary rounded-full
     transition-all duration-300
     ${isActive ? "w-full" : "w-0 group-hover:w-full"}`;

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">

        {/* LEFT */}
        <div className="flex items-center gap-8">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={y}
              alt="GulluMart Logo"
              className="h-10 md:h-12 object-contain
              drop-shadow-[0_0_20px_rgba(239,68,68,0.6)]
              group-hover:scale-110 transition-all duration-300"
            />
          </Link>

          {/* LOCATION */}
          <div className="relative hidden md:block">
            <div
              className="flex items-center gap-2 cursor-pointer
              theme-surface px-3 py-2 rounded-xl hover:bg-surface transition"
              onClick={() => setopenDropdown(!openDropdown)}
            >
              <MapPin className="text-primary" />
              <div className="text-sm font-semibold theme-text leading-tight">
                {location ? (
                  <>
                    <p>{location.city}</p>
                    <p className="text-xs text-muted">{location.country}</p>
                  </>
                ) : (
                  <p>Add Address</p>
                )}
              </div>
              <FaCaretDown className="text-gray-600" />
            </div>

            {/* DROPDOWN */}
            {openDropdown && (
              <div
                className="absolute top-14 left-0 w-[260px]
                theme-card border-theme p-5
                animate-fadeIn"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-lg">Change Location</h2>
                  <CgClose
                    className="cursor-pointer"
                    onClick={() => setopenDropdown(false)}
                  />
                </div>

                <button
                  onClick={getloaction}
                  className="w-full theme-button btn-primary py-2 rounded-lg"
                >
                  Detect my location
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT — Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 items-center">
            {navLinks.map(({ path, label }) => (
              <NavLink key={path} to={path} className={navLinkStyle}>
                {({ isActive }) => (
                  <li className="relative group">
                    {label}
                    <span className={underlineStyle(isActive)}></span>
                  </li>
                )}
              </NavLink>
            ))}
          </ul>

          {/* CART */}
          <Link to="/cart" className="relative group">
            <div className="p-3 theme-surface rounded-full hover:bg-surface transition">
              <IoCartOutline className="h-6 w-6 text-gray-800 group-hover:text-red-500" />
            </div>
            {cartItem.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white
              text-xs px-2 rounded-full animate-pulse">
                {cartItem.length}
              </span>
            )}
          </Link>

          {/* AUTH */}
          {user ? (
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 theme-surface rounded-full">
                <div className="w-9 h-9 flex items-center justify-center
                  rounded-full bg-gradient-to-br from-red-500 to-pink-500
                  text-white font-bold text-lg">
                  {user.name?.[0]?.toUpperCase() || "U"}
                </div>
                <span className="font-semibold theme-text">{user.name}</span>
              </div>
              <button
                onClick={logout}
                className="text-sm text-red-500 font-semibold hover:underline"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 px-3 py-2
              theme-surface rounded-full cursor-pointer
              hover:bg-surface transition group"
            >
              <div className="w-9 h-9 flex items-center justify-center
                rounded-full bg-gradient-to-br from-red-500 to-pink-500
                text-white font-bold">
                G
              </div>
              <span className="font-semibold theme-text group-hover:text-primary">
                Login
              </span>
            </Link>
          )}
        </nav>

        {/* RIGHT — Mobile icons */}
        <div className="flex md:hidden items-center gap-4">
          <Link to="/cart" className="relative">
            <IoCartOutline className="h-7 w-7 text-gray-800" />
            {cartItem.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white
              text-xs px-1.5 rounded-full">
                {cartItem.length}
              </span>
            )}
          </Link>
          <button onClick={() => setMobileMenuOpen(true)}>
            <Menu className="h-7 w-7 text-gray-800" />
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="flex-1 bg-black/40"
            onClick={() => setMobileMenuOpen(false)}
          />
          {/* Drawer */}
          <div className="w-72 bg-white h-full shadow-2xl flex flex-col p-6 gap-6 animate-slideIn">
            <div className="flex justify-between items-center">
              <img src={y} alt="logo" className="h-10 object-contain" />
              <button onClick={() => setMobileMenuOpen(false)}>
                <X className="h-6 w-6 text-gray-700" />
              </button>
            </div>

            <nav className="flex flex-col gap-4 mt-2">
              {navLinks.map(({ path, label }) => (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-semibold py-2 border-b border-gray-100
                    ${isActive ? "text-primary" : "text-gray-700"}`
                  }
                >
                  {label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto">
              {user ? (
                <div className="space-y-3">
                  <p className="font-semibold text-gray-800">Hi, {user.name} 👋</p>
                  <button
                    onClick={() => { logout(); setMobileMenuOpen(false); }}
                    className="w-full theme-button btn-primary py-2 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full theme-button btn-primary py-2 rounded-lg text-center"
                >
                  Login / Sign Up
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

