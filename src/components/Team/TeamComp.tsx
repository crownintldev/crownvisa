import { Props } from "@/types/interfaces";
import Image from "next/image";
import React from "react";
import { HeadingH1 } from "../Heading";

const TeamComp: React.FC<Props> = ({ image, alt, title, description }) => {
  return (
    <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <div className="card card0 mt-5 mb-5">
      <div className="borderteam text-start">
        <div className="flex flex-col p-2">
        <HeadingH1 className="text-start text-white text-2xl" title="Mubashir"/>
        <HeadingH1 className="text-start text-white text-2xl" title="CEO"/>
        </div>
        <div className="icons">
          <i className="fa fa-codepen" aria-hidden="true" />
          <i className="fa fa-instagram" aria-hidden="true" />
          <i className="fa fa-dribbble" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-facebook" aria-hidden="true" />
        </div>
      </div>
    </div>
    <div className="card card1 mt-5 mb-5">
      <div className="borderteam text-start">
        <div className="flex flex-col p-2">
        <HeadingH1 className="text-start text-white text-2xl" title="Mubashir"/>
        <HeadingH1 className="text-start text-white text-2xl" title="CEO"/>
        </div>
        <div className="icons">
          <i className="fa fa-codepen" aria-hidden="true" />
          <i className="fa fa-instagram" aria-hidden="true" />
          <i className="fa fa-dribbble" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-facebook" aria-hidden="true" />
        </div>
      </div>
    </div>
    <div className="card card2 mt-5 mb-5">
      <div className="borderteam text-start">
        <div className="flex flex-col p-2">
        <HeadingH1 className="text-start text-white text-2xl" title="Mubashir"/>
        <HeadingH1 className="text-start text-white text-2xl" title="CEO"/>
        </div>
        <div className="icons">
          <i className="fa fa-codepen" aria-hidden="true" />
          <i className="fa fa-instagram" aria-hidden="true" />
          <i className="fa fa-dribbble" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-facebook" aria-hidden="true" />
        </div>
      </div>
    </div>
    <div className="card card0 mt-5 mb-5">
      <div className="borderteam text-start">
        <div className="flex flex-col p-2">
        <HeadingH1 className="text-start text-white text-2xl" title="Mubashir"/>
        <HeadingH1 className="text-start text-white text-2xl" title="CEO"/>
        </div>
        <div className="icons">
          <i className="fa fa-codepen" aria-hidden="true" />
          <i className="fa fa-instagram" aria-hidden="true" />
          <i className="fa fa-dribbble" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-facebook" aria-hidden="true" />
        </div>
      </div>
    </div>
    <div className="card card0 mt-5 mb-5">
      <div className="borderteam text-start">
        <div className="flex flex-col p-2">
        <HeadingH1 className="text-start text-white text-2xl" title="Mubashir"/>
        <HeadingH1 className="text-start text-white text-2xl" title="CEO"/>
        </div>
        <div className="icons">
          <i className="fa fa-codepen" aria-hidden="true" />
          <i className="fa fa-instagram" aria-hidden="true" />
          <i className="fa fa-dribbble" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-facebook" aria-hidden="true" />
        </div>
      </div>
    </div>
    <div className="card card0 mt-5 mb-5">
      <div className="borderteam text-start">
        <div className="flex flex-col p-2">
        <HeadingH1 className="text-start text-white text-2xl" title="Mubashir"/>
        <HeadingH1 className="text-start text-white text-2xl" title="CEO"/>
        </div>
        <div className="icons">
          <i className="fa fa-codepen" aria-hidden="true" />
          <i className="fa fa-instagram" aria-hidden="true" />
          <i className="fa fa-dribbble" aria-hidden="true" />
          <i className="fa fa-twitter" aria-hidden="true" />
          <i className="fa fa-facebook" aria-hidden="true" />
        </div>
      </div>
    </div>
    

  </div>
  );
};

export default TeamComp;
