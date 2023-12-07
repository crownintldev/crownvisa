import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";

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
        className="w-full h-[600px] rounded-[50px]"
        width={600}
        height={600}
      />
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-[20px] p-2 border rounded-xl hover:bg-white duration-200 transition text-white hover:text-blue-500"
      >
        <FaArrowLeft  size={30}  />
      </button>
      <button onClick={goToNext} className="absolute top-1/2 right-[20px] p-2 border rounded-xl hover:bg-white duration-200 transition text-white hover:text-blue-500">
        <FaArrowRight size={30} />
      </button>
    </div>
  );
};
export default CarouselComp;
