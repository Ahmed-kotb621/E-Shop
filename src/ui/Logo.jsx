import { FaShopify } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';
import image from '../assets/images/shopping-bag.png';
function Logo() {
  return (
    <NavLink to="/">
      <div className="flex w-fit min-w-fit items-center space-x-2 text-2xl font-bold">
        <img src={image} className="w-[2.5rem]" />
        <h2 className="text-green font-logo">E-Shop</h2>
      </div>
    </NavLink>
  );
}

export default Logo;
