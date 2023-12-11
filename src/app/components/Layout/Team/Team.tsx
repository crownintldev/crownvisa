import Image from "next/image";
import React from "react";
import TeamComp from "./TeamComp";

const Team = () => {
  return (
    <section className="bg-white">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 max-w-screen-sm lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Our <span className="text-[#FFC224]">team</span>
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Explore the whole collection of open-source web components and
            elements built with the utility classNamees from Tailwind
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <TeamComp
            imageurl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
            alt="Bonnie Avatar"
            name="Bonnie Green"
            details="CEO/Co-founder"
          />
          <TeamComp
            imageurl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/helene-engels.png"
            alt="Helene Avatar"
            name="Helene Engel"
            details="CTO/Co-founder"
          />
          <TeamComp
            imageurl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
            alt="Jese Avatar"
            name="Jese Leos"
            details="SEO & Marketing"
          />
          <TeamComp
            imageurl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/joseph-mcfall.png"
            alt="Joseph Avatar"
            name="Joseph Mcfall"
            details="Sales"
          />
          <TeamComp
            imageurl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png"
            alt="Sofia Avatar"
            name="Lana Byrd"
            details="Web Designer"
          />
          <TeamComp
            imageurl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png"
            alt="Leslie Avatar"
            name="Leslie Livingston"
            details="Graphic Designer"
          />
          <TeamComp
            imageurl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
            alt="Michael Avatar"
            name="Michael Gough"
            details="Web Designer"
          />
          <TeamComp
            imageurl="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
            alt="Neil Avatar"
            name="Neil Sims"
            details="Vue.js Developer"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;
