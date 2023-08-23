import { LandingPage } from "./pages/LandingPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetails } from "./pages/ProductDetails";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { CartProvider } from './context/CartContext';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { Fragment } from "react";
import { CartProvider } from "./context/CartContext";
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <Navbar />
        <main className="min-h-screen ">{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
