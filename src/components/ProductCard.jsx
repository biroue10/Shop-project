import { Link } from "react-router-dom";
export const ProductCard = ({ id, title, price, description, discountPercentage, rating, stock, brand, category, thumbnail }) => {
    return (
        <Link to={`/product/${id}`} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="bg-gray-200 text-center py-2">
                <h1 className="text-gray-900 font-bold text-xl">{title}</h1>
            </div>
            <img className="h-56 w-full object-cover mt-2" src={thumbnail} alt={title} />
            <div className="flex items-center justify-between px-2 py-2 bg-gray-900">
                <h1 className="text-gray-200 font-bold text-xl">${price}</h1>
                <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to Cart</button>
            </div>
        </Link>

  )
}
