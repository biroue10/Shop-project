import "../../src/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
function Header() {
  return (
    <div className="flex items-center gap-x-20 px-5 py-10 justify-center">
      <div className="font-extrabold text-2xl">sneakers</div>
      <div className="flex gap-x-20 items-center">
        <div>
          <ul className="flex gap-x-5 items-center text-[#e8e7eb] text-xl font-extrabold">
            <li>Collection</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex gap-x-5 items-center">
          <FontAwesomeIcon icon={faCartShopping} />
          <img src="" alt="userimage" />
        </div>
      </div>
    </div>
  );
}

export default Header;
