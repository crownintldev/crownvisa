import { Button } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillCloseCircle,
  AiOutlineDown,
  AiOutlineMenuFold,
} from "react-icons/ai";
import NavLinks from "./NavLinks";
import Image from "next/image";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="flex justify-between items-center z-10 font-medium container mx-auto">
      <div className="py-1 flex justify-between lg:w-auto w-full">
        <Image
          src="https://www.crownintltravels.com/wp-content/uploads/2023/07/crown-logo-1.png"
          alt="crown-logo"
          className="ml-3"
          width={70}
          height={70}
        />
        {/* <h1 className="text-[35px] text-[#FFC224] font-bold">Crown Travels</h1> */}
        <div className="text-3xl lg:hidden flex justify-center items-center mr-4" onClick={() => setOpen(!open)}>
          <AiOutlineMenuFold />
        </div>
      </div>
      <div>
        <ul className="lg:flex hidden uppercase items-center gap-4 font-[Poppins]">
          <li>
            <Link href="/" className="py-1 px-1 inline-block">
              Home
            </Link>
          </li>
          <li
            // onMouseEnter={() => setShowDropdown(true)}
            // onMouseLeave={() => setShowDropdown(false)}
            onClick={toggleDropdown}
            className="flex items-center group"
          >
            <span className="py-1 px-1 inline-block">About</span>
            <span>
              <AiOutlineDown />
            </span>
            {showDropdown && (
              <div className="dropdown-content  absolute top-[90px] left-[530px] bg-white">
                {/* Your dropdown links here */}
                <ul>
                  <li className="border-b border-black px-10 py-2">
                    <Link href="/About/AboutCeoPage">About Ceo</Link>
                  </li>
                  <li className="border-b border-black px-10 py-2">
                    <Link href="/About/AboutPage">About Company</Link>
                  </li>
                  <li className="border-b border-black px-10 py-2">
                    <Link href="/About/AboutTeamPage">Our Team</Link>
                  </li>
                  <li className="border-b border-black px-10 py-2">
                    <Link href="/Option4">Company Profile</Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <li>
            <Link href="/ContactPage" className="py-1 px-1 inline-block">
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
          className="text-3xl lg:hidden flex justify-end items-center"
          onClick={() => setOpen(!open)}
        >
          <AiFillCloseCircle />
        </div>
        <ul>
          <li>
            <Link href="/" className="py-2 px-3 block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/AboutPage" className="py-2 px-3 block">
              About
            </Link>
          </li>
          <li>
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
