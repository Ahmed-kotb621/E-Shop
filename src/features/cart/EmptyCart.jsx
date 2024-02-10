import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className="m-auto w-full flex-col items-center justify-center p-8">
      <div>
        <h1 className=" m-auto mt-5 w-fit text-xl font-semibold">
          Start Add Amazing <span className="text-yellowC">Sneakers</span> to
          your Cart 👋
        </h1>
      </div>
      <div className="m-auto mt-5 w-fit text-yellowC underline hover:text-yellow-700">
        <Link to="/">&larr; back home</Link>
      </div>
    </div>
  );
}

export default EmptyCart;
