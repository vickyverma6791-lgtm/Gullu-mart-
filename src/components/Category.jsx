import React from "react";
import { Getdata } from "../Context/Datacontext";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const { categoryOnlyData } = Getdata();
  const navigate = useNavigate()

  return (
    <div className="relative bg-gradient-to-br from-[#020617] via-[#1e1b4b] to-[#020617] py-12">
      
      {/* subtle glow */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-7xl mx-auto px-4">
        
        {/* heading */}
        <h2 className="text-center text-2xl md:text-3xl font-extrabold text-white mb-8">
          Shop by <span className="text-cyan-400">Category</span>
        </h2>

        {/* category pills */}
        <div className="flex flex-wrap gap-5 justify-center">
          {categoryOnlyData.map((item, index) => (
            <button
              key={index}
              className="
                uppercase px-7 py-2.5 rounded-full text-sm font-semibold
                text-slate-200
                bg-white/10 backdrop-blur-md border border-white/20
                hover:text-white
                hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500
                hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]
                hover:scale-110
                transition-all duration-300
              "
              onClick={()=>navigate(`/category/${item}`)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
