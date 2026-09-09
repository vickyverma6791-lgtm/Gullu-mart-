import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import load from "../assets/Loading4.webm";
import Breadcrum from "../components/Breadcrum";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { toINR } from "../utils/price";


const Singlepages = () => {
  const { id } = useParams();
  const [singleproduct, setSingleproduct] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);
  const [qty, setQty] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const getsingleproduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setSingleproduct(res.data);
      setSelectedImg(res.data.images?.[0] || res.data.thumbnail);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getsingleproduct();
    setQty(1);
  }, [id]);

  if (!singleproduct) {
    return (
      <div className="flex flex-col items-center justify-center h-[400px]">
        <video muted autoPlay loop className="w-40">
          <source src={load} type="video/webm" />
        </video>
        <p className="text-gray-500 mt-4">Loading product...</p>
      </div>
    );
  }

  const originalPrice = Math.round(
    singleproduct.price +
      (singleproduct.price * singleproduct.discountPercentage) / 100
  );

  const images = singleproduct.images?.length
    ? singleproduct.images
    : [singleproduct.thumbnail];

  return (
    <div className="theme-page min-h-screen px-4 py-6 md:px-8">
      
      <Breadcrum title={singleproduct.title} />
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-2
                  text-gray-600 font-medium
                  hover:text-red-500 transition"
      >
        ← Back
      </button>


      <div className="max-w-6xl mx-auto theme-card shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* IMAGE SECTION */}
        <div className="flex flex-col gap-4">
          {/* Main Image */}
          <div className="theme-surface rounded-2xl p-6 flex items-center justify-center">
            <img
              src={selectedImg}
              alt={singleproduct.title}
              className="w-full max-h-[420px] object-contain
                         hover:scale-105 transition-transform duration-500"
            />
          </div>
          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-3 flex-wrap justify-center">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`thumb-${i}`}
                  onClick={() => setSelectedImg(img)}
                  className={`w-16 h-16 rounded-lg object-cover cursor-pointer border-2 transition
                    ${selectedImg === img
                      ? "border-primary shadow-md scale-105"
                      : "border-transparent hover:border-gray-300"
                    }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col gap-6">

          <div>
            <h1 className="text-2xl md:text-3xl font-bold theme-text">
              {singleproduct.title}
            </h1>

            <p className="mt-1 text-sm text-muted uppercase tracking-wide">
              {singleproduct.brand} / {singleproduct.category}
            </p>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-primary">
              {toINR(singleproduct.price)}
            </p>

            <p className="text-muted line-through">
              {toINR(originalPrice)}
            </p>

            <span className="bg-surface text-primary px-3 py-1 text-sm rounded-full font-semibold">
              {singleproduct.discountPercentage}% OFF
            </span>
          </div>

          {/* RATING */}
          <p className="text-muted-strong font-semibold">
            Rating: {singleproduct.rating} / 5
          </p>

          {/* DESCRIPTION */}
          <p className="text-muted leading-relaxed">
            {singleproduct.description}
          </p>

          {/* QUANTITY */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">
              Quantity
            </label>
            <div className="flex items-center theme-surface rounded-lg overflow-hidden border border-theme">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="px-4 py-2 text-xl font-bold hover:bg-surface transition"
              >−</button>
              <span className="px-5 font-semibold">{qty}</span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="px-4 py-2 text-xl font-bold hover:bg-surface transition"
              >+</button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 mt-4">
            <button
              className="theme-button btn-primary flex items-center gap-2 px-8 py-3 rounded-xl
                         font-semibold text-lg
                         transition-all duration-300"
              onClick={() => addToCart(singleproduct, qty)}           
            >
              <IoCartOutline className="w-6 h-6" />
              Add to Cart
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Singlepages;

