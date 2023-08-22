import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { ProductCard } from './ProductCard';
export const AllProducts = () => {
    const { data, isLoading, isError } = useQuery(['products'], async () => {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data.products;
    });

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error loading data</div>;

    return (
        <div>
            <h1>products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-8">
                {data.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
        </div >
    )
}
