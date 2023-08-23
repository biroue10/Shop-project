
import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([...JSON.parse(localStorage.getItem('cartItems')) || []]);
    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [])
    const addToCart = (product, quantity) => {

        setCartItems(prevCartItems => [...prevCartItems, { product, quantity }]);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

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
