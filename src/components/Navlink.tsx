
//@ts-nocheck
import Link from 'next/link';
import React, { useState, Fragment } from 'react';
import DropDown from './dropdown';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import MegaMenu from './MegaManu';




const Navlink = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const toggleDropDown = () => {
    setIsDropDownOpen(!isDropDownOpen);
    if (isMegaMenuOpen) setIsMegaMenuOpen(false);
  };

  const toggleMegaMenu = () => {
    setIsMegaMenuOpen(!isMegaMenuOpen);
    if (isDropDownOpen) setIsDropDownOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Link className='font-semibold' href="/" onClick={onClose}>
        Home
      </Link>
      <div>
      <DropDown
          onLinkClick={onClose}
          toggleMenu={toggleDropDown}
          isOpen={isDropDownOpen}
          alignment="sm:text-start p-3 "
          text="About"
          icon={
            <MdOutlineKeyboardArrowDown
              className="mt-1"
              aria-hidden="true"
            />
          }
          array={[
            {
              items: [
                { id: "1",  title: "About Ceo", subtitle:"CEO",href: "/ceo" },
                { id: "2", title: "About Company", subtitle:"CROWN",href: "/about" },
                { id: "3", title: "Our Team", subtitle:"CROWN TEAM",href: "/team" },
                { id: "4", title: "Company Profile", subtitle:"PDF PROFILE",href: "/" },
              ],
            },
          ]}
        />
      </div>


      <div>
      <MegaMenu
           toggleMenu={toggleMegaMenu}
           isOpen={isMegaMenuOpen}
          className={"  h-fit "}
          alignment="md:overflow-y-hidden z-50 overflow-y-scroll w-full gap-3 
           sm:text-start   "
          text="Service"
          icon={
            <MdOutlineKeyboardArrowDown
              className="mt-1"
              aria-hidden="true"
            />
          }
          
        />
      </div>
      
      <Link className='font-semibold' href="/contact" onClick={onClose}>
        Contact
      </Link>
    </>
  );
};

export default Navlink;
