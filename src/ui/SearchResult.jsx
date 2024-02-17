import SearchItem from './SearchItem';

function SearchResult({ filtered, setIsFocused, setQuery }) {
  function handleClick() {
    setIsFocused(false);
    setQuery('');
  }
  return (
    <div className="no-scrollbar relative h-[400px] overflow-scroll rounded-lg border-2  bg-slate-100 shadow-lg  sm:block sm:w-full">
      <button
        className="absolute right-3 h-5 w-5   text-4xl  text-gray-800"
        onClick={() => handleClick()}
      >
        &times;
      </button>

      {!filtered.length ? (
        <h1 className="m-auto mt-10 flex w-fit font-semibold">
          no item found!
        </h1>
      ) : (
        filtered.map((item) => (
          <SearchItem
            image={item.grid_picture_url}
            name={item.name}
            id={item.id}
            setIsFocused={setIsFocused}
            setQuery={setQuery}
            key={item.id}
          />
        ))
      )}
    </div>
  );
}

export default SearchResult;
