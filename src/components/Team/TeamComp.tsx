import Image from "next/image";
import React from "react";

interface Props {
  imageurl: string;
  alt: string;
  name: string;
  details: string;
}

const TeamComp: React.FC<Props> = ({ imageurl, alt, name, details }) => {
  return (
    <div className="text-center text-gray-500 dark:text-gray-400 border bg-white overflow-hidden relative group hover:scale-105 transition-300">
      <Image
        className="w-full"
        src={imageurl}
        alt={alt}
        height={100}
        width={100}
      />
      <div className="absolute transition-all duration-1500 bottom-5 w-full right-0 bg-[#FFC224] rounded-full">
        <h3 className="mb-1 text-2xl font-bold tracking-tight text-black dark:text-white">
          <a href="#">{name}</a>
        </h3>
        <p className="text-black">{details}</p>
      </div>
    </div>
  );
};

export default TeamComp;
