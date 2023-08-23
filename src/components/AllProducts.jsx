import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTruckLoading } from "@fortawesome/free-solid-svg-icons";
export const AllProducts = ({ category }) => {
  const [displayCount, setDisplayCount] = useState(20);
  const apiUrl =
    category === "all"
      ? "https://dummyjson.com/products?limit=100"
      : `https://dummyjson.com/products/category/${category}`;

  const { data, isLoading, isError } = useQuery([category], async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.products;
  });
  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 20); // Increment the display count
  };
  if (isLoading) return <FontAwesomeIcon icon={faSpinner} className="mx-auto container flex items-center text-orange-500  mt-24 w-24 h-24	" />;
  if (isError) return <div>Error loading data</div>;

  const displayedProducts = data.slice(0, displayCount);

  return (
    <div className="flex flex-col items-center">

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
        {displayedProducts.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
      </div>
      {displayCount < data.length && (
        <button className="bg-orange-500 mt-8 text-white px-4 py-2 rounded-md shadow-md mx-auto"
          onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
};
