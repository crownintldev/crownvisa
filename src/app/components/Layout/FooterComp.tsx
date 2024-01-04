import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineGooglePlus, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa6';
import Link from 'next/link';

const FooterComp = () => {
  return (
    <div className='w-full antialiased'>
      <div className="bg-black py-[30px] md:px-2 px-2 text-white">
        <div className="container mx-auto grid grid-cols-12 gap-6">
          <div className=" lg:col-span-3 md:col-start-1 md:col-span-4 col-span-6">
            <h2 className="text-[20px] font-bold py-3">About us</h2>
            <p>
              Earnest team committed delivering the best in industry. Were
              more than happy to deliver you the best! Reach out. to partner
              with us.
            </p>
            <div className="flex mt-3">
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
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h2 className="text-[20px] font-bold py-3">Quick Links</h2>
            <ul>
              <li className="py-1">
                <Link href="">HOME</Link>
              </li>
              <li className="py-1">
                <Link href="">ABOUT</Link>
              </li>
              <li className="py-1">
                <Link href="">OUR TEAM</Link>
              </li>
              <li className="py-1">
                <Link href="">DROPBOXES</Link>
              </li>
              <li className="py-1">
                <Link href="">COMPANY HISTORY</Link>
              </li>
              <li className="py-1">
                <Link href="">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h2 className="text-[20px] font-bold py-3">
              Product & Services
            </h2>
            <ul>
              <li className="py-1">
                <Link href="">VISA SERVICES</Link>
              </li>
              <li className="py-1">
                <Link href="">AIR TICKETS</Link>
              </li>
              <li className="py-1">
                <Link href="">HAJJ & UMRAH</Link>
              </li>
              <li className="py-1">
                <Link href="">TOURS & HOLIDAYS</Link>
              </li>
              <li className="py-1">
                <Link href="">TRAVEL INSURANCE</Link>
              </li>
              <li className="py-1">
                <Link href="">RENT A CAR</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h2 className="text-[20px] font-bold py-3">Contact US</h2>
            <p className="py-1">Email: info@cloudi5.com</p>
            <p className="py-1">Phone: +91 91599 13344</p>
            <p className="py-1">Phone: +91 97874 67575</p>
            <p className="py-2">
              Address: #24, MK SQURE 2nd Floor, Sri Vari Ramakrishna Garden,
              Sivanandapuram, Coimbatore-06, Tamilnadu.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fe720f]">
        <div className="container mx-auto p-3 flex justify-between">
          <p>Copyright© 2022 Cloudi5 Technologies. All Rights Reserved.</p>
          <p>
            <Link href="" className="mx-2">
              Terms and Conditions
            </Link>
            |
            <Link href="" className="mx-2">
              Cancellation Policy{' '}
            </Link>
            |
            <Link href="" className="mx-2">
              Refund Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
