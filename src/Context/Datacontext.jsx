import axios from "axios";
import { useState, createContext, useContext } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchingAllProduct = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      setData(res.data.products); 
      console.log(res.data)      // 👈 yahi main line hai
    } catch (error) {
      console.log(error);
    }
  };
  
  const getuniqueCategory = (data, property) => {
    if (!data) return [];

    let newVal = data.map((item) => item[property]);

    return ["All",...new Set(newVal)];
  };

  const categoryOnlyData = getuniqueCategory(data, "category");
  console.log(categoryOnlyData);

  const BrandOnlyData = getuniqueCategory(data,"brand")

  return (
    <DataContext.Provider value={{ data, fetchingAllProduct ,categoryOnlyData,BrandOnlyData}}>
      {children}
    </DataContext.Provider>
  );
};

export const Getdata = ()=> useContext(DataContext)
