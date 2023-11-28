//@ts-nocheck
'use client';
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import FeatureComponents from './FeatureComponents';
import { MdFlightTakeoff } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa6';
import { CiTimer } from 'react-icons/ci';
import { TbWorld } from 'react-icons/tb';

const Features = () => {
  const animationContainer = useRef(null);
  const anim = useRef(null);

  useEffect(() => {
    anim.current = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg', // Renders the animation as an SVG. You can also use 'canvas' for a Canvas render.
      loop: true,
      autoplay: true,
      // Here, include the path to your Lottie JSON file
      path: 'Animation - 1698671406291.json',
    });
    anim.current.setSpeed(1);

    return () => anim.current?.destroy(); // Optional clean up for unmounting
  }, []);

  return (
    <>
      <h2 className="font-bold text-[25px] mb-5 text-center">
        WHY CROWN INTERNATIONAL TRAVELS
      </h2>
      <div className="grid grid-cols-12 gap-6">
        <div
          ref={animationContainer}
          className="relative lg:col-span-6 md:col-span-12 col-span-12"
        ></div>
        <div className="lg:col-span-6 md:col-span-12 col-span-12">
          <div className="grid grid-cols-12 gap-6">
            <div className="md:col-span-6 col-span-6">
              <FeatureComponents
                icon={<CiTimer />}
                title="EMERGENCY SERVICES"
                description="We are available to serve our clients 24/7 for any emergency travel needs, accessible via mobile."
              />
            </div>
            <div className="md:col-span-6 col-span-6">
              <FeatureComponents
                icon={<MdFlightTakeoff />}
                title="CHARTERED AIR FLIGHTS"
                description="Crown International Aviation, in partnership with its affiliates, offers air ambulance and small plane services."
              />
            </div>
            <div className="md:col-span-6 col-span-6">
              <FeatureComponents
                icon={<FaUsers />}
                title="B2B SERVICES"
                description="We offer competitive airfares for worldwide destinations, empowering travel agents to increase profitability."
              />
            </div>
            <div className="md:col-span-6 col-span-6">
              <FeatureComponents
                icon={<TbWorld />}
                title="World Wide Tours"
                description="At Crown International, we specialize in designing holiday and tour packages tailored to our clients’ needs and preferences."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
