import { Link } from 'react-router-dom';

function EmptyWishlist() {
  return (
    <div className="m-auto w-full flex-col items-center justify-center p-8">
      <div>
        <h1 className=" m-auto mt-5 w-fit text-xl font-semibold">
          Your wish list is empty , start add sneakers
        </h1>
      </div>
      <div className="m-auto mt-5 w-fit text-yellowC underline hover:text-yellow-700">
        <Link to="/">&larr; back home</Link>
      </div>
    </div>
  );
}

export default EmptyWishlist;
