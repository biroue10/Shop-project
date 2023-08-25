import Navbar from "../components/Navbar";
import { AllProducts } from "../components/AllProducts";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SearchInput from "../components/SearchInput";

export const ProductsPage = () => {
  const { pathname } = useLocation();
  const category = pathname.split("/")[2];
  const [query, setQuery] = useState("");

  return (
    <div className="flex flex-col items-center px-4 lg:px-0">
      <SearchInput onQueryChange={setQuery} />
      <AllProducts category={category} query={query} />
    </div>
  );
};
