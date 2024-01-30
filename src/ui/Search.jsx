import { IoIosSearch } from 'react-icons/io';

function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="search items..."
        className="bg-slate-0  focus:ring-thin rounded-lg border py-2 pl-9 pr-3 focus:outline-none focus:ring focus:ring-green-200 focus:ring-offset-1"
      />
      <div className="absolute inset-y-0 flex items-center  pl-3 text-lg text-slate-300">
        <IoIosSearch />
      </div>
    </div>
  );
}

export default Search;
