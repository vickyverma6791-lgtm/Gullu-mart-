import React from "react";
import { createContext, useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";


export const CartContext = createContext(null)

export const CartProvider =({children})=>{
    const [cartItem ,setcartItem] = useState([])
    const addToCart =(product) =>{
        setcartItem([...cartItem,product])
        toast.success("Product is added to cart")
        
        
    }
    console.log(cartItem)
    return <CartContext.Provider value ={{cartItem,addToCart, setcartItem}} >
        {children}
    </CartContext.Provider>


}

export const useCart =() =>useContext(CartContext)