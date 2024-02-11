function SearchItem({ image, name }) {
  return (
    <div className="flex w-full overflow-hidden p-1">
      <img src={image} className="w-20 rounded-md border" />
      <h2>{name}</h2>
    </div>
  );
}

export default SearchItem;
