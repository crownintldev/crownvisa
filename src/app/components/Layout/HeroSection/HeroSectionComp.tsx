//@ts-nocheck
"use client";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import CarouselComp from "./CarouselComp";

const images = [
  "https://creativelayers.net/themes/viatours-html/img/hero/1/1.png",
  "https://rn53themes.net/themes/demo/travelz/images/gallery/t4.jpg",
];

const HeroSectionComp = () => {
  const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    anim.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg", // Renders the animation as an SVG. You can also use 'canvas' for a Canvas render.
      loop: true,
      autoplay: true,
      // Here, include the path to your Lottie JSON file
      path: "Animation - 1698502622759.json",
    });

    return () => anim.current?.destroy(); // Optional clean up for unmounting
  }, []);

  return (
    <>
      <div className="relative bg-transparent rounded-[30px] mx-[35px] pt-[100px]">
        <CarouselComp images={images} />
        <div className="absolute md:top-[200px] md:left-[100px] top-[100px] right-[80px]">
          <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16" style={{
              background: "transparent",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                We invest in the world’s potential
              </h1>
              <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-15 dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HeroSectionComp;
