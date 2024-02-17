import { NavLink } from 'react-router-dom';
function Logo() {
  return (
    <NavLink to="/">
      <div className="flex w-fit min-w-fit items-center space-x-2 text-2xl font-bold">
        <h2 className="font-bold text-mainC">
          Sneakers<span className="text-yellowC ">.</span>
        </h2>
      </div>
    </NavLink>
  );
}

export default Logo;
