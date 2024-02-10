import { AiOutlineDelete } from 'react-icons/ai';
import Colors from '../../ui/Colors';
import { formateCurrency, formateText } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import {
  decreaseCartQuanity,
  deleteFromCart,
  increaseCartQuantity,
} from './cartSlice';
import { IoAddOutline } from 'react-icons/io5';
import { FaMinus, FaPlus } from 'react-icons/fa6';

function CartItem({ cart }) {
  const {
    name,
    color,
    grid_picture_url: image,
    retail_price_cents: price,
    gender,
    id,
    quantity,
  } = cart;
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteFromCart(id));
    console.log(id);
  }
  function increaseQuantity(id) {
    dispatch(increaseCartQuantity(id));
  }

  function decreaseQuantity(id) {
    dispatch(decreaseCartQuanity(id));
  }
  return (
    <div className="grid grid-cols-3 items-center justify-between border-b">
      <div className="flex items-center justify-start ">
        <p>{quantity}x</p>
        <img
          src={image}
          alt={name}
          className="m-2 h-20 rounded-md bg-secondaryC"
        />
        <p>{formateText(name)}</p>
      </div>
      <div className="flex items-center justify-end">
        <p>{<Colors color={color} width="15px" height="15px" />}</p>
        <p className="ml-10 font-semibold">{formateCurrency(price)}</p>
      </div>
      <div className="flex justify-around px-10">
        <div>
          <button
            className="rounded-full bg-mainC p-1 text-secondaryC"
            onClick={() => decreaseQuantity(id)}
          >
            {' '}
            <FaMinus />
          </button>
          <button
            className="ml-5 rounded-full bg-mainC p-1 text-secondaryC"
            onClick={() => increaseQuantity(id)}
          >
            {' '}
            <FaPlus />
          </button>
        </div>
        <button
          className=" text-2xl text-red-600"
          onClick={() => handleDelete(id)}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
}

export default CartItem;
