import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
function NavBar() {
  return (
    <nav>
      <ul className="flex items-center space-x-4  text-lg text-stone-700">
        <li className="flex items-center">
          <NavLink to="/wishlist" className="flex items-center gap-2">
            {' '}
            <MdFavoriteBorder /> Wishlist
          </NavLink>
        </li>
        <li className="flex items-center space-x-1">
          <NavLink to="/cart" className="flex items-center gap-2">
            <AiOutlineShoppingCart />
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
