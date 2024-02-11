import SearchItem from './SearchItem';

function SearchResult({ filtered }) {
  return (
    <div className=" rounded-lg border-2 border-yellowC bg-slate-50">
      {filtered.map((item) => (
        <SearchItem
          image={item.grid_picture_url}
          name={item.name}
          key={item.id}
        />
      ))}
    </div>
  );
}

export default SearchResult;
