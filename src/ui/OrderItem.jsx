import { formateText } from '../utils/helpers';
import Colors from './Colors';

function OrderItem({ quantity, name, color }) {
  return (
    <div className="m-1 flex w-full items-center justify-between rounded-lg   bg-slate-50 p-3">
      <p>{quantity}x</p>
      <p className="text-yellow-600">{formateText(name, 4)}</p>
      <Colors color={color} width="15px" height="15px" />
    </div>
  );
}

export default OrderItem;
