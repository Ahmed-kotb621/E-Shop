import { useDispatch, useSelector } from 'react-redux';
import EmptyWishlist from '../features/wishList/EmptyWishlist';
import WishListItem from '../features/wishList/WishListItem';
import { clearWishList } from '../features/wishList/wishSlice';

function WishList() {
  const wishList = useSelector((state) => state.wishList.wishList);
  const dispatch = useDispatch();
  if (!wishList.length) return <EmptyWishlist />;

  function handleClearList() {
    dispatch(clearWishList());
  }
  return (
    <div className="p-8">
      <h1 className="text-lg font-semibold">Your Wish List.</h1>
      {wishList.map((item, i) => (
        <WishListItem wishItem={item} key={i} />
      ))}
      <button
        className="text-md mr-5 mt-5 rounded-full border-2 border-mainC bg-transparent px-10 py-2 text-mainC  hover:bg-mainC hover:text-secondaryC"
        onClick={() => handleClearList()}
      >
        Clear List
      </button>
    </div>
  );
}

export default WishList;
