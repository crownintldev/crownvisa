import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

type CarouselProps = {
  images: string[];
  duration?: number;
};

const CarouselComp: React.FC<CarouselProps> = ({ images, duration = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [images, duration]);
  const goToPrevious = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  const goToNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  return (
    <div className="relative">
      <Image
        src={images[activeIndex]}
        alt="carousel-item"
        className="w-full h-[600px]"
        width={600}
        height={600}
      />
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-[20px] p-4"
      >
        <BsFillArrowLeftCircleFill size={45} color="black" />
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-[20px] p-4">
        <BsFillArrowRightCircleFill size={45} color="black" />
      </button>
    </div>
  );
};
export default CarouselComp;
