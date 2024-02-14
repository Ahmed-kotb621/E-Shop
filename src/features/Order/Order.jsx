import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../user/userSlice';
import toast from 'react-hot-toast';
import OrderItem from '../../ui/OrderItem';
import { dateAfterOneWeek } from '../../utils/helpers';
import EmptyOrder from '../../ui/EmptyOrder';

function Order() {
  const user = useSelector((state) => state.user.user);
  const order = useSelector((state) => state.order.order);
  const dispatch = useDispatch();
  function handleLogOut() {
    dispatch(deleteUser());
    toast.success('Log Out Successfully');
  }
  const [...orders] = order;
  const allorders = orders[order.length - 1];
  return (
    <div className="flex  flex-col items-center justify-center p-8">
      <h2 className="text-lg font-bold">Your Account</h2>
      <div className="my-5 flex w-full items-center justify-between rounded-lg bg-slate-100 p-3 sm:w-[300px]">
        <p className="font-semibold text-mainC">
          {user[0].firstName.toUpperCase()}
        </p>
        <button
          className="rounded-lg bg-mainC px-2 py-1 text-sm text-slate-100"
          onClick={() => handleLogOut()}
        >
          Log Out
        </button>
      </div>
      <div className="flex w-full flex-col items-center justify-center sm:w-[500px]">
        <h2 className="my-7 text-lg font-bold">Your Order</h2>
        <h3 className="my-2">
          Estimated Time :{' '}
          <span className="rounded-md bg-yellowC p-1">
            {dateAfterOneWeek()}
          </span>
        </h3>
        {allorders ? (
          allorders.map((el, i) => (
            <OrderItem
              key={i}
              quantity={el.quantity}
              name={el.name}
              color={el.color}
            />
          ))
        ) : (
          <EmptyOrder />
        )}
      </div>
    </div>
  );
}

export default Order;
