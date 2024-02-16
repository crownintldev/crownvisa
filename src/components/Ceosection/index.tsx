import Image from "next/image";
import React from "react";
import { HeadingH1, HeadingH2, HeadingH3, HeadingH6 } from "../Heading";
import { Para14 } from "../Paragraph";

const Ceosection: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10">
        <div className="h-full w-full min-h-full">
          <div className="bg-ceo-image h-full min-h-[300px] md:min-h-[600px] w-full  bg-cover bg-top relative"></div>
        </div>
        <div>
          <div className="relative pt-0 sm:pt-[20px] md:pt-[70px] md:pr-[50px] pb-[50px] pl-8 -ml-[70px] ">
            <div className=" bg-white p-3 rounded-md shadow-md pt-[70px] pl-[15%] pr-[15%] pb-[70px] space-y-3">
           <HeadingH6 title="CEO & CHAIRMAN"/>
           <HeadingH2 className=' text-yellow100' title=" Mubashir Nazir"/>
           <Para14 title={'I am the CEO of our family-owned travel company. We’re a leading provider of domestic & international tourism packages and tours for people from all the world. We’re passionate about what we do and we want to share this passion with you.'}/>
           <Para14 title={'Crown International Travels (Pvt) Ltd was founded by my father in 1990, and has been passed down to me as the new generation. I’m proud of how far we’ve come since then, and I’m excited to take Crown International Travels (Pvt) Ltd to the next level!'}/>
            </div>
            </div>
          </div>
        </div>
     
    </>
  );
};

export default Ceosection;
