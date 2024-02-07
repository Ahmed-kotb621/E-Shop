import { GrView } from 'react-icons/gr';
import { FiShoppingBag } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { formateCurrency, textSlice } from '../utils/helpers';
import { Link } from 'react-router-dom';
import Colors from './Colors';

function CategoryItem({ name, color, image, price, gender, id }) {
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
        {textSlice(name)}
      </p>
      <div className="mt-2 flex w-full items-center justify-between text-xl">
        <p className="text-sm font-bold">
          {formateCurrency(price)}{' '}
          <span className="ml-2 font-normal text-greyC">
            {[gender.toUpperCase()]}
          </span>
        </p>
        <div className="flex space-x-4">
          <button className="rounded-md bg-mainC p-1 text-secondaryC shadow-md transition-colors duration-300 hover:bg-white hover:text-mainC">
            <FiShoppingBag />
          </button>
          <button className="rounded-md bg-white p-1 text-mainC shadow-md transition-colors duration-300 hover:bg-mainC hover:text-secondaryC">
            <MdFavoriteBorder />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
