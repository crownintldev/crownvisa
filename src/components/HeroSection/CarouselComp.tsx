import React, { useEffect, useState } from "react";

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
    <div className="relative w-full h-[500px] rounded-[30px] overflow-hidden">
      <div className="w-full h-full bg-gray-700 opacity-70 rounded-3xl absolute top-0 left-0"></div>
      <div
        style={{ backgroundImage: `url(${images[activeIndex]})` }}
        className="w-full h-full bg-cover bg-fixed"
      />
      {/* <div className="flex justify-between mt-[-300px] px-3">
        <button
          onClick={goToPrevious}
          className="transform-translate-y-1/2 p-2 border-2 border-black rounded-xl bg-white duration-200 transition text-black hover:text-[#fe720f]"
        >
          <FaArrowLeft size={25} />
        </button>
        <button
          onClick={goToNext}
          className="transform-translate-y-1/2 p-2 border-2 border-black rounded-xl bg-white duration-200 transition text-black hover:text-[#fe720f]"
        >
          <FaArrowRight size={25} />
        </button>
      </div> */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            className={`cursor-pointer block w-2 h-2 rounded-full ${index === activeIndex ? "bg-white" : "bg-[#fe720f]"
              }`}
          />
        ))}
      </div>
    </div>
  );
};
export default CarouselComp;
