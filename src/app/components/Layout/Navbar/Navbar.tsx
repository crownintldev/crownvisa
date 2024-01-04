import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  AiFillCloseCircle,
  AiOutlineDown,
  AiOutlineMenuFold,
} from "react-icons/ai";
import MegaMenu from "./MegaMenu";
import NavLinks from "./NavLinks";
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
        <div>
          <ul className="lg:flex hidden uppercase items-center gap-4 antialiased">
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
              <span className="py-1 px-1 inline-block hover-underline-animation">
                About
              </span>
              <span>
                <AiOutlineDown />
              </span>
              {showDropdown && (
                <div
                  className="dropdown-content w-48 absolute top-[30px] bg-white shadow-none backdrop-blur-sm opacity-100 card-shadow"
                >
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
        </div>
        <div className="lg:block hidden">
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
        </div>
      </div>
    </div>
    // <div className="flex justify-between items-center z-10 font-medium container mx-auto lg:backdrop-blur-lg lg:opacity-90">
    //   <div className="py-1 flex justify-between lg:w-auto w-full">
    //   {/* Mobile nav */}
    //   <div
    //     className={`
    // lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
    // duration-500 ${open ? "left-0" : "left-[-100%]"}
    // `}
    //   >
    //     <div
    //       className="text-3xl lg:hidden flex justify-end items-center"
    //       onClick={() => setOpen(!open)}
    //     >
    //       <AiFillCloseCircle />
    //     </div>
    //     <ul>
    //       <li>
    //         <Link href="/" className="py-2 px-3 block">
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/AboutPage" className="py-2 px-3 block">
    //           About
    //         </Link>
    //       </li>
    //       <li>
    //         <Link href="/ContactPage" className="py-2 px-3 block">
    //           Contact
    //         </Link>
    //       </li>
    //       <NavLinks />
    //       <div className="py-5">
    //         <div className="flex flex-col">
    //           <a href="/AuthPage">
    //             <button className="btn bg-[#FFC224] text-sm text-black mr-3 flex justify-center items-center md:p-[5px]">
    //               Visa Tracking
    //             </button>
    //           </a>
    //           <a href="/AuthPage">
    //             <button className="btn bg-[#FFC224] text-sm text-black mr-3 flex justify-center items-center md:p-[5px]">
    //               Get Started
    //             </button>
    //           </a>
    //         </div>
    //       </div>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Navbar;
