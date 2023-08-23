
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
        const existingCartItem = cartItems.find((item) => item.product.id === product.id);

        if (existingCartItem) {
            // If it exists, update its quantity
            const updatedCartItems = cartItems.map((item) => {
                if (item.product.id === product.id) {
                    return { ...item, quantity };
                }
                return item;
            });
            setCartItems(updatedCartItems);
        }
        else {
            // If it doesn't exist, add it to the cart
            setCartItems([...cartItems, { product, quantity }]);
        }
        // setCartItems(prevCartItems => [...prevCartItems, { product, quantity }]);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

    };

    const cartValue = {
        cartItems: cartItems,
        setCartItems: setCartItems,
        addToCart,
    };

    return (
        <CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
    );
}
