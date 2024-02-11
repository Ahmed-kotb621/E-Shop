import { GrView } from 'react-icons/gr';
import { FiShoppingBag } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { formateCurrency, formateText } from '../utils/helpers';
import { Link } from 'react-router-dom';
import Colors from './Colors';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { addToWish } from '../features/wishList/wishSlice';

function CategoryItem({ item }) {
  const {
    name,
    color,
    grid_picture_url: image,
    retail_price_cents: price,
    gender,
    id,
  } = item;

  const newItem = { ...item, quantity: 1 };
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(addToCart(newItem));
  }
  function handleAddWish() {
    dispatch(addToWish(item));
  }
  return (
    <div className="flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-secondaryC p-5">
      <div className="flex w-full justify-end">
        <Colors color={color} width="12px" height="12px" />
      </div>

      <div
        style={{ position: 'relative' }}
        className="group relative transition-all duration-300"
      >
        <img src={image} alt={name} />
        <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center   group-hover:flex">
          <Link className="rounded-md bg-yellowC px-5 py-2" to={`/item/${id}`}>
            <span className="text-2xl">
              <GrView />
            </span>
          </Link>
        </div>
      </div>
      <p className="w-full text-center font-semibold text-mainC">
        {formateText(name, 3)}
      </p>
      <div className="mt-2 flex w-full items-center justify-between text-xl">
        <p className="text-sm font-bold">
          {formateCurrency(price)}{' '}
          <span className="ml-2 font-normal text-greyC">
            {[gender[0].toUpperCase()]}
          </span>
        </p>
        <div className="flex space-x-4">
          <button
            className="rounded-md bg-mainC p-1 text-secondaryC shadow-md transition-colors duration-300 hover:bg-white hover:text-mainC"
            onClick={() => handleAdd()}
          >
            <FiShoppingBag />
          </button>
          <button
            className="rounded-md bg-white p-1 text-mainC shadow-md transition-colors duration-300 hover:bg-mainC hover:text-secondaryC"
            onClick={() => handleAddWish()}
          >
            <MdFavoriteBorder />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
