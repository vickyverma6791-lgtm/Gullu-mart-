import React from "react";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";


const ProductListView = ({ product }) => {
    const navigate = useNavigate()
    const {addToCart} = useCart()
    
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4">
      <div className="flex flex-col md:flex-row gap-6 items-center">

        {/* Image */}
        <div className="w-full md:w-40 h-40 bg-gray-100 rounded-lg flex items-center justify-center">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="object-contain h-full"
          />
        </div>

        {/* Details */}
        <div className="flex-1 space-y-2">

          <h2 className="text-lg font-semibold text-gray-800">
            {product.title}
          </h2>

          <p className="text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={16} fill="currentColor" />
            <span className="text-sm text-gray-700">
              {product.rating}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-xl font-bold text-green-600">
              ${product.price}
            </span>

            <span className="text-sm text-gray-400 line-through">
              ${Math.round(
                product.price +
                  (product.price * product.discountPercentage) / 100
              )}
            </span>

            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
              {product.discountPercentage}% OFF
            </span>
          </div>

        </div>

        {/* Action */}
        <div className="flex flex-col gap-2">
          <button className="bg-gray-900 text-white px-5 py-2 rounded-md hover:bg-black transition"
                onClick={()=>addToCart(product)}
          >
            Add to Cart
          </button>

          <button className="border border-gray-300 px-5 py-2 rounded-md hover:bg-gray-100"
                onClick={()=>navigate(`/products/${product.id}`)}
          >
            View Details
            
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
