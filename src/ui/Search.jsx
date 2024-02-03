import { IoIosSearch } from 'react-icons/io';

function Search() {
  return (
    <div className="relative sm:block">
      <input
        type="text"
        placeholder="search items..."
        className=" w-50 rounded-lg border bg-slate-50 py-2 pl-9 pr-3 outline-1 transition-all duration-300 focus:w-72 focus:outline-none focus:ring focus:ring-green focus:ring-offset-1 md:w-[380px] md:focus:w-[420px]"
      />
      <div className="absolute inset-y-0 flex items-center  pl-3 text-lg text-slate-300">
        <IoIosSearch />
      </div>
    </div>
  );
}

export default Search;
