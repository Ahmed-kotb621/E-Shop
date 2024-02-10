import { useSelector } from 'react-redux';
import CartItem from '../features/cart/CartItem';
import EmptyCart from '../features/cart/EmptyCart';

function Cart() {
  const cart = useSelector((state) => state.cart.cart);

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="p-8">
      <h2 className="mb-10 text-xl font-bold text-mainC">Your Cart</h2>
      {cart.map((el, i) => (
        <CartItem cart={el} key={i} />
      ))}
      <div className="mt-10">
        <button className=" text-md mr-5 rounded-full border-2 border-yellowC bg-yellowC p-2 text-mainC hover:bg-secondaryC hover:text-yellowC">
          Order Now
        </button>
        <button className="text-md mr-5 rounded-full border-2 border-mainC bg-transparent p-2 text-mainC  hover:bg-mainC hover:text-secondaryC">
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
