import { GiHamburgerMenu } from 'react-icons/gi';

import Logo from './Logo';
import NavBar from './NavBar';
import Search from './Search';
import { useState } from 'react';
import Aside from './Aside';
import image from '../assets/images/shopping-bag.png';
import { Link, NavLink } from 'react-router-dom';
import Nav from './Nav';
function Header() {
  return (
    <div className=" sticky top-0 z-10 mt-2 flex flex-col  border-b-[1px] bg-white px-8 py-3 md:items-center md:justify-between lg:px-20">
      <div className="w-full   pb-3.5 md:flex md:items-center md:justify-between">
        <Logo />
        <Search />
        <NavBar />
      </div>
      <div className="w-full pt-3">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
