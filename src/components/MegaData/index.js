import Link from 'next/link'
import React, { useState} from 'react';
import {  HeadingH6 } from '../Heading'
import { Para12, Para14 } from '../Paragraph'
import { Aboutcore } from '../constants';

const MegaData = ({onLinkClick}) => {

      const [isOpen, setIsOpen] = useState(false);

      const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
    
      const closeDropdown = () => {
        setIsOpen(false);
      };
    
      const openDropdown = () => {
        setIsOpen(true);
      };
  
 
  return (
    <>
      {
        Aboutcore.service.map((array ,index)=>(
          <div key={index} className=' '>
          <Link className='' href={`${array.ref}`} >
            <div className="flex flex-col sm:flex-row border md:border-none mt-2 md:mt-0 mb-3 md:mb-0   duration-300 transition gap-3  rounded-md hover:bg-yellow100 hover:text-white px-2 py-2">
              <div>
              <HeadingH6 title={array.title}/>
              <Para12 title={array.para}/>
              </div>
            </div>
          </Link>
      </div>
        ))
      }
   
        
   
    </>
  )
}

export default MegaData