import {
  FaArrowRightLong,
  FaBagShopping,
  FaCartShopping,
} from 'react-icons/fa6';
import { FiShoppingBag } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { textSlice } from '../utils/helpers';

function CategoryItem({ name, color, image, price }) {
  return (
    <div
      className="flex flex-col items-center justify-between rounded-2xl bg-secondaryC p-5"
      // style={{ backgroundColor: `${color}` }}
    >
      <img src={image} alt={name} />
      <p className="w-full text-center font-semibold text-mainC">
        {textSlice(name)}
      </p>
      <div className="mt-2 flex w-full items-center justify-between text-xl">
        <p>{price}</p>
        <div className="flex space-x-4">
          <button className="rounded-md bg-mainC p-1 text-secondaryC">
            <FiShoppingBag />
          </button>
          <button className="rounded-md bg-white p-1 text-mainC">
            <MdFavoriteBorder />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
