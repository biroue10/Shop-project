import "../../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { useCart } from "../context/CartContext";
import { Logo } from "./Logo";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const category = pathname.split("/")[2];
  const renderP = category === "all";
  const { cartItems } = useCart();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-screen  z-50 bg-white shadow dark:bg-gray-900 border-b-[1px] border-gray-600">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link to={'/'}>
            <Logo />
          </Link>

          <div className="flex space-x-4 md:hidden">
          <Link to={'/cart'} className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" >
             <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer" />
              {cartItems.length > 0 && (
                <span className="absolute -top-4 left-4 lg:-top-2 lg:left-2 w-4 h-4 text-center text-xs text-white bg-blue-500 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button onClick={toggleMenu}
              type="button" className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
              {!isOpen && <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              </svg>}

              {isOpen && <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>}
            </button>
            
          </div>
        </div>

        <div className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
          <ul className="flex flex-col md:flex-row md:mx-6">
         <li className="relative inline-block my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"> <Link to="/products/all">All</Link></li>
         <li className="relative inline-block my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"> <Link to="/products/mens-shirts">Men</Link></li>
         <li className="relative inline-block my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"> <Link to="/products/womens-dresses">Women</Link></li>
         <li className="relative inline-block my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"> <Link to="/products/laptops">Laptops</Link></li>
         <li className="relative inline-block my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"> <Link to="/products/groceries">Groceries</Link></li>
          </ul>

          <div className="flex justify-center md:block">
            <Link to={'/cart'} className="relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300" >
             <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer" />
              {cartItems.length > 0 && (
                <span className="absolute -top-4 left-4 lg:-top-2 lg:left-2 w-4 h-4 text-center text-xs text-white bg-blue-500 rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
    );
}

export default Navbar;