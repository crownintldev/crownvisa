import React from 'react';
import { Button, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai';
import { BsBookHalf, BsFillBuildingFill } from 'react-icons/bs';
import { MdSubject } from 'react-icons/md';
import { BiSupport } from 'react-icons/bi';
import { FaServicestack } from 'react-icons/fa6';

const ContactForm = () => {
  return (
    <div className="grid grid-cols-12 gap-6 mt-3 mb-3">
      <div className="md:col-span-6 col-span-12">
        <h2 className="text-[35px] font-bold">Get in touch</h2>
        <p>Do you want to know more or contact our sales department?</p>
        <div className="flex  mt-3 mb-3 hover:scale-105 transition duration-300">
          <BsBookHalf className="mr-2 pt-2" size={35} />
          <div>
            <h3 className="font-bold">Visit the Knowledge Base</h3>
            <p>
              Crown International Technology: Redefining the Digital Frontier
              Unlocking Digital Potential, Empowering Global Progress.
            </p>
          </div>
        </div>
        <div className="flex mt-3 mb-3 hover:scale-105 transition duration-300">
          <FaServicestack className="mr-2 pt-2" size={35} />
          <div>
            <h3 className="font-bold">View Our Service</h3>
            <p>
              Crown International Technology: Redefining the Digital Frontier
              Unlocking Digital Potential, Empowering Global Progress.
            </p>
          </div>
        </div>
        <div className="flex mt-3 mb-3 hover:scale-105 transition duration-300">
          <BiSupport className="mr-2 pt-2" size={35} />
          <div>
            <h3 className="font-bold">Get in touch with Team</h3>
            <p>
              Crown International Technology: Redefining the Digital Frontier
              Unlocking Digital Potential, Empowering Global Progress.
            </p>
          </div>
        </div>
      </div>
      <div className="md:col-span-6 col-span-12">
        <div className="flex justify-between py-3">
          <Input
            size="large"
            placeholder="Your Name"
            className="mr-2"
            suffix={<AiOutlineUser />}
          />
          <Input
            size="large"
            placeholder="Your Email"
            suffix={<AiOutlineMail />}
          />
        </div>
        <div className="flex justify-between py-3">
          <Input
            size="large"
            placeholder="Your Phone"
            className="mr-2"
            suffix={<AiOutlinePhone />}
          />
          <Input
            size="large"
            placeholder="Your Company"
            suffix={<BsFillBuildingFill />}
          />
        </div>
        <div className="py-3">
          <Input size="large" placeholder="Subject" suffix={<MdSubject />} />
        </div>
        <div className="py-3">
          <TextArea
            rows={4}
            className="resize-none"
            placeholder="comment here..."
          />
        </div>
        <div className="flex justify-start py-3">
          <button className="btn bg-[#FFC224] text-black mr-3 flex justify-center items-center p-[10px]">
            Submit
          </button>
          <button className="btn bg-[#FFC224] text-black mr-3 flex justify-center items-center p-[10px]">
            Reset
          </button>
        </div>
      </div>
      <div className="col-span-12">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6646.779679693498!2d73.05559420000002!3d33.595188200000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df949dbba75c4f%3A0xaab826c83f4d297!2sKFC!5e0!3m2!1sen!2s!4v1698855696743!5m2!1sen!2s"
          style={{ border: '0', width: '100%', height: '400px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
