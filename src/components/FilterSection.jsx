import React from "react";
import { Getdata } from "../Context/Datacontext";

const FilterSection = ({
  search,
  setsearch,
  Brand,
  setBrand,
  priceRan,
  setpriceRan,
  category,
  setcategory,
}) => {
  const { categoryOnlyData, BrandOnlyData } = Getdata();

  return (
    <div className=" p-6 w-[260px] h-max bg-white rounded-2xl shadow-lg border">
      
      {/* TITLE */}
      <h1 className="text-xl font-extrabold text-gray-900 mb-4">
        Filters
      </h1>

      {/* SEARCH */}
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-3 rounded-lg border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-red-500"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />

      {/* CATEGORY */}
      <h2 className="mt-6 font-bold text-lg text-gray-800">
        Category
      </h2>
      <div className="flex flex-col gap-3 mt-3">
        {categoryOnlyData?.map((item, index) => (
          <label
            key={index}
            className={`flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer transition
              ${
                category === item
                  ? "bg-red-50 text-red-600 font-semibold"
                  : "text-gray-700 hover:text-red-500"
              }
            `}
          >
            <input
              type="checkbox"
              checked={category === item}
              value={item}
              onChange={(e) => setcategory(e.target.value)}
              className="accent-red-500"
            />
            <span className="uppercase text-sm">
              {item}
            </span>
          </label>
        ))}
      </div>

      {/* BRAND */}
      <h2 className="mt-6 font-bold text-lg text-gray-800">
        Brand
      </h2>
      <select
        value={Brand}
        onChange={(e) => setBrand(e.target.value)}
        className="w-full mt-3 p-3 rounded-lg border border-gray-300
                   focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        {BrandOnlyData?.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>

      {/* PRICE */}
      <h2 className="mt-6 font-bold text-lg text-gray-800">
        Price Range
      </h2>
      <div className="mt-3 text-gray-700 text-sm">
        <p className="mb-1 font-medium">
          ${priceRan[0]} – ${priceRan[1]}
        </p>
        <input
          type="range"
          min="0"
          max="5000"
          value={priceRan[1]}
          onChange={(e) =>
            setpriceRan([priceRan[0], Number(e.target.value)])
          }
          className="w-full accent-red-500"
        />
      </div>

      {/* RESET */}
      <button
        onClick={() => {
          setsearch("");
          setcategory("All");
          setBrand("All");
          setpriceRan([0, 5000]);
        }}
        className="w-full mt-6 py-2 rounded-lg font-semibold
                   bg-red-500 text-white hover:bg-red-600 transition"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSection;
