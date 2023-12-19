//@ts-nocheck
'use client';
import { Button } from 'antd';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

const About = () => {
  const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    anim.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg', // Renders the animation as an SVG. You can also use 'canvas' for a Canvas render.
      loop: true,
      autoplay: true,
      // Here, include the path to your Lottie JSON file
      path: 'Animations/Animation - 1702725027865.json',
    });

    return () => anim.current?.destroy(); // Optional clean up for unmounting
  }, []);
  return (
    <div className="grid grid-cols-12 gap-6 my-3">
      <div
        ref={animationContainer}
        className="relative md:col-span-4 col-span-12 h-[300px]"
      ></div>
      <div className="md:col-span-8 col-span-12">
        <h2>ABOUT THE COMPANY</h2>
        <h1 className="text-[35px] font-bold">
          Providing the best immigration{' '}
          <span className="text-[#FFC224]">services</span>
        </h1>
        <p className="py-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
          officiis. Porro culpa, sunt iure temporibus est aliquid quod,
          explicabo vel odio facere libero repellendus sequi deserunt eum natus!
          Distinctio, sapiente!
        </p>
        <button className="btn bg-[#FFC224] text-black mr-3 flex justify-center items-center p-[10px]">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default About;
