import React from "react";
import { BsWhatsapp } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import {
  AiFillLinkedin,
  AiOutlineGooglePlus,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const FooterComp = () => {
  return (
    <div className="w-full antialiased mt-32">
      <div className="bg-yellowlight py-[30px] md:px-2 px-2 text-white">
        <div className="container mx-auto px-4 grid grid-cols-12 gap-6">
          <div className=" lg:col-span-3 md:col-start-1 md:col-span-4 col-span-6">
            <h2 className="text-[20px] font-bold py-3 underline decoration-[#fe720f] text-black decoration-3">
              About us
            </h2>
            <p className="text-black">
              Earnest team committed delivering the best in industry. Were more
              than happy to deliver you the best! Reach out. to partner with us.
            </p>
            <div className="flex mt-3 gap-3">
              <div className="bg-white hover:bg-blue-800  shadow-lg rounded-full p-1">
                <Link href="#">
                  <BiLogoFacebook
                    size={25}
                    className=" text-blue-800  hover:text-white rounded-full"
                  />
                </Link>
              </div>
              <div className="bg-gradient-to-br from-gradient-purple to-gradient-pink shadow-lg rounded-full p-1">
                <Link href="#">
                  <AiOutlineInstagram
                    size={25}
                    className="   hover:text-white rounded-full"
                  />
                </Link>
              </div>
              <div className="bg-white hover:bg-black shadow-lg rounded-full p-1">
                <Link href="#">
                  <FaXTwitter
                    size={25}
                    className=" text-black  hover:text-white rounded-full"
                  />
                </Link>
              </div>
              <div className="bg-white hover:bg-blue-800 shadow-lg rounded-full p-1">
                <Link href="#">
                  <AiFillLinkedin
                    size={25}
                    className=" text-blue-800  hover:text-white rounded-full"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 md:col-span-4 col-span-6">
            <h2 className="text-[20px] font-bold py-3 underline decoration-[#fe720f] text-black decoration-3">
              Quick Links
            </h2>
            <ul className="text-black">
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
            <h2 className="text-[20px] font-bold py-3 underline text-black decoration-[#fe720f] decoration-3">
              Product & Services
            </h2>
            <ul className="text-black">
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
          <div className="lg:col-span-3 md:col-span-4 col-span-6 text-black">
            <h2 className="text-[20px] font-bold py-3  underline decoration-[#fe720f]  decoration-3">
              Contact US
            </h2>
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
      <div className="bg-yellow100">
        <div className="container mx-auto text-white p-3 flex justify-between">
          <p>Copyright© 2022 Cloudi5 Technologies. All Rights Reserved.</p>
          <p>
            <Link href="" className="mx-2">
              Terms and Conditions
            </Link>
            |
            <Link href="" className="mx-2">
              Cancellation Policy{" "}
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
