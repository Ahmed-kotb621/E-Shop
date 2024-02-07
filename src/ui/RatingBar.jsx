function RatingBar({ width, rate }) {
  return (
    <div className="relative h-2 w-[50%] translate-x-3 rounded-md bg-secondaryC sm:w-[30%]">
      <span className="absolute  top-0 translate-x-[-12px] translate-y-[-5px] text-sm">
        {rate}
      </span>
      <div
        className="mt-2 h-2 rounded-md bg-yellow-400"
        style={{ width: `${width}0%` }}
      >
        {' '}
      </div>
    </div>
  );
}

export default RatingBar;
