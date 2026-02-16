import React from "react";
import banner from "../assets/sadsaa.jpg";
import { Link } from "react-router-dom";

const MidBanner = () => {
  return (
    <div className="bg-gray-100 py-20">
      <div
        className="
          relative max-w-7xl mx-auto
          h-[520px] md:h-[600px]
          rounded-2xl overflow-hidden
          bg-cover bg-center bg-fixed
        "
        style={{ backgroundImage: `url(${banner})` }}
      >
        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/60" />

        {/* CONTENT */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center text-white px-6 max-w-3xl">

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Smart Electronics <br />
              <span className="text-red-400">
                Built for Your Lifestyle
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-200">
              Premium gadgets, trusted brands and deals you’ll love —
              all in one place.
            </p>

            <Link to="/products">
              <button
                className="
                  mt-8 px-8 py-3 rounded-lg text-lg font-semibold
                  bg-red-500 hover:bg-red-600
                  transition-all duration-300
                "
              >
                Shop Now
              </button>
            </Link>

          </div>
        </div>
      </div>
    </div>
  );
};

export default MidBanner;
