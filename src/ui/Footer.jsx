import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';
import Logo from './Logo';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <div className="grid grid-cols-3 gap-4 bg-slate-200 p-8 sm:grid-cols-5 lg:px-20 ">
      <div className="m-3 min-w-5">
        <Logo />
      </div>
      <div className="m-3 ml-5 flex min-w-5 flex-col">
        <h3 className="text-md mb-1 font-bold">Shop</h3>
        <Link to="/ " className="text-sm text-greyC hover:underline">
          Home
        </Link>
        <Link to="/men " className="text-sm text-greyC hover:underline">
          Men
        </Link>
        <Link to="/women " className="text-sm text-greyC hover:underline">
          Women
        </Link>
      </div>
      <div className="min-w-50 m-3 flex flex-col">
        <h3 className="text-md mb-1 font-bold">Company</h3>
        <Link to="/about " className="text-sm text-greyC hover:underline">
          About Us
        </Link>
        <Link to="/" className="text-sm text-greyC hover:underline">
          Stores
        </Link>
        <Link to="/" className="text-sm text-greyC hover:underline">
          Contacts
        </Link>
      </div>
      <div className="min-w-50 m-3 flex flex-col">
        <h3 className="text-md mb-1 font-bold">Support</h3>
        <Link to="/ " className="text-sm text-greyC hover:underline">
          Help
        </Link>
        <Link to="/ " className="text-sm text-greyC hover:underline">
          Delivery
        </Link>
      </div>
      <div className="min-w-50 m-3">
        <h3 className="text-md mb-1 font-bold">Contacts</h3>
        <div className="flex justify-between text-greyC">
          <Link
            to="https://www.facebook.com/profile.php?id=100011474560320"
            className="hover:text-mainC"
          >
            <FaFacebookF />
          </Link>
          <Link to="/" className="hover:text-mainC">
            <FaXTwitter />
          </Link>
          <Link to="/" className="hover:text-mainC">
            <FaInstagram />
          </Link>
          <Link to="/" className="hover:text-mainC">
            <FaYoutube />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
