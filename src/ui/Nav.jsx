import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex text-sm   ">
        <li>
          <NavLink
            to="/"
            className="mr-5 text-slate-600 transition-all  duration-200 hover:text-yellowC active:text-yellowC  aria-[current=page]:text-yellowC"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men"
            className="mr-5 text-slate-600 transition-all  duration-200 hover:text-yellowC active:text-yellowC  aria-[current=page]:text-yellowC"
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women"
            className="mr-5 text-slate-600 transition-all  duration-200 hover:text-yellowC active:text-yellowC  aria-[current=page]:text-yellowC"
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="mr-5 text-slate-600 transition-all  duration-200 hover:text-yellowC active:text-yellowC  aria-[current=page]:text-yellowC"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
