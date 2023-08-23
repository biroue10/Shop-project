// // import React, { createContext, useContext, useState } from 'react';

// // const CartContext = createContext();

// // export function useCart() {
// //     return useContext(CartContext);
// // }

// // export function CartProvider({ children }) {
// //     const [cartItems, setCartItems] = useState([]);

// //     const addToCart = (product, quantity) => {
// //         setCartItems(prevCartItems => [...prevCartItems, { product, quantity }]);
// //     };

// //     const cartValue = {
// //         cartItems,
// //         addToCart
// //     };

// //     return (
// //         <CartContext.Provider value={cartValue}>
// //             {children}
// //         </CartContext.Provider>
// //     );
// // }

// // CartContext.js
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems((prevCartItems) => [...prevCartItems, { product, quantity }]);
  };

  // Other cart-related functions can be added here

  const cartValue = {
    cartItems: cartItems,
    addToCart,
  };

  return (
    <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
  );
}
