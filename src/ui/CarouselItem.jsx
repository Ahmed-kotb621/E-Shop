import { LuSend } from 'react-icons/lu';

function CarouselItem({ image, text }) {
  return (
    <div
      className="flex-end relative  flex h-[500px] flex-col justify-end rounded-[50px] border bg-secondaryC bg-cover bg-center bg-no-repeat p-8 sm:bg-[length:75%] md:bg-[length:60%] lg:bg-[length:50%] "
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <h1 className="text-gradient-to-r w-fit overflow-hidden  from-slate-50  to-slate-700 text-7xl  tracking-widest sm:text-9xl md:text-[140px] lg:text-[230px]">
          <span className="via-  w-fit text-nowrap bg-gradient-to-r from-greyC from-5% via-transparent via-50%  to-greyC to-95% bg-clip-text text-transparent">
            AIR MAX
          </span>
        </h1>
      </div>
      <p className="text-xl text-stone-500">{text}</p>
      <div className="relative mb-12 mt-7 flex">
        <input
          type="text"
          placeholder="Your email address"
          className="h-12 rounded-3xl pl-10 placeholder:text-sm focus:outline-none"
        />
        <button className="left-2 h-full translate-x-[-50px] rounded-3xl bg-yellowC px-3 py-3 text-slate-100 ">
          Subscribe
        </button>
        <div className="absolute inset-y-0 top-0 flex items-center p-3 text-slate-500 ">
          <LuSend />
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
