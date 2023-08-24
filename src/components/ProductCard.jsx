import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import Rating from "./Rating";
export const ProductCard = ({ id, title, price, description, discountPercentage, rating, stock, brand, category, thumbnail }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({ id, title, price, description, discountPercentage, rating, stock, brand, category, thumbnail }, quantity);
  };
    return (
      <div className="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <Link className="w-1/3 h-auto" to={`/product/${id}`}>
          <img className="w-full h-full bg-cover object-center" src={thumbnail} alt={title} />
        </Link>
        <div className="w-2/3 p-4 md:p-4 flex flex-col justify-between h-full">
          <Link to={`/product/${id}`} className="text-xl font-bold text-gray-800 dark:text-white">{title}</Link>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>

          <Rating rating={rating} />

          <div className="flex justify-between flex-wrap mt-3 item-center">
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Brand: {brand}</p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">In stock: {stock}</p>
          </div>
          {discountPercentage &&
            <p className="w-fit mt-2 text-sm text-gray-600 dark:text-gray-400 "> Discount:  <span className="text-sm bg-orange-100 rounded shadow shadow-orange-100 text-orange-800 px-2 ml-2">%  {discountPercentage}</span></p>
          }
          <div className="mt-3 ">
            {discountPercentage ?
              <div className="flex justify-between flex-wrap mt-3 item-center gap-x-2 ">
                <s className="text-sm text-gray-700 dark:text-gray-200 mt-1">${price}</s>
                <h4 className="text-lg font-bold text-gray-700 dark:text-gray-200">${(price - (price * (discountPercentage / 100))).toFixed(2)}</h4>
              </div> : <h4 className="text-lg font-bold text-gray-700 dark:text-gray-200 md:text-xl">${price}</h4>
            }
            <button onClick={handleAddToCart} className=" mt-2 w-full px-4 py-2 text-xs font-bold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 focus:outline-none focus:bg-gray-700 dark:focus:bg-gray-600">Add to Cart</button>
          </div>
        </div>
      </div>
  )
}

    // <div>
    //   <Link to={`/product/${id}`} className="bg-white shadow-lg rounded-lg overflow-hidden">
    //     <div className="bg-gray-200 text-center py-2">
    //       <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
    //     </div>
    //       <img className="h-56 w-full object-cover mt-2" src={thumbnail} alt={title} />
    //       <div className="flex items-center justify-between px-2 py-2 bg-gray-900">
    //       <h1 className="text-gray-200 font-bold text-xl">${price}</h1>
    //     </div>
    //   </Link>
    //   <button onClick={handleAddToCart} className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to Cart</button>

    // </div>