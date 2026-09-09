import React from "react";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cartItem, setcartItem] = useState([]);

  const addToCart = (product, qty = 1) => {
    setcartItem((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        toast.info("Quantity updated in cart!");
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + qty }
            : item
        );
      }
      toast.success("Product added to cart!");
      return [...prev, { ...product, qty }];
    });
  };

  const increaseQty = (id) => {
    setcartItem((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setcartItem((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, qty: item.qty - 1 } : item
        )
        .filter((item) => item.qty > 0)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItem, addToCart, setcartItem, increaseQty, decreaseQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);