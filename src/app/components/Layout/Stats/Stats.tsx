//@ts-nocheck
import React, { useState } from "react";
import StatsComp from "./StatsComp";
import { BsFillBarChartFill } from "react-icons/bs";
import ScrollTrigger from "react-scroll-trigger";

const Stats = () => {
  const [counter, setcounter] = useState(false);
  return (
    <ScrollTrigger onEnter={() => setcounter(true)}>
      <div className="bg-[#FFC224] rounded-3xl shadow-2xl mb-10 ">
        {counter && (
          <div className="py-8 lg:py-16 grid grid-cols-12 gap-6 text-black">
            <div className="lg:col-start-2 lg:col-span-2 md:col-start-1 md:col-span-4 col-span-12 flex flex-col justify-center items-center">
              <StatsComp
                icon={<BsFillBarChartFill size={35} />}
                title="Social followers"
              />
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 flex flex-col justify-center items-center">
              <StatsComp
                icon={<BsFillBarChartFill size={35} />}
                title="Social followers"
              />
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 flex flex-col justify-center items-center">
              <StatsComp
                icon={<BsFillBarChartFill size={35} />}
                title="Social followers"
              />
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 flex flex-col justify-center items-center">
              <StatsComp
                icon={<BsFillBarChartFill size={35} />}
                title="Social followers"
              />
            </div>
            <div className="lg:col-span-2 md:col-span-4 col-span-12 flex flex-col justify-center items-center">
              <StatsComp
                icon={<BsFillBarChartFill size={35} />}
                title="Social followers"
              />
            </div>
          </div>
        )}
      </div>
    </ScrollTrigger>
  );
};

export default Stats;
