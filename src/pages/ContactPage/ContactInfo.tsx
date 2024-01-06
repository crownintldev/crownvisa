import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaAddressCard } from 'react-icons/fa6';

const ContactInfo = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mb-10">
      <div className="lg:col-start-2 lg:col-span-3 md:col-span-6 col-span-12 flex hover:scale-105 transition duration-300">
        <BiSupport className="mr-2 pt-2" size={25} />
        <div className="flex flex-col">
          <h2 className="font-bold">Email:</h2>
          <p>info@crownintltechnology.com</p>
          <p>crownintltechnology@gmail.com</p>
        </div>
      </div>
      <div className="lg:col-span-3 md:col-span-6 col-span-12 flex hover:scale-105 transition duration-300">
        <BsFillTelephoneFill className="mr-2 pt-2" size={25} />
        <div className="flex flex-col">
          <h2 className="font-bold">Phone Number:</h2>
          <p>+92 051 5511155</p>
          <p>+92 328 0143786</p>
        </div>
      </div>
      <div className="lg:col-span-3 md:col-span-6 col-span-12 flex hover:scale-105 transition duration-300">
        <FaAddressCard className="mr-2 pt-2" size={25} />
        <div className="flex flex-col">
          <h2 className="font-bold">Address:</h2>
          <p>
            Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road Saddar,
            Rawalpindi, Punjab, Pakistan
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
