import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "./ProductCard";
export const AllProducts = ({ category }) => {
  const apiUrl =
    category === "all"
      ? "https://dummyjson.com/products"
      : `https://dummyjson.com/products/category/${category}`;

  const { data, isLoading, isError } = useQuery([category], async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.products;
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8 mt-4">
      {data.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};
