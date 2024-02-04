import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul className="flex text-sm   ">
        <li>
          <NavLink
            to="/"
            className="hover:text-yellowC active:text-yellowC aria-[current=page]:text-yellowC  mr-5 text-slate-600 transition-all  duration-200"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="newProducts"
            className="hover:text-yellowC active:tex-yellowCn aria-[current-page]:text-yellowC mr-5 text-slate-600 transition-all duration-200"
          >
            New Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/categories"
            className="hover:text-yellowC active:tex-yellowCn aria-[current-page]:text-yellowC mr-5 text-slate-600 transition-all duration-200"
          >
            Catogories
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="hover:text-yellowC active:tex-yellowCn aria-[current-page]:text-yellowC mr-5 text-slate-600 transition-all duration-200"
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
