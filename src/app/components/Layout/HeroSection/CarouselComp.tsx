import React, { useEffect, useState } from "react";
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
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="relative w-full h-[600px] rounded-[30px] overflow-hidden">
      <div
        style={{ backgroundImage: `url(${images[activeIndex]})` }}
        className="w-full h-full bg-cover bg-fixed"
      />
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-[20px] transform -translate-y-1/2 p-2 border rounded-xl hover:bg-white duration-200 transition text-white hover:text-[#FFC224] z-10"
      >
        <FaArrowLeft size={25} />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-[20px] transform -translate-y-1/2 p-2 border rounded-xl hover:bg-white duration-200 transition text-white hover:text-[#FFC224] z-10"
      >
        <FaArrowRight size={25} />
      </button>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer block w-2 h-2 rounded-full ${
              index === activeIndex ? "bg-white" : "bg-gray-700"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default CarouselComp;
