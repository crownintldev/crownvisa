import { Props } from "@/types/interfaces";
import Image from "next/image";
import React from "react";
import { HeadingH1, HeadingH6 } from "../Heading";
import { Para14 } from "../Paragraph";
import Container from "../Container";

const TeamComp: React.FC<Props> = ({ image, alt, title, description }) => {
  return (
    <Container>
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
        <div className="card card0 mt-5 mb-5">
          <div className="borderteam text-start">
            <div className="flex flex-col p-2">
              <HeadingH6 className="text-start text-white " title="Mubashir" />
              <Para14 className="text-start text-white " title="CEO" />
            </div>
          </div>
        </div>
        <div className="card card1 mt-5 mb-5">
          <div className="borderteam text-start">
            <div className="flex flex-col p-2">
              <HeadingH6 className="text-start text-white " title="Mubashir" />
              <Para14 className="text-start text-white " title="CEO" />
            </div>
          </div>
        </div>
        <div className="card card2 mt-5 mb-5">
          <div className="borderteam text-start">
            <div className="flex flex-col p-2">
              <HeadingH6 className="text-start text-white " title="Mubashir" />
              <Para14 className="text-start text-white " title="CEO" />
            </div>
          </div>
        </div>
        <div className="card card2 mt-5 mb-5">
          <div className="borderteam text-start">
            <div className="flex flex-col p-2">
              <HeadingH6 className="text-start text-white " title="Mubashir" />
              <Para14 className="text-start text-white " title="CEO" />
            </div>
          </div>
        </div>
        <div className="card card2 mt-5 mb-5">
          <div className="borderteam text-start">
            <div className="flex flex-col p-2">
              <HeadingH6 className="text-start text-white " title="Mubashir" />
              <Para14 className="text-start text-white " title="CEO" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TeamComp;
