import { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import SearchResult from './SearchResult';
import { useQuery } from 'react-query';
import { getItems } from '../services/itemsApi';

function Search() {
  const [query, setQuery] = useState('');
  const [isFocued, setIsFocused] = useState(false);
  function handleFoucs() {
    setIsFocused(true);
  }

  const { data } = useQuery({
    queryKey: ['item'],
    queryFn: getItems,
  });

  const filtered =
    query.length > 0
      ? data?.products.filter((el) =>
          el.name.toLowerCase().includes(query.toLowerCase()),
        )
      : null;

  return (
    <div className="relative">
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="search items..."
          onFocus={() => handleFoucs()}
          className=" w-40 rounded-lg  bg-slate-100 py-2 pl-9 pr-3 outline-1 transition-all duration-300 focus:w-72 focus:outline-none focus:ring focus:ring-yellowC focus:ring-offset-1 md:w-[300px] md:focus:w-[330px]"
        />
        <div className="absolute inset-y-0 flex items-center  pl-3 text-lg text-slate-300">
          <IoIosSearch />
        </div>
      </div>
      <div className="absolute bottom-[-40px] h-5 w-full">
        {isFocued && query.length > 0 && (
          <SearchResult
            filtered={filtered}
            setIsFocused={setIsFocused}
            setQuery={setQuery}
          />
        )}
      </div>
    </div>
  );
}

export default Search;
