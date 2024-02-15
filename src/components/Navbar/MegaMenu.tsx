//@ts-nocheck
import React, { useState, useRef } from 'react';
import { ImCross } from 'react-icons/im';
import { MdOutlineSignalCellularNodata } from 'react-icons/md';
import MegaData from './Megadata';



const MegaMenu = ({ array,className, text, icon, onLinkClick, textSize = 'font-semibold mt-0', alignment = 'left-0' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleBothClicks = () => {
    setIsOpen(!isOpen);
    onLinkClick();
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };

  const openDropdown = () => {
    setIsOpen(true);
  };

  const dropdata = [
    { id: '1', title: 'Services', content: <MdOutlineSignalCellularNodata/> },
    { id: '2', title: 'Download / Install', content: <MegaData/> },
    { id: '3', title: 'Technology', content: <MegaData/> },
    { id: '4', title: 'Your Account', content: <MegaData/> },
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  console.log(activeTab.content)

  return (
    <div className={`inline-block  ${textSize}`}>
      <button
        onClick={toggleMenu}
        className={`inline-flex  font-semibold  ${text && text} ${icon && icon}`}
      >
        {text && text}
        {icon && icon}
      </button>
      {isOpen && (
        <div
          className={`absolute top-0 ${alignment}  z-20   shadow-lg bg-white text-black `}
  
          ref={dropdownRef}

        >
          <div onClick={toggleMenu}  className='border-2 hover:scale-105 hover:border-yellow100 duration-300 transition rounded-md flex p-2 items-center justify-center w-10'>
            <ImCross />
          </div>
          <div className='flex gap-3 h-screen' >
          <div className={` ${className}  p-2 pt-5 w-full md:w-3/12  `}>
            {
              dropdata.map((array , index)=>(
                <div key={index}
                onClick={() => handleTabClick(index)}
                className={`${
                    activeTab === index ? 'active  bg-yellow100 text-primary-white' : ''
                  } p-2 rounded-md mt-2 mb-2 hover:bg-yellow100 hover:text-white transition duration-300`}>
                <h6>{array.title}</h6>
              </div> 
              ))
            }
           
          </div>
          <div onClick={handleBothClicks}  className={`${className} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-9/12 pb-[30vh]`}>
            {dropdata[activeTab].content}
          </div>
       
          </div>
          
        
        </div>
      )}
    </div>
  );
};

export default MegaMenu;