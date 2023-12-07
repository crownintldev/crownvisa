//@ts-nocheck
"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import { Button } from "antd";
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
      <div className="relative bg-transparent rounded-[50px] mx-[35px]">
        <CarouselComp images={images} />
        <div className="absolute md:top-[80px] md:left-[200px] top-[100px] right-[100px]">
          {/* <h1
            className="lg:text-[75px] md:text-[55px] text-[35px] font-bold text-white"
            style={{
              background: "transparent",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
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
          </div> */}

          <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16" style={{
              background: "transparent",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}>
              <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
                We invest in the world’s potential
              </h1>
              <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
                Here at Flowbite we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0" style={{
              background: "transparent",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}>
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
                >
                  Get started
                  <svg
                    className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-black focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                  Learn more
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default HeroSectionComp;
