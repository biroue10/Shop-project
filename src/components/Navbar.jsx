import "../../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex w-full items-center gap-x-20 py-5 justify-between border-b-2	">
      <Link to={'/products'}>
        <div className="font-extrabold text-2xl uppercase">sneakers</div>
      </Link>
      <div className="flex gap-x-20 items-center">
        <div>
          <ul className="flex gap-x-5 items-center text-xl font-light cursor-pointer">
            <li className="relative inline-block">
              <Link to="/products/all">All</Link>
            </li>
            <li className="relative inline-block">
              <Link to="/products/mens-shirts">Men</Link>
            </li>
            <li className="relative inline-block">
              <Link to="/products/womens-dresses">Women</Link>
            </li>
            <li className="relative inline-block">
              <Link to="/products/laptops">Laptops</Link>
            </li>
            <li className="relative inline-block">
              <Link to="/products/groceries">Groceries</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-5 items-center w-6/12 sm:w-4/12 px-4">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer	" />
          </Link>
          <img
            src="https://randomuser.me/api/portraits/women/2.jpg"
            alt="userimage"
            className="cursor-pointer shadow rounded-full max-w-full h-auto align-middle border-none w-11"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
