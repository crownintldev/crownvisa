//@ts-nocheck
import { Breadcrumb } from 'antd';
import React from 'react';
import TeamComp from './TeamComp';
import Mission from './Mission';
import About from './About';

const AboutPage = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(https://www.usinformationsearch.com/wp-content/uploads/2016/05/custom-background-checks-you-can-trust1-5.jpg)`,
        }}
        className="h-[300px] flex justify-center pl-[60px] items-start flex-col"
      >
        <h2 className="text-[35px]">About us</h2>
        <Breadcrumb
          separator=">"
          items={[
            {
              title: 'Home',
              href: '/',
              className: 'bg-white',
            },
            {
              title: 'About',
              href: '/AboutPage',
              className: 'bg-white',
            },
          ]}
        />
      </div>
      <div className="container mx-auto px-4">
        <About />
        <Mission />
        <TeamComp />
      </div>
    </div>
  );
};

export default AboutPage;
