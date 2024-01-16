'use client';
import React from 'react';
import Navbar from './Navbar';
import TopHeader from './TopHeader';

const HeaderComp: React.FC = () => {
  return (
    <header className=" flex flex-col items-center z-10 w-full bg-white lg:fixed">
      <TopHeader />
      <Navbar />
    </header>
  );
};

export default HeaderComp;
