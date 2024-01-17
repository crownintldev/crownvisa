//@ts-nocheck
"use client";
import { features } from "@/constants/constants";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import FeatureComponents from "./FeatureComponents";

const Features = () => {
  const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    anim.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg", // Renders the animation as an SVG. You can also use 'canvas' for a Canvas render.
      loop: true,
      autoplay: true,
      // Here, include the path to your Lottie JSON file
      path: "Animations/Animation - 1698671406291.json",
    });
    anim.current.setSpeed(1);

    return () => anim.current?.destroy(); // Optional clean up for unmounting
  }, []);

  return (
    <div className="mb-10 antialiased">
      <h2 className="font-bold text-[25px] mb-5 text-center">
        WHY Choose CROWN INTERNATIONAL TRAVELS
      </h2>
      <div className="grid grid-cols-12 gap-6">
        <div
          ref={animationContainer}
          className="relative lg:col-span-6 md:col-span-12 col-span-12"
        ></div>
        <div className="lg:col-span-6 md:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-6">
            {features.map((feature, index) => (
              <div className="md:col-span-6 col-span-6" key={index}>
                <FeatureComponents
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
