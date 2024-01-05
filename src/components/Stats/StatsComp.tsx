import React from "react";
import CountUp from "react-countup";

interface Props {
  icon: any;
  title: string;
}

const StatsComp: React.FC<Props> = ({ icon, title }) => {
  return (
    <>
      {icon}
      <div className="text-center text-[40px]">
        <CountUp start={0} end={100} duration={2} delay={0} />
        <span>+</span>
      </div>
      <h2>{title}</h2>
    </>
  );
};

export default StatsComp;
