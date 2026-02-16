import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    const {addToCart} = useCart()

    
  return (
    <div
      className="group relative bg-white border border-gray-100
      rounded-2xl overflow-hidden
      hover:shadow-2xl hover:-translate-y-1
      transition-all duration-300" 
    >
      {/* IMAGE */}
      <div className="relative bg-gray-100 aspect-square overflow-hidden" onClick={()=>navigate(`/products/${product.id}`)}>
        { /* agar image array hai to image, wrna thumbnail wrna img */ }
        <img
              
          src={product.images?.[0] || product.thumbnail || product.image}
          alt={product.title}
          className="w-full h-full object-contain
          group-hover:scale-110 transition-transform duration-500"
        />

        {/* HOVER OVERLAY */}
        <div
          className="absolute inset-0 bg-black/30 opacity-0
          group-hover:opacity-100 transition-opacity duration-300
          flex items-center justify-center"
        >
          <button
            className="bg-red-500 text-white px-4 py-2 rounded-full
            flex items-center gap-2 font-semibold
            hover:bg-red-600 transition"
            onClick={()=>addToCart(product)}
          >
            <IoCartOutline className="w-5 h-5 "  />
            Add to Cart
          </button>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 space-y-2">
        <h1 className="line-clamp-2 font-semibold text-gray-800">
          {product.title}
        </h1>

        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-red-500">
            ${product.price}
          </p>

          {/* Optional rating */}
           { /* agar product rating hai to show */ }
          {product.rating && (
            <span className="text-sm text-gray-500">
              ⭐ {product.rating}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
