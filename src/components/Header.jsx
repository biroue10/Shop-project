import "../../src/App.css";
function Header() {
  return (
    <div className="flex items-center gap-x-20 px-5 py-10">
      <div className="font-extrabold text-2xl">sneakers</div>
      <div>
        <ul className="flex gap-x-5 items-center text-[#e8e7eb] text-xl font-extrabold">
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
