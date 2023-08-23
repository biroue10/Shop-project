// import React, { createContext, useContext, useState } from 'react';

// const CartContext = createContext();

// export function useCart() {
//     return useContext(CartContext);
// }

// export function CartProvider({ children }) {
//     const [cartItems, setCartItems] = useState([]);

//     const addToCart = (product, quantity) => {
//         setCartItems(prevCartItems => [...prevCartItems, { product, quantity }]);
//     };

//     const cartValue = {
//         cartItems,
//         addToCart
//     };

//     return (
//         <CartContext.Provider value={cartValue}>
//             {children}
//         </CartContext.Provider>
//     );
// }

// CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([
        {
            "product": {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/1/1.jpg",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            },
            "quantity": 2
        },
        {
            "product": {
                "id": 143,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/1/1.jpg",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            },
            "quantity": 21
        }
    ]);

    const addToCart = (product, quantity) => {
        console.log('added')
        setCartItems(prevCartItems => [...prevCartItems, { product, quantity }]);
        console.log(cartItems)
    };

    // Other cart-related functions can be added here

    const cartValue = {
        cartItems: cartItems,
        addToCart,

    };

    return (
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    );
}
