import { IoIosSearch } from 'react-icons/io';

function Search() {
  return (
    <div className="relative sm:block">
      <input
        type="text"
        placeholder="search items..."
        className=" focus:ring-yellowC w-40  rounded-lg bg-slate-100 py-2 pl-9 pr-3 outline-1 transition-all duration-300 focus:w-72 focus:outline-none focus:ring focus:ring-offset-1 md:w-[300px] md:focus:w-[330px]"
      />
      <div className="absolute inset-y-0 flex items-center  pl-3 text-lg text-slate-300">
        <IoIosSearch />
      </div>
    </div>
  );
}

export default Search;
