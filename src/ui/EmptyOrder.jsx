import { Link } from 'react-router-dom';

function EmptyOrder() {
  return (
    <div className="underline hover:no-underline">
      <Link to="/">start order now.</Link>
    </div>
  );
}

export default EmptyOrder;
