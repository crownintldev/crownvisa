//@ts-nocheck
import React, { useState } from 'react';
import CountUp from 'react-countup';
import { BsFillBarChartFill } from 'react-icons/bs';
import ScrollTrigger from 'react-scroll-trigger';

const StatsComp = () => {
  const [counter, setcounter] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setcounter(true)}>
      <div className="bg-blue-700 rounded-3xl shadow-2xl mb-10 ">
        {counter && (
          <div className="py-8 lg:py-16 grid grid-cols-12 gap-6 text-white">
            <div className="lg:col-start-2 lg:col-span-2 md:col-start-1 md:col-span-4 col-span-12 flex flex-col justify-center items-center">
              <BsFillBarChartFill size={35} />
              <div className="text-center text-[40px]">
                <CountUp start={0} end={100} duration={2} delay={0} />
                <span>+</span>
              </div>
              <h2>Social followers</h2>
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 flex flex-col justify-center items-center">
              <BsFillBarChartFill size={35} />
              <div className="text-center text-[40px]">
                <CountUp start={0} end={100} duration={2} delay={0} />
                <span>+</span>
              </div>
              <h2>Social followers</h2>
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 flex flex-col justify-center items-center">
              <BsFillBarChartFill size={35} />
              <div className="text-center text-[40px]">
                <CountUp start={0} end={100} duration={2} delay={0} />
                <span>+</span>
              </div>
              <h2>Social followers</h2>
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 flex flex-col justify-center items-center">
              <BsFillBarChartFill size={35} />
              <div className="text-center text-[40px]">
                <CountUp start={0} end={100} duration={2} delay={0} />
                <span>+</span>
              </div>
              <h2>Social followers</h2>
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 flex flex-col justify-center items-center">
              <BsFillBarChartFill size={35} />
              <div className="text-center text-[40px]">
                <CountUp start={0} end={100} duration={2} delay={0} />
                <span>+</span>
              </div>
              <h2>Social followers</h2>
            </div>
          </div>
        )}
      </div>
    </ScrollTrigger>
  );
};

export default StatsComp;
