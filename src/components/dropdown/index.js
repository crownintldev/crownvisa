import React, { useState, useRef } from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import Link from 'next/link';
import { HeadingH4, HeadingH5 } from '../Heading';


const DropDown = ({ array, text, icon, onLinkClick, textSize = 'font-semibold mt-0', alignment = 'left-0', toggleMenu, isOpen, ...otherProps
}) => {
  const dropdownRef = useRef(null);

  



  return (
    <div className={`inline-block  ${textSize}`} >
      <button
        onClick={toggleMenu}
        className={`inline-flex  font-semibold  ${text && text} ${icon && icon}`}
      >
        {text && text}
        {icon && icon}
      </button>
      {isOpen && (
        <div 
          className={`fixed ${alignment} z-20 rounded-md shadow bg-white text-black`} >
          {
            array.map((array, index) => (
              <div key={index}  
          ref={dropdownRef}>
                <HeadingH5 className="mb-3" title={array.Category} />
                {array.items.map((items, index) => (
                  <div onClick={onLinkClick} key={index}>
                    <Link className='' href={items.href}  key={index}>
                      <div className="flex gap-3 md:gap-5 justify-between items-center rounded-md  hover:bg-yellow100 hover:text-white px-2 py-2">
                        {items.title}
                        <div className='bg-white shadow text-[10px] font-bold text-yellow100 py-1 px-2 rounded-full'>
                         {items.subtitle}
                        </div>
                      </div>
                    </Link>
                    
                  </div>
                ))}
              </div>
            ))
          }
        </div>
      )}
    </div>
  );
};

export default DropDown;
