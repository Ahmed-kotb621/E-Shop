import { NavLink } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';

import { MdFavoriteBorder } from 'react-icons/md';
import { useSelector } from 'react-redux';
function NavBar() {
  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  return (
    <nav>
      <ul className="text-md flex items-center  space-x-4 text-mainC">
        <li className="flex items-center text-lg">
          <NavLink to="/wishlist" className="flex items-center gap-2">
            <MdFavoriteBorder /> Wishlist
          </NavLink>
        </li>
        <li className="relative flex items-center space-x-1">
          <NavLink to="/cart" className="flex items-center gap-2 text-lg">
            <FiShoppingBag />
            Cart
            {cart.length ? (
              <span className="absolute left-[7px] top-[-10px]  flex   h-5 w-5 items-center justify-center rounded-full bg-yellowC text-sm">
                {cart.length}
              </span>
            ) : (
              ''
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
