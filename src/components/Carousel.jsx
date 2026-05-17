import React, { useEffect } from "react";
import { Getdata } from "../Context/Datacontext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Category from "./Category";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const { data, fetchingAllProduct } = Getdata();

  const navigate =useNavigate()

  useEffect(() => {
    fetchingAllProduct();
  }, []);

  /* ---------- CUSTOM ARROWS ---------- */
  const ArrowBase =
    "absolute top-1/2 -translate-y-1/2 z-20 p-4 rounded-full cursor-pointer \
     bg-white/10 backdrop-blur-md border border-white/20 \
     hover:scale-110 transition-all duration-300";

  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className={`${ArrowBase} left-6`}>
      <AiOutlineArrowLeft className="text-white text-2xl" />
    </div>
  );

  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className={`${ArrowBase} right-6`}>
      <AiOutlineArrowRight className="text-white text-2xl" />
    </div>
  );

  /* ---------- SLIDER SETTINGS ---------- */
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => (
          <div
            key={index}
            className="
              relative
              bg-gradient-to-br
              from-[#020024]
              via-[#090979]
              to-[#00d4ff]
            "
          >
            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* GLOW BLOBS */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-cyan-400/30 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-500/30 blur-3xl rounded-full"></div>

            {/* CONTENT */}
            <div
              className="
                relative max-w-7xl mx-auto
                h-[600px]
                flex flex-col md:flex-row
                items-center justify-between
                px-6 gap-12
              "
            >
              {/* TEXT */}
              <div className="space-y-6 max-w-xl text-center md:text-left animate-fadeIn">
                <h3 className="uppercase tracking-widest text-red-400 font-semibold">
                  Powering Your World
                </h3>

                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight line-clamp-3">
                  {item.title}
                </h1>

                <p className="text-gray-200 line-clamp-3">
                  {item.description}
                </p>

                <button
                  className="
                    inline-block px-8 py-3 rounded-full font-semibold
                    bg-gradient-to-r from-red-500 to-purple-500 text-white
                    hover:scale-105
                    hover:shadow-[0_10px_40px_rgba(239,68,68,0.5)]
                    transition-all duration-300
                    
                  "
                  onClick={()=>navigate(`/products/${item.id}`)}
                >
                  Shop Now
                </button>
              </div>

              {/* IMAGE */}
              <div className="relative">
                <img
                  src={item.images?.[0] || item.image}
                  alt={item.title}
                  className="
                    w-[280px] md:w-[360px]
                    rounded-full
                    shadow-[0_0_70px_rgba(0,212,255,0.7)]
                    hover:scale-110
                    transition duration-500
                  "
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* CATEGORY SECTION */}
      <Category />
    </div>
  );
};

export default Carousel;
