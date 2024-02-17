import CarouselItem from './CarouselItem';
import { useEffect, useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import image1 from '../assets/images/fashion-shoes2.png';
import image2 from '../assets/images/hero-img2.png';

function Carousel() {
  const [current, setCurrent] = useState(0);

  const carousles = [
    <CarouselItem
      image={image1}
      title=" Don't miss amazing grocery deals."
      text="Sign Up for the daily newsletter."
      key="1"
    />,
    <CarouselItem
      image={image2}
      title="Fresh Vegetables, Big discount."
      text="Save up to 50% on your first order."
      key="2"
    />,
  ];

  const next = () => {
    setCurrent((current + 1) % carousles.length);
  };
  const prev = () => {
    setCurrent((current - 1 + carousles.length) % carousles.length);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative p-4 sm:p-8">
      {carousles[current]}
      <div className="absolute inset-0 flex w-full items-center justify-between p-12 text-xl">
        <button
          onClick={() => prev()}
          className="rounded-full bg-greyC bg-opacity-30 p-3 transition-all duration-300 hover:bg-slate-100"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={() => next()}
          className="rounded-full bg-greyC  bg-opacity-30 p-3 transition-all duration-300 hover:bg-slate-100"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}
export default Carousel;
