import React, { useState } from "react";
import { Getdata } from "../Context/Datacontext";
import load from "../assets/Loading4.webm";
import FilterSection from "../components/FilterSection";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { data } = Getdata();

  const [search, setsearch] = useState("");
  const [category, setcategory] = useState("All");
  const [Brand, setBrand] = useState("All");
  const [priceRan, setpriceRan] = useState([0, 5000]);


  const filtereddata = data?.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || item.category === category) &&
      (Brand === "All" || item.brand === Brand) &&
      item.price >= priceRan[0] &&
      item.price <= priceRan[1]
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-10">
        
        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Explore Products
          </h1>
          <p className="text-gray-500 mt-2">
            Find the best gadgets that match your needs
          </p>
        </div>

        {data?.length > 0 ? (
          <div className="flex gap-10">
            
            {/* FILTER */}
            <div className="w-[260px] shrink-0 sticky top-5 h-fit">
              <FilterSection
                search={search}
                setsearch={setsearch}
                Brand={Brand}
                setBrand={setBrand}
                priceRan={priceRan}
                setpriceRan={setpriceRan}
                category={category}
                setcategory={setcategory}
              />
            </div>

            {/* PRODUCTS */}
            <div className="flex-1">
              <p className="mb-4 text-gray-600 font-medium">
                Showing {filtereddata.length} products
              </p>

              {filtereddata.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                  {filtereddata.map((product, index) => (
                    <ProductCard key={index} product={product} />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px] text-center">
                  <p className="text-xl font-semibold text-gray-600">
                    No products found 😕
                  </p>
                  <p className="text-gray-500 mt-2">
                    Try adjusting your filters
                  </p>
                </div>
              )}
            </div>
          </div>
        ) : (
          /* LOADER */
          <div className="flex flex-col items-center justify-center h-[400px]">
            <video muted autoPlay loop className="w-40">
              <source src={load} type="video/webm" />
            </video>
            <p className="text-gray-500 mt-4">Loading products...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
