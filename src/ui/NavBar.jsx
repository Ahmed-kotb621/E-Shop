import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wish List</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
