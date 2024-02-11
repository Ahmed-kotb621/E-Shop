import { useDispatch } from 'react-redux';
import { formateCurrency, formateText } from '../../utils/helpers';
import Colors from '../../ui/Colors';
import { AiOutlineDelete } from 'react-icons/ai';
import { deleteFromWishList } from './wishSlice';

function WishListItem({ wishItem }) {
  const {
    name,
    color,
    grid_picture_url: image,
    retail_price_cents: price,
    gender,
    id,
  } = wishItem;
  const dispatch = useDispatch();
  function handleDelete(id) {
    dispatch(deleteFromWishList(id));
  }

  return (
    <div className="grid grid-cols-3 items-center justify-between border-b">
      <div className="flex items-center justify-start ">
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

export default WishListItem;
