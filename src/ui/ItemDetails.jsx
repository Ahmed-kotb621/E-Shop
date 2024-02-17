import { FiShoppingBag } from 'react-icons/fi';
import { formateCurrency } from '../utils/helpers';
import Colors from './Colors';
import { MdFavoriteBorder } from 'react-icons/md';
import Details from './Details';
import { useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import toast from 'react-hot-toast';
import { addToWish } from '../features/wishList/wishSlice';

function ItemDetails({ item }) {
  const dispatch = useDispatch();
  const [selectedSize, setIsselectedSize] = useState(null);
  const handleSelected = (size) => {
    setIsselectedSize(size);
  };

  const {
    brand_name: brand,
    grid_picture_url: picture,
    name,
    retail_price_cents: price,
    rating,
    size_range: size,
    color,
    release_year: year,
    gender,
    designer,
    main_picture_url: main,
  } = item;

  function handleAdd() {
    dispatch(addToCart({ ...item, selectedSize, quantity: 1 }));
  }
  return (
    <div>
      <div className="flex flex-col justify-center sm:flex-row ">
        <div className="flex items-center justify-center rounded-lg bg-secondaryC p-3">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: 'Wristwatch by Ted Baker London',
                isFluidWidth: true,
                src: picture,
              },
              largeImage: {
                src: main,
                width: 750,
                height: 750,
              },
            }}
          />
        </div>
        <div className="mt-5 flex flex-col justify-between px-5 sm:mt-0">
          <h2 className="text-lg font-semibold">{brand}</h2>
          <h1 className="mt-3 text-xl font-bold">{name}</h1>
          <p className="mt-5 text-3xl font-semibold">
            {formateCurrency(price)}
          </p>
          <p className="my-2 text-greyC">Color</p>
          <Colors color={color} height="20px" width="20px" />
          <p className="my-2 text-greyC">Size</p>
          <p>
            {[10, 12, 15, 20, 30, 35, 40].map((el, i) => (
              <button
                key={i}
                onClick={() => handleSelected(el)}
                className={`m-1 inline-block min-w-10 rounded-md border border-greyC p-1 text-center ${selectedSize === el ? 'bg-mainC text-secondaryC' : ''}`}
              >
                {el}
              </button>
            ))}
          </p>
          <div className="mt-3 flex w-full">
            <button
              className="flex flex-grow items-center justify-center space-x-3 rounded-md bg-mainC px-5 py-1 text-secondaryC"
              onClick={() => {
                handleAdd();
                toast.success('Item Added Successfully');
              }}
            >
              <span className="mr-3 inline-block">
                <FiShoppingBag />
              </span>{' '}
              Add to Cart
            </button>
            <button
              className="ml-2 rounded-md bg-secondaryC  p-1 text-xl"
              onClick={() => dispatch(addToWish(item))}
            >
              <MdFavoriteBorder />
            </button>
          </div>
        </div>
      </div>
      <Details
        brand={brand}
        year={year}
        name={name}
        rating={rating}
        color={color}
        designer={designer}
        gender={gender}
      />
    </div>
  );
}

export default ItemDetails;
