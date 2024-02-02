import CarouselItem from './CarouselItem';
import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import { FaAngleRight } from 'react-icons/fa6';
import image1 from '../assets/images/slider-1.jpg';
import image2 from '../assets/images/black-friday-elements-assortment.jpg';
function Carousel() {
  const [current, setCurrent] = useState(0);
  const carousles = [
    <CarouselItem
      image={image1}
      title=" Don't miss amazing grocery deals"
      text="Sign Up for the daily newsletter"
      key="1"
    />,
    <CarouselItem
      image={image2}
      title="Fresh Vegetables, Big discount"
      text="Save up to 50% on your first order"
      key="2"
    />,
  ];
  return <div>{carousles[1]}</div>;
}
export default Carousel;
