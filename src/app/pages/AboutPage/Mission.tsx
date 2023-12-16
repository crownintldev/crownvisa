//@ts-nocheck
'use client';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const Mission = () => {
  const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    anim.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg', // Renders the animation as an SVG. You can also use 'canvas' for a Canvas render.
      loop: true,
      autoplay: true,
      // Here, include the path to your Lottie JSON file
      path: 'Animations/Animation - 1699368991346.json',
    });
    anim.current.setSpeed(1);

    return () => anim.current?.destroy(); // Optional clean up for unmounting
  }, []);
  return (
    <div className="grid grid-cols-12 gap-6 py-3">
      <div
        ref={animationContainer}
        className="relative md:col-span-4 col-span-12 h-[300px]"
      ></div>
      <div className="md:col-span-8 col-span-12">
        <h2 className="font-bold text-[35px] mb-5">
          Our <span className="text-[#FFC224]">Mission</span>
        </h2>
        <p>
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

export default Mission;
