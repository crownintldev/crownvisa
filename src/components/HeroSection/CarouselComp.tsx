
// @ts-nocheck
  import { useState, useEffect } from 'react';
  import Image from 'next/image';
  import tra1 from '../../../public/images/tra1.jpg'
  import tra2 from '../../../public/images/tra2.jpg'
  import tra3 from '../../../public/images/tra3.jpg'
import { HeadingH5 } from '../Heading';

  
  const CarouselComp = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const slides = [
      { id: 1, src:tra1, title: 'UAE', description: 'Lorem ipsum dolor sit amet...' },
      { id: 2, src:tra2, title: 'Canada', description: 'Lorem ipsum dolor sit amet...' },
      { id: 3, src:tra3, title: 'Germany', description: 'Lorem ipsum dolor sit amet...' },

      // Add more slides as needed
    ];
  
    const nextSlide = () => setActiveSlide((prev) => (prev + 1) % slides.length);
    const prevSlide = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  
    useEffect(() => {
      const interval = setInterval(nextSlide, 10000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="slider">
        <div className="list">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`item ${index === activeSlide ? 'active' : ''}`}>
              <Image src={slide.src} alt={`Slide ${slide.id}`} layout='fill' />
              <div className="content hidden md:block">
                <HeadingH5 className={'text-yellow100'} title={'TRAVELS'}/>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="arrows">
          <button onClick={prevSlide}>{"<"}</button>
          <button onClick={nextSlide}>{">"}</button>
        </div>
        <div className="thumbnail">
          {slides.map((slide, index) => (
            <div key={slide.id} className={`item ${index === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(index)}>
              <Image src={slide.src} alt={`Thumbnail ${slide.id}`} layout='fill' />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CarouselComp;
  









// import { CarouselProps } from "@/types/interfaces";
// import React, { useEffect, useState } from "react";

// const CarouselComp: React.FC<CarouselProps> = ({ images, duration = 3000 }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, duration);
//     return () => clearInterval(interval);
//   }, [images, duration]);
//   const goToSlide = (index: number) => {
//     setActiveIndex(index);
//   };
//   return (
//     <div className="relative w-full h-[500px]  overflow-hidden">
//       <div className="w-full h-full bg-gray-700 opacity-70  absolute top-0 left-0"></div>
//       <div
//         style={{ backgroundImage: `url(${images[activeIndex]})` }}
//         className="w-full h-full bg-cover bg-fixed"
//       />
//       <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3">
//         {images.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`cursor-pointer block w-2 h-2  ${index === activeIndex ? "bg-white" : "bg-[#fe720f]"
//               }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };
// export default CarouselComp;
