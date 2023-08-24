import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [mainImage, setMainImage] = useState('');
    const [selectedThumbnail, setSelectedThumbnail] = useState('');
    const [quantity, setQuantity] = useState(1);
    const { data, isLoading, isError } = useQuery(['product'], async () => {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await response.json();
        setMainImage(data.images[0])
        return data;
    });

    const handleThumbnailClick = (imageSrc) => {
        setMainImage(imageSrc);
        setSelectedThumbnail(imageSrc);
    };
    const handleQuantityChange = (newValue) => {
        setQuantity(newValue);
    };
    const handleAddToCart = () => {
        addToCart(data, quantity);
    };
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return (
        <div className="flex flex-col space-x-12 mt-4">
            <div>
                <img
                    src={mainImage}
                    className="bg-gray-500 hidden rounded-md shadow w-full h-96 object-center bg-center "
                    alt=""
                />
                <div className="flex mt-4 space-x-8">
                    {data.images.map((imageSrc) => (
                        <img
                            key={imageSrc}
                            src={imageSrc}
                            className={`bg-gray-500 rounded-md shadow w-32 h-32 object-center bg-center
                        ${selectedThumbnail === imageSrc
                                    ? "outline outline-orange-600 opacity-50 "
                                    : ""
                                }
                        `}
                            alt=""
                            onClick={() => handleThumbnailClick(imageSrc)}
                        />
                    ))}
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-orange-500 font-semibold font-serif text-3xl">
                    {data.brand}
                </h3>
                <h2 className="text-4xl text-gray-800 leading-loose tracking-widest">
                    {data.title}
                </h2>
                <p className="mt-8 text-gray-500 max-w-fit text-sm">
                    {data.description}
                </p>

                <div className="mt-12 flex space-x-8">
                    <div>
                        <p className="text-2xl font-medium">
                            ${(data.price - data.discountPercentage).toFixed(2)}
                        </p>
                        <s className="text-gray-400">${data.price.toFixed(2)}</s>
                    </div>
                    <span className="bg-orange-100 text-orange-600 rounded-md font-bold px-2 py-1 h-fit">
                        %{data.discountPercentage}
                    </span>
                </div>
                <div className="flex mt-8 space-x-4">
                    <div className="flex items-center text-center">
                        <button className="w-12 h-12 rounded-l-md bg-gray-200 hover:bg-gray-300 font-bold text-lg text-orange-500" onClick={() => handleQuantityChange(quantity - 1)} > - </button>
                        <p className="w-12 h-12 bg-gray-200 flex items-center justify-center"> {quantity} </p>
                        <button className="w-12 h-12 rounded-r-md bg-gray-200 hover:bg-gray-300 font-bold text-lg text-orange-500" onClick={() => handleQuantityChange(quantity + 1)} > + </button>
                    </div>
                    <button onClick={handleAddToCart} className="flex items-center justify-center space-x-4 w-full max-w-xs bg-orange-500 hover:bg-orange-600 rounded-md shadow-md shadow-orange-300 text-white">
                        <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer" />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
