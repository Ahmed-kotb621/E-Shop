import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../features/cart/CartItem';
import EmptyCart from '../features/cart/EmptyCart';
import { clearCart } from '../features/cart/cartSlice';
import toast from 'react-hot-toast';
import { formateCurrency } from '../utils/helpers';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  if (!cart.length) return <EmptyCart />;
  function handleClearCart() {
    dispatch(clearCart());
    toast.success('Cart Cleared Successfully');
  }

  const totalPrice = cart.reduce((acc, cur) => acc + cur.total_price, 0);

  return (
    <div className="p-8">
      <h2 className="mb-10 text-xl font-bold text-mainC">Your Cart</h2>
      {cart.map((el, i) => (
        <CartItem cart={el} key={i} />
      ))}

      <div className=" my-5 flex space-x-3">
        <h1 className="text-bold text-xl">Total Price :</h1>
        <h1 className=" text-xl font-extrabold">
          {formateCurrency(totalPrice)}
        </h1>
      </div>
      <div className="mt-10">
        <button
          className=" text-md mr-5 rounded-full border-2 border-yellowC bg-yellowC p-2 text-mainC hover:bg-secondaryC hover:text-yellowC"
          // onClick={() => toast.success('order success')}
        >
          Order Now
        </button>
        <button
          className="text-md mr-5 rounded-full border-2 border-mainC bg-transparent px-10 py-2 text-mainC  hover:bg-mainC hover:text-secondaryC"
          onClick={() => handleClearCart()}
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
