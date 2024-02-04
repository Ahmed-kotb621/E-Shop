import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { LuSend } from 'react-icons/lu';
import image1 from '../assets/images/slider-1.jpg';
import image2 from '../assets/images/black-friday-elements-assortment.jpg';

function CarouselItem({ image, title, text }) {
  return (
    <div
      className="bg-secondaryC flex-end  relative flex h-[500px] flex-col justify-end rounded-[50px] border bg-cover bg-center bg-no-repeat p-8 sm:bg-[length:75%] md:bg-[length:60%] lg:bg-[length:50%] "
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* <h1 className="leading-12 text-5xl font-semibold text-stone-700 sm:max-w-[50%] md:max-w-[30%]">
        {title}
      </h1> */}
      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
        <h1 className="text-gradient-to-r w-fit from-slate-50  to-slate-700  text-7xl tracking-widest  sm:text-9xl md:text-[150px] lg:text-[250px]">
          <span className="from-greyC  to-greyC via- bg-gradient-to-r from-5% via-transparent via-50% to-95%  bg-clip-text text-transparent">
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
        <button className="bg-yellowC left-2 h-full translate-x-[-50px] rounded-3xl px-3 py-3 text-slate-100 ">
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

/*
const [current, setCurrent] = useState(0);
  const images = [image1, image2];

  const prev = () => {
    current === 0 ? setCurrent(() => current + 1) : setCurrent(0);
  };
  const next = () => {
    current === images.length - 1
      ? setCurrent(current - 1)
      : setCurrent(images.length - 1);
  };
  return (
    <div className="flex  overflow-hidden ">
      {images.map((_, i) => (
        <img src={images[current]} key={i} />
      ))}

      <div className="absolute">
        <button onClick={() => prev()}>
          <FaAngleLeft />
        </button>
        <button onClick={() => next()}>
          <FaAngleRight />
        </button>
      </div>
    </div>

    */
