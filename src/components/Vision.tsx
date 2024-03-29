//@ts-nocheck
'use client';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Vision = () => {
  const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    anim.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg', // Renders the animation as an SVG. You can also use 'canvas' for a Canvas render.
      loop: true,
      autoplay: true,
      // Here, include the path to your Lottie JSON file
      path: 'Animations/Animation - 1702986251313.json',
    });
    anim.current.setSpeed(1);

    return () => anim.current?.destroy(); // Optional clean up for unmounting
  }, []);
  return (
    <div className="lg:col-span-4 md:col-span-6 col-span-12">
      <div
        ref={animationContainer}
        className="relative h-[200px]"
      ></div>
      <div className="">
        <h2 className="font-semibold text-3xl mb-5">
          Our <span className="text-[#fe720f]">Vision</span>
        </h2>
        <p className='text-justify'>
          Crown International Technology’s aim is to empower people, businesses,
          and organisations throughout the world by utilising cutting-edge
          digital technology. We work hard to provide cutting-edge solutions
          that boost productivity, connection, and efficiency while promoting
          sustainable growth. We strive to change the digital environment,
          inspire technical innovation, and enable our clients to succeed in the
          constantly changing digital era through our knowledge, creativity, and
          unrelenting pursuit of excellence.
        </p>
      </div>
    </div>
  );
};

export default Vision;
