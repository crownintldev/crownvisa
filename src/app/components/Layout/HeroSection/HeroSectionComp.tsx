//@ts-nocheck
'use client';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { Button } from 'antd';
import CarouselComp from './CarouselComp';

const images = [
  'https://creativelayers.net/themes/viatours-html/img/hero/1/1.png',
  'https://rn53themes.net/themes/demo/travelz/images/gallery/t4.jpg',
];

const HeroSectionComp = () => {
  const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    anim.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg', // Renders the animation as an SVG. You can also use 'canvas' for a Canvas render.
      loop: true,
      autoplay: true,
      // Here, include the path to your Lottie JSON file
      path: 'Animation - 1698502622759.json',
    });

    return () => anim.current?.destroy(); // Optional clean up for unmounting
  }, []);

  return (
    <>
      <div className="relative bg-transparent">
        <CarouselComp images={images} />
        <div className="absolute md:top-[80px] md:left-[200px] top-[100px] right-[100px]">
          <h1
            className="lg:text-[75px] md:text-[55px] text-[35px] font-bold text-white"
            style={{
              background: 'transparent',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
            }}
          >
            Simple <br /> Process For <br /> Student Visa
          </h1>
          <div className="flex">
            <Button className="btn bg-blue-700 text-white mr-3 flex justify-center items-center lg:p-[20px] md:p-[5px] rounded-3xl">
              Default Button
            </Button>
            <Button className="btn bg-white text-black flex justify-center items-center lg:p-[20px] md:p-[5px] rounded-3xl">
              Default Button
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSectionComp;
