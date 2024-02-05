import {
  FaArrowRightLong,
  FaBagShopping,
  FaCartShopping,
} from 'react-icons/fa6';
import { GrView } from 'react-icons/gr';
import { FiShoppingBag } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { formateCurrency, textSlice } from '../utils/helpers';

function CategoryItem({ name, color, image, price }) {
  return (
    <div className="flex flex-col items-center justify-between overflow-hidden rounded-2xl bg-secondaryC p-5">
      <div className="flex w-full justify-end">
        <>
          {color === 'Multi-Color' ? (
            ['white', 'red', 'blue', 'green'].map((bgColor, i) => (
              <div
                className="mr-1 h-3 w-3 rounded-full"
                style={{ backgroundColor: `${bgColor}` }}
                key={i}
              ></div>
            ))
          ) : (
            <div
              className="mr-1 h-3 w-3 rounded-full"
              style={{ backgroundColor: `${color}` }}
            ></div>
          )}
        </>
      </div>

      <div style={{ position: 'relative' }} className="group relative">
        <img src={image} alt={name} />
        <div className="absolute left-0 top-0 hidden h-full w-full items-center justify-center  transition-opacity  duration-300 ease-in-out  group-hover:flex">
          <button className="rounded-md bg-yellowC px-5 py-2">
            <span className="text-2xl">
              <GrView />
            </span>
          </button>
        </div>
      </div>
      <p className="w-full text-center font-semibold text-mainC">
        {textSlice(name)}
      </p>
      <div className="mt-2 flex w-full items-center justify-between text-xl">
        <p className="text-sm font-bold">{formateCurrency(price)}</p>
        <div className="flex space-x-4">
          <button className="rounded-md bg-mainC p-1 text-secondaryC transition-colors duration-300 hover:bg-white hover:text-mainC">
            <FiShoppingBag />
          </button>
          <button className="rounded-md bg-white p-1 text-mainC transition-colors duration-300 hover:bg-mainC hover:text-secondaryC">
            <MdFavoriteBorder />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CategoryItem;
