import "../../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="flex items-center gap-x-20 px-5 py-5 justify-center border-b-2	">
    <a href="#"><div className="font-extrabold text-2xl">sneakers</div></a>
      <div className="flex gap-x-20 items-center">
        <div>
          <ul className="flex gap-x-5 items-center text-xl font-light cursor-pointer">
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-x-5 items-center w-6/12 sm:w-4/12 px-4">
          <FontAwesomeIcon icon={faCartShopping} className="cursor-pointer	"/>
          <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="userimage" className="cursor-pointer shadow rounded-full max-w-full h-auto align-middle border-none w-11"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
