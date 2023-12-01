import React, { useState } from 'react';
import Link from 'next/link';
import NavLinks from './NavLinks';
import { AiFillCloseCircle, AiOutlineMenuFold } from 'react-icons/ai';
import { Button } from 'antd';
import Image from 'next/image';
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center font-medium z-10 container mx-auto">
      <div className="py-5 flex justify-between lg:w-auto w-full">
        <h1 className='text-[35px] color-blue-700 font-bold'>Crown Travels</h1>
        <div className="text-3xl lg:hidden" onClick={() => setOpen(!open)}>
          <AiOutlineMenuFold />
        </div>
      </div>
      <div>
        <ul className="lg:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
            <Link href="/AboutPage" className="py-7 px-3 inline-block">
              About
            </Link>
            <Link href="/ContactPage" className="py-7 px-3 inline-block">
              Contact
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
      <div className="lg:block hidden">
        <Button className="btn bg-blue-700 text-white mr-3 flex justify-center items-center lg:p-[20px] md:p-[5px] rounded-3xl" href='/AuthPage'>
          Get Started
        </Button>
      </div>
      {/* Mobile nav */}
      <div
        className={`
    lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
    duration-500 ${open ? 'left-0' : 'left-[-100%]'}
    `}
      >
        <div
          className="text-3xl lg:hidden flex justify-end items-end"
          onClick={() => setOpen(!open)}
        >
          <AiFillCloseCircle />
        </div>
        <ul>
          <li>
            <Link href="/" className="py-7 px-3 block">
              Home
            </Link>
            <Link href="/AboutPage" className="py-7 px-3 block">
              About
            </Link>
            <Link href="/ContactPage" className="py-7 px-3 block">
              Contact
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <Button className="btn bg-blue-700 text-white mr-3 flex justify-center items-center lg:p-[20px] md:p-[5px] rounded-3xl">
              Default Button
            </Button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
