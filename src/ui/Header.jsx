import Logo from './Logo';
import NavBar from './NavBar';
import Search from './Search';
import Nav from './Nav';
function Header() {
  return (
    <div className=" sticky top-0 z-10 mt-2 flex flex-col  border-b-[1px] bg-white px-4 py-3 sm:px-8 md:items-center md:justify-between lg:px-20">
      <div className="grid w-full grid-cols-2 gap-2 pb-3.5 sm:flex sm:justify-between md:flex-row md:items-center">
        <div className="order-1 md:order-1">
          <Logo />
        </div>
        <div className="order-3 col-span-2  md:order-2">
          <Search />
        </div>
        <div className="order-2 md:order-3">
          <NavBar />
        </div>
      </div>
      <div className="w-full pt-3">
        <Nav />
      </div>
    </div>
  );
}

export default Header;
