import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";
import { AiFillCloseCircle, AiOutlineMenuFold } from "react-icons/ai";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between items-center z-10 font-medium container mx-auto">
      <div className="py-1 flex justify-between lg:w-auto w-full">
        <h1 className="text-[35px] text-[#FFC224] font-bold">Crown Travels</h1>
        <div className="text-3xl lg:hidden" onClick={() => setOpen(!open)}>
          <AiOutlineMenuFold />
        </div>
      </div>
      <div>
        <ul className="lg:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-1 px-2 inline-block">
              Home
            </Link>
            <Link href="/AboutPage" className="py-1 px-2 inline-block">
              About
            </Link>
            <Link href="/ContactPage" className="py-1 px-2 inline-block">
              Contact
            </Link>
          </li>
          <NavLinks />
        </ul>
      </div>
      <div className="lg:block hidden">
        <div className="flex">
          <Button
            className="btn bg-[#FFC224] text-black mr-3 flex justify-center items-center lg:p-[10px] md:p-[5px] rounded-3xl"
            href="/AuthPage"
          >
            Visa Tracking
          </Button>
          <Button
            className="btn bg-[#FFC224] text-black mr-3 flex justify-center items-center lg:p-[10px] md:p-[5px] rounded-3xl"
            href="/AuthPage"
          >
            Get Started
          </Button>
        </div>
      </div>
      {/* Mobile nav */}
      <div
        className={`
    lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
    duration-500 ${open ? "left-0" : "left-[-100%]"}
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
            <Link href="/" className="py-2 px-3 block">
              Home
            </Link>
            <Link href="/AboutPage" className="py-2 px-3 block">
              About
            </Link>
            <Link href="/ContactPage" className="py-2 px-3 block">
              Contact
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            <div className="flex flex-col">
              <Button className="btn bg-[#FFC224] text-black mr-3 flex justify-center items-center lg:p-[20px] md:p-[5px] rounded-3xl">
                Visa Tracking
              </Button>
              <Button className="btn bg-[#FFC224] text-black mr-3 flex justify-center items-center lg:p-[20px] md:p-[5px] rounded-3xl">
                Get Started
              </Button>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
