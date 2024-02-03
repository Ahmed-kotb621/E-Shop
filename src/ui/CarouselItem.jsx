import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import { LuSend } from 'react-icons/lu';
import image1 from '../assets/images/slider-1.jpg';
import image2 from '../assets/images/black-friday-elements-assortment.jpg';

function CarouselItem({ image, title, text }) {
  return (
    <div
      className="flex h-[500px] flex-col justify-around rounded-[50px] bg-cover bg-center p-8"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="leading-12 text-5xl font-semibold text-stone-700 sm:max-w-[50%]">
        {title}
      </h1>
      <p className="text-xl text-stone-500">{text}</p>
      <div className="relative mb-12">
        <input
          type="text"
          placeholder="Your email address"
          className="h-12 rounded-3xl pl-10 placeholder:text-sm focus:outline-none"
        />
        <button className="left-2 h-full translate-x-[-50px] rounded-3xl bg-green px-3 text-slate-100">
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
