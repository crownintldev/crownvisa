import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillCloseCircle,
  AiOutlineDown,
  AiOutlineMenuFold,
} from "react-icons/ai";
import MegaMenu from "./MegaMenu";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <div className="flex justify-between items-center z-10 font-medium container mx-auto lg:backdrop-blur-lg lg:opacity-90">
      <div className="flex justify-between  items-center w-full py-1">
        <div>
          <Image
            src="https://www.crownintltravels.com/wp-content/uploads/2023/07/crown-logo-1.png"
            alt="crown-logo"
            className="ml-3"
            width={70}
            height={70}
          />
        </div>
        <div
          className="text-3xl lg:hidden flex justify-center items-center mr-4"
          onClick={() => setOpen(!open)}
        >
          <AiOutlineMenuFold />
        </div>
        <div className="flex">
          <ul className="lg:flex hidden uppercase items-center gap-4 antialiased mr-4">
            <li>
              <Link
                href="/"
                className="py-1 px-1 inline-block hover-underline-animation"
              >
                Home
              </Link>
            </li>
            <li
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              // onClick={toggleDropdown}
              className="flex items-center group relative"
            >
              <span className="py-1 px-1 inline-block hover-underline-animation ">
                About
              </span>
              <span className="group-hover:rotate-180">
                <AiOutlineDown />
              </span>
              {showDropdown && (
                <div className="dropdown-content w-48 absolute top-[30px] bg-white shadow-none backdrop-blur-sm opacity-100 card-shadow">
                  {/* Your dropdown links here */}
                  <ul>
                    <li className=" px-4 py-2">
                      <Link href="/AboutCeoPage">About Ceo</Link>
                    </li>
                    <li className=" px-4 py-2">
                      <Link href="/AboutPage">About Company</Link>
                    </li>
                    <li className=" px-4 py-2">
                      <Link href="/AboutTeamPage">Our Team</Link>
                    </li>
                    <li className=" px-4 py-2">
                      <Link href="/Option4">Company Profile</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/ContactPage"
                className="py-1 px-1 inline-block hover-underline-animation"
              >
                Contact
              </Link>
            </li>
            <MegaMenu />
          </ul>
          <div className="lg:block hidden">
            <div className="flex">
              <button className="btn bg-[#fe720f] px-3 py-1 rounded-md text-md text-white mr-3 flex justify-center items-center ">
                Visa Tracking
              </button>
              <Link href="/AuthPage">
                <button className="btn bg-[#fe720f] px-3 py-1 rounded-md text-md text-white mr-3 flex justify-center items-center ">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
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
              <Link href="/" className="py-1 px-1 block">
                Home
              </Link>
            </li>
            <li
              onClick={toggleDropdown}
              className="flex flex-col group relative"
            >
              <div className="flex justify-between items-center">
                <span className="py-1 px-1">About</span>
                <span>
                  <AiOutlineDown />
                </span>
              </div>
              {showDropdown && (
                <div>
                  {/* Your dropdown links here */}
                  <ul>
                    <li className=" px-4 py-2">
                      <Link href="/AboutCeoPage">About Ceo</Link>
                    </li>
                    <li className=" px-4 py-2">
                      <Link href="/AboutPage">About Company</Link>
                    </li>
                    <li className=" px-4 py-2">
                      <Link href="/AboutTeamPage">Our Team</Link>
                    </li>
                    <li className=" px-4 py-2">
                      <Link href="/Option4">Company Profile</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link href="/ContactPage" className="py-1 px-1 block">
                Contact
              </Link>
            </li>
            <MegaMenu />
            <div className="flex">
              <button className="btn bg-[#fe720f] px-3 py-1 rounded-md text-md text-white mr-3 flex justify-center items-center ">
                Visa Tracking
              </button>
              <a href="/AuthPage">
                <button className="btn bg-[#fe720f] px-3 py-1 rounded-md text-md text-white mr-3 flex justify-center items-center ">
                  Get Started
                </button>
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
