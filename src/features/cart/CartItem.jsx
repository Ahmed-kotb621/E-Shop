import { AiOutlineDelete } from 'react-icons/ai';
import Colors from '../../ui/Colors';
import { formateCurrency, formateText } from '../../utils/helpers';
import { useDispatch } from 'react-redux';
import {
  decreaseCartQuanity,
  deleteFromCart,
  increaseCartQuantity,
} from './cartSlice';
import { FaMinus, FaPlus } from 'react-icons/fa6';

function CartItem({ cart }) {
  const {
    name,
    color,
    grid_picture_url: image,
    total_price,
    id,
    quantity,
  } = cart;
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteFromCart(id));
  }
  function increaseQuantity(id) {
    dispatch(increaseCartQuantity(id));
  }

  function decreaseQuantity(id) {
    dispatch(decreaseCartQuanity(id));
  }
  return (
    <div className="grid grid-cols-4 items-center justify-between gap-2 border-b sm:grid-cols-3">
      <div className="col-span-3  col-start-1 flex items-center justify-start sm:col-span-1">
        <p>{quantity}x</p>
        <img
          src={image}
          alt={name}
          className="m-2 h-20 rounded-md bg-secondaryC"
        />
        <p>{formateText(name, 3)}</p>
      </div>
      <div className="flex items-center justify-end">
        <p>{<Colors color={color} width="15px" height="15px" />}</p>
        <p className="ml-10 font-semibold">{formateCurrency(total_price)}</p>
      </div>
      <div className="col-span-2 col-start-3 my-3 flex justify-between  sm:justify-around">
        <div className="flex">
          <button
            className="rounded-full bg-mainC p-1 text-secondaryC"
            onClick={() => decreaseQuantity(id)}
          >
            <FaMinus />
          </button>
          <button
            className="ml-5 rounded-full bg-mainC p-1 text-secondaryC"
            onClick={() => increaseQuantity(id)}
          >
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
