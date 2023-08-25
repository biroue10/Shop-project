import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "./ProductCard";
import { useState } from "react";
import { Loader } from "./Loader";
import { Error } from "./Error";
export const AllProducts = ({ category, query }) => {
  const [displayCount, setDisplayCount] = useState(15);
  let apiUrl = "https://dummyjson.com/products";
  if (category === "all" && query === '') {
    apiUrl += "?limit=100"
  }
  else if (query !== '') {
    apiUrl += `/search?q=${query}`;
  }
  else {
    apiUrl += `/category/${category}`;
  }
  const { data, isLoading, isError } = useQuery([category, query], async () => {
    console.log("fetched " + apiUrl)
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.products;
  });
  const handleLoadMore = () => {
    setDisplayCount(prevCount => prevCount + 15);
  };
  if (isLoading) return <Loader />
  if (isError) return <Error />;

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
