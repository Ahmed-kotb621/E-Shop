import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from './Logo';
import NavBar from './NavBar';
import Search from './Search';
import { useState } from 'react';
import Aside from './Aside';
import image from '../assets/images/shopping-bag.png';
import { Link } from 'react-router-dom';
function Header() {
  const [isOpen, setIsopen] = useState(false);
  return (
    // <div className=" flex-wrap items-center justify-between border-b-[1px] px-5 py-3 sm:flex">
    //   <Logo />
    //   <Search />
    //   <NavBar />
    // </div>
    <nav className="bg-stone-200 p-5 shadow md:flex md:items-center md:justify-between">
      <div>
        <span className="text-2xl">
          <img src={image} className="inline h-10" />
          Tailwind
        </span>
        <span onClick={() => setIsopen(!isOpen)}>
          <GiHamburgerMenu />
        </span>
      </div>
      <ul
        className={`absolute left-0 top-[-400px] z-[-1] w-full bg-stone-200 opacity-0 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:opacity-100 ${isOpen ? 'top-[400px] opacity-100' : ''}`}
      >
        <li className="mx-4  py-6 md:py-0">
          <Link className="text-xl duration-100 hover:text-cyan-500">Home</Link>
        </li>
        <li className="mx-4 py-6 md:py-0">
          <Link className="text-xl duration-100 hover:text-cyan-500">
            About
          </Link>
        </li>
        <li className="mx-4 py-6 md:py-0">
          <Link className="text-xl duration-100 hover:text-cyan-500">
            Conatct
          </Link>
        </li>
        <li className="mx-4 py-6 md:py-0">
          <Link className="text-xl duration-100 hover:text-cyan-500">Cart</Link>
        </li>

        <button className="rounded bg-cyan-400 px-6 py-2 text-white hover:bg-cyan-800">
          Get Started
        </button>
      </ul>
    </nav>
  );
}

export default Header;
