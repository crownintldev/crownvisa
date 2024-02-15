import { CarouselProps } from "@/types/interfaces";
import React, { useEffect, useState } from "react";

const CarouselComp: React.FC<CarouselProps> = ({ images, duration = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [images, duration]);
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="relative w-full h-[500px]  overflow-hidden">
      <div className="w-full h-full bg-gray-700 opacity-70  absolute top-0 left-0"></div>
      <div
        style={{ backgroundImage: `url(${images[activeIndex]})` }}
        className="w-full h-full bg-cover bg-fixed"
      />
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer block w-2 h-2  ${index === activeIndex ? "bg-white" : "bg-[#fe720f]"
              }`}
          />
        ))}
      </div>
    </div>
  );
};
export default CarouselComp;
