import { MapPin } from "lucide-react";
import React, { useState } from "react";
import { CgClose } from "react-icons/cg";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import y from "../assets/y.png";
import { useCart } from "../Context/CartContext";

const Navbar = ({ location, Getlocation }) => {
  const [openDropdown, setopenDropdown] = useState(false);
  const {cartItem} = useCart()
  const navLinkStyle = ({ isActive }) =>
    `relative px-2 pb-1 text-lg font-semibold
     transition-all duration-300
     ${isActive ? "text-primary" : "theme-text hover:text-primary"}`;

  const underlineStyle = (isActive) =>
    `absolute left-0 -bottom-1 h-[3px] bg-primary rounded-full
     transition-all duration-300
     ${isActive ? "w-full" : "w-0 group-hover:w-full"}`;

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
          <div className="relative">
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
                  onClick={Getlocation}
                  className="w-full theme-button btn-primary py-2 rounded-lg"
                >
                  Detect my location
                </button>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT */}
        <nav className="flex items-center gap-8">

          {/* NAV LINKS */}
          <ul className="flex gap-8 items-center">
            {["/", "/products", "/about", "/contact"].map((path, i) => {
              const names = ["Home", "Products", "About", "Contact"];
              return (
                <NavLink key={path} to={path} className={navLinkStyle}>
                  {({ isActive }) => (
                    <li className="relative group">
                      {names[i]}
                      <span className={underlineStyle(isActive)}></span>
                    </li>
                  )}
                </NavLink>
              );
            })}
          </ul>

          {/* CART */}
          <Link to="/cart" className="relative group">
            <div
              className="p-3 theme-surface rounded-full
              hover:bg-surface transition"
            >
              <IoCartOutline className="h-6 w-6 text-gray-800 group-hover:text-red-500" />
            </div>
            <span
              className="absolute -top-2 -right-2 bg-red-500 text-white
              text-xs px-2 rounded-full animate-pulse"
            >
              {cartItem.length}
            </span>
          </Link>

                  <Link
            to="/login"
            className="flex items-center gap-2 px-3 py-2
            theme-surface rounded-full cursor-pointer
            hover:bg-surface transition group"
          >
            {/* Avatar Circle */}
            <div
              className="w-9 h-9 flex items-center justify-center
              rounded-full bg-gradient-to-br from-red-500 to-pink-500
              text-white font-bold"
            >
              G
            </div>

            {/* Text */}
            <span className="font-semibold theme-text group-hover:text-primary">
              Login
            </span>
          </Link>



        </nav>
      </div>
    </header>
  );
};

export default Navbar;
