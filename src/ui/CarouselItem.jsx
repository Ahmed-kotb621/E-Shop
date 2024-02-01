import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import image1 from '../assets/images/bg.png';
import image2 from '../assets/images/black-friday-elements-assortment.jpg';
function CarouselItem() {
  const [current, setCurrent] = useState(0);
  const images = [image1, image2];

  const prev = () => {
    current === 0 ? setCurrent(current + 1) : setCurrent(images.length - 1);
  };
  return (
    <div className="flex  overflow-hidden">
      {images.map((_, i) => (
        <img src={images[current]} key={i} />
      ))}

      <div className="absolute">
        <button onClick={() => prev()}>
          <FaAngleLeft />
        </button>
        <button>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default CarouselItem;
