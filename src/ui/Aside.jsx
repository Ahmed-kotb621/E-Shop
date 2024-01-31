import { useState } from 'react';
import Logo from './Logo';
import { IoClose } from 'react-icons/io5';
import Search from './Search';

import NavBar from './NavBar';
function Aside() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`absolute left-0 top-0 h-[100%] w-[90%] bg-slate-600 ${isOpen && 'hidden'}`}
    >
      <div>
        <button onClick={() => setIsOpen(!isOpen)}>
          <IoClose />
        </button>
        <Logo />
      </div>
      <Search />
      <NavBar />
    </div>
  );
}

export default Aside;
