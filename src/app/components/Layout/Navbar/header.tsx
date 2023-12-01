'use client';
import React from 'react';
import Navbar from './Navbar';
import TopHeader from './TopHeader';

const HeaderComp: React.FC = () => {
  return (
    <header className=" text-gray-900 flex flex-col items-center z-10 w-full bg-white">
      <TopHeader />
      <Navbar />
    </header>
  );
};

export default HeaderComp;