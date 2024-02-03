import { FaArrowRightLong } from 'react-icons/fa6';

function CategoryItem({ name, color, image }) {
  return (
    <div
      className="group flex cursor-pointer items-center justify-between rounded-3xl px-8 py-12  "
      style={{ backgroundColor: `${color}` }}
    >
      <div className="flex h-full flex-col justify-around">
        <h1 className="transform text-3xl font-semibold text-slate-800 transition-transform duration-500 group-hover:translate-y-[-15px]">
          {name}
        </h1>
        <button className="flex w-fit items-center gap-1 rounded-md  bg-green px-3 py-2 text-slate-100 transition-all duration-500 hover:gap-3 hover:text-slate-500">
          shop now <FaArrowRightLong />
        </button>
      </div>
      <img src={image} alt={name} className="h-[150px] md:h-[200px]" />
    </div>
  );
}

export default CategoryItem;
