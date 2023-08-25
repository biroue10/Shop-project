import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Slider } from "../components/Slider";
import { Loader } from "../components/Loader";
import { Error } from "../components/Error";
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
        if (newValue < 1) return;

        setQuantity(newValue);
    };
    const handleAddToCart = () => {
        addToCart(data, quantity);
    };
    if (isLoading) return <Loader />
    if (isError) return <Error />

    return (
        <div className="flex flex-col lg:flex-row  lg:space-x-12 mt-4 px-4 ">
            <div>
                <img src={mainImage} className="bg-gray-500 hidden lg:block rounded-md shadow w-full h-96 object-center bg-center " alt={data.title} />
                <Slider images={data.images} />
                <div className="hidden lg:flex mt-12 rounded outline outline-1 outline-offset-4 px-4 shadow outline-gray-300  space-x-8">
                    {data.images.map((imageSrc) => (
                        <img key={imageSrc} src={imageSrc} className={`bg-gray-500 rounded-md shadow w-32 h-32 object-center bg-center ${selectedThumbnail === imageSrc ? "outline outline-gray-600 opacity-50 " : ""}     `} alt="" onMouseOver={() => handleThumbnailClick(imageSrc)} />))}
                </div>
            </div>
            <div className="flex-1 mt-12 lg:mt-0 w-full lg:w-auto ">
                <div className="flex justify-between">
                    <div>
                        <h3 className="text-gray-800 font-semibold  text-3xl"> {data.brand} </h3>
                        <h2 className="text-4xl text-gray-600 "> {data.title} </h2>
                        <p className="mt-8 text-gray-500 max-w-fit text-sm"> {data.description} </p>
                    </div>
                    <Link to={'/products/all'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="rounded-full outline outline-2 bg-blue-50   text-blue-600 w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </Link>
                </div>

                <div className="mt-12 flex space-x-8">
                    <div>
                        <p className="text-2xl font-medium"> ${(data.price - data.discountPercentage).toFixed(2)} </p>
                        <s className="text-gray-400">${data.price.toFixed(2)}</s>
                    </div>
                    <span className="bg-blue-100 text-blue-700 rounded-md font-bold px-2 py-1 h-fit"> %{data.discountPercentage} </span>
                </div>
                <div className="flex mt-8 space-x-4 w-full justify-between">
                    <div className="flex items-center text-center">
                        <button className="w-12 h-12 rounded-l-md bg-gray-200 hover:bg-gray-300 font-bold text-lg text-gray-500" onClick={() => handleQuantityChange(quantity - 1)} > - </button>
                        <p className="w-12 h-12 bg-gray-200 flex items-center justify-center"> {quantity} </p>
                        <button className="w-12 h-12 rounded-r-md bg-gray-200 hover:bg-gray-300 font-bold text-lg text-gray-500" onClick={() => handleQuantityChange(quantity + 1)} > + </button>
                    </div>
                    <button onClick={handleAddToCart} className="flex items-center justify-center space-x-4 w-full max-w-xs bg-gray-800 hover:bg-gray-600 rounded-md shadow-md shadow-gray-300 text-white">
                        <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer" />
                        <span>Add to cart</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
