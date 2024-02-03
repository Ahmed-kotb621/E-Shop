import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex text-sm sm:text-lg ">
        <li>
          <NavLink
            to="/"
            className="mr-5 text-slate-600 transition-all  duration-200 hover:text-green active:text-green  aria-[current=page]:text-green"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="newProducts"
            className="mr-5 text-slate-600 transition-all duration-200 hover:text-green active:text-green aria-[current-page]:text-green"
          >
            New Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className="mr-5 text-slate-600 transition-all duration-200 hover:text-green active:text-green aria-[current-page]:text-green"
          >
            Catogories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="mr-5 text-slate-600 transition-all duration-200 hover:text-green active:text-green aria-[current-page]:text-green"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
