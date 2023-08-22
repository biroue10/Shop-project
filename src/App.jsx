import { LandingPage } from "./pages/LandingPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetails } from "./pages/ProductDetails";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<ShoppingCartPage />} />
      </Routes>
    </Router>
  );
}

export default App;
