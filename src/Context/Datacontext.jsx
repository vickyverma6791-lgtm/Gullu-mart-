import axios from "axios";
import { useState, createContext, useContext, useEffect } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchingAllProduct();
  }, []);

  const fetchingAllProduct = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
      const res = await axios.get("https://dummyjson.com/products?limit=100");
      setData(res.data.products);
    } catch (error) {
      setIsError(true);
      console.error("Failed to fetch products:", error);
    } finally {
      setIsLoading(false);
    }
  };
  
  const getuniqueCategory = (data, property) => {
    if (!data) return [];

    let newVal = data.map((item) => item[property]);

    return ["All",...new Set(newVal)];
  };

  const categoryOnlyData = getuniqueCategory(data, "category");

  const BrandOnlyData = getuniqueCategory(data,"brand")

  return (
    <DataContext.Provider value={{ data, fetchingAllProduct, categoryOnlyData, BrandOnlyData, isLoading, isError }}>
      {children}
    </DataContext.Provider>
  );
};

export const Getdata = ()=> useContext(DataContext)
