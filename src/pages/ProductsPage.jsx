import Navbar from "../components/Navbar";
import { AllProducts } from "../components/AllProducts";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ProductsPage = () => {
  const { pathname } = useLocation();
  const category = pathname.split("/")[2];
  
  return (
    <div>
      <AllProducts category={category} />
    </div>
  );
};
