import { NavLink } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

import { MdFavoriteBorder } from 'react-icons/md';
function NavBar() {
  return (
    <nav>
      <ul className="text-mainC text-md flex  items-center space-x-4">
        <li className="flex items-center">
          <NavLink to="/wishlist" className="flex items-center gap-2">
            <MdFavoriteBorder /> Wishlist
          </NavLink>
        </li>
        <li className="flex items-center space-x-1">
          <NavLink to="/cart" className="flex items-center gap-2">
            <FiShoppingBag />
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
