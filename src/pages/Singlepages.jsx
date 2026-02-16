import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import load from "../assets/Loading4.webm";
import Breadcrum from "../components/Breadcrum";
import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";


const Singlepages = () => {
  const { id } = useParams();
  const [singleproduct, setSingleproduct] = useState(null);
  const navigate = useNavigate();
  const {addToCart} = useCart()


  const getsingleproduct = async () => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/products/${id}`
      );
      setSingleproduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getsingleproduct();
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

  return (
    <div className="bg-gray-50 min-h-screen px-4 py-6 md:px-8">
      
      <Breadcrum title={singleproduct.title} />
      <button
        onClick={() => navigate(-1)}
        className="mb-4 inline-flex items-center gap-2
                  text-gray-600 font-medium
                  hover:text-red-500 transition"
      >
        ← Back
      </button>


      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* IMAGE SECTION */}
        <div className="bg-gray-100 rounded-2xl p-6 flex items-center justify-center">
          <img
            src={singleproduct.thumbnail}
            alt={singleproduct.title}
            className="w-full max-h-[420px] object-contain
                       hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col gap-6">

          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              {singleproduct.title}
            </h1>

            <p className="mt-1 text-sm text-gray-500 uppercase tracking-wide">
              {singleproduct.brand} / {singleproduct.category}
            </p>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-4">
            <p className="text-3xl font-bold text-red-500">
              ${singleproduct.price}
            </p>

            <p className="text-gray-400 line-through">
              ${originalPrice}
            </p>

            <span className="bg-red-100 text-red-600 px-3 py-1 text-sm rounded-full font-semibold">
              {singleproduct.discountPercentage}% OFF
            </span>
          </div>

          {/* RATING */}
          <p className="text-yellow-500 font-semibold">
            ⭐ {singleproduct.rating} / 5
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-600 leading-relaxed">
            {singleproduct.description}
          </p>

          {/* QUANTITY */}
          <div className="flex items-center gap-4">
            <label className="text-sm font-medium text-gray-700">
              Quantity
            </label>
            <input
              type="number"
              min={1}
              defaultValue={1}
              className="w-20 border border-gray-300 rounded-lg px-3 py-1
                         focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 mt-4">
            <button
              className="flex items-center gap-2 px-8 py-3 rounded-xl
                         bg-red-500 text-white font-semibold text-lg
                         hover:bg-red-600 hover:shadow-lg
                         transition-all duration-300"
              onClick={()=>addToCart(singleproduct)}           
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
