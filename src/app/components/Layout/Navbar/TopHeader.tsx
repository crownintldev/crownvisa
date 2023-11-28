import React from 'react';
import { AiOutlineGooglePlus, AiOutlineTwitter } from 'react-icons/ai';
import { BiLogoFacebook } from 'react-icons/bi';
import { BsTelephoneFill, BsWhatsapp } from 'react-icons/bs';
import { FaLinkedinIn } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';

const TopHeader = () => {
  return (
    <div className="lg:flex hidden items-center justify-between container mx-auto py-3">
      <div className="flex items-center text-black ml-3">
        <MdEmail className="mx-2" />
        <p className="mx-2 lg:text-[13px] md:text-[10px]">
          needhelp@company.com
        </p>
        <p className="mx-2">/</p>
        <BsTelephoneFill className="mx-2" />
        <p className="mx-2 lg:text-[13px] md:text-[10px]">+60123456789</p>
        <p className="mx-2">/</p>
        <BsTelephoneFill className="mx-2" />
        <p className="mx-2 lg:text-[13px] md:text-[10px]">+60123456789</p>
      </div>
      <div className="text-black flex items-center mr-2 lg:flex-row md:flex-col">
        <p>
          <a href="" className="mx-2 lg:text-[13px] md:text-[10px]">
            Terms and Conditions
          </a>
          |
          <a href="" className="mx-2 lg:text-[13px] md:text-[10px]">
            Cancellation Policy{' '}
          </a>
          |
          <a href="" className="mx-2 lg:text-[13px] md:text-[10px]">
            Refund Policy
          </a>
        </p>
        <div className="flex">
          <p className="border border-black rounded-3xl p-2 mr-2 bg-[#3B5998]">
            <BiLogoFacebook
              size={10}
              style={{ color: 'white', fontSize: '24px' }}
            />
          </p>
          <p className="border border-black rounded-3xl p-2 mr-2 bg-[#DD4B39]">
            <AiOutlineGooglePlus
              size={10}
              style={{ color: 'white', fontSize: '24px' }}
            />
          </p>
          <p className="border border-black rounded-3xl p-2 mr-2 bg-[#55acee]">
            <AiOutlineTwitter
              size={10}
              style={{ color: 'white', fontSize: '24px' }}
            />
          </p>
          <p className="border border-black rounded-3xl p-2 mr-2 bg-[#0077b5]">
            <FaLinkedinIn
              size={10}
              style={{ color: 'white', fontSize: '24px' }}
            />
          </p>
          <p className="border border-black rounded-3xl p-2 mr-2 bg-[#3ead19]">
            <BsWhatsapp
              size={10}
              style={{ color: 'white', fontSize: '24px' }}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
