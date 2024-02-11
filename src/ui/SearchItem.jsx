import { formateText } from '../utils/helpers';
import { Link } from 'react-router-dom';
function SearchItem({ image, name, id, setIsFocused }) {
  return (
    <Link to={`/item/${id}`} onClick={() => setIsFocused(false)}>
      <div className="flex w-full items-center space-x-2 border-b  p-1 text-sm hover:bg-yellowC">
        <img src={image} className=" w-16 rounded-md border bg-slate-200" />
        <h2>{formateText(name, 5)}</h2>
      </div>
    </Link>
  );
}

export default SearchItem;
