import { NavLink } from 'react-router-dom';
import { FiShoppingBag } from 'react-icons/fi';
import { FaRegUser } from 'react-icons/fa';
import { MdFavoriteBorder } from 'react-icons/md';
import { useSelector } from 'react-redux';
function NavBar() {
  const cart = useSelector((state) => state.cart.cart);
  const wish = useSelector((state) => state.wishList.wishList);
  return (
    <nav>
      <ul className="text-md relative flex items-center  space-x-4 text-mainC">
        <li className="flex items-center text-lg">
          <NavLink to="/wishlist" className="flex items-center gap-2 text-lg">
            <MdFavoriteBorder /> Wishlist
            {wish.length ? (
              <span className="absolute left-[7px] top-[-5px]  flex   h-4 w-4 items-center justify-center rounded-full bg-yellowC text-sm">
                {wish.length}
              </span>
            ) : (
              ''
            )}
          </NavLink>
        </li>
        <li className="relative flex items-center space-x-1">
          <NavLink to="/cart" className="flex items-center gap-2 text-lg">
            <FiShoppingBag />
            Cart
            {cart.length ? (
              <span className="absolute left-[7px] top-[-5px]  flex   h-4 w-4  items-center justify-center rounded-full bg-yellowC text-sm">
                {cart.length}
              </span>
            ) : (
              ''
            )}
          </NavLink>
        </li>
        <li className="relative flex items-center space-x-1">
          <NavLink to="/login" className="flex items-center gap-2 text-lg">
            <FaRegUser />
            Account
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
