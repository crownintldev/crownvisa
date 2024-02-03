import BreadCrumb from "@/components/BreadCrumb";
import ContactDetails from "@/components/ContactDetails";
import FooterComp from "@/components/FooterComp";
import HeaderComp from "@/components/Navbar/HeaderComp";
import Newsletter from "@/components/Newsletter";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import Link from "next/link";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import {
  BsBookHalf,
  BsFillBuildingFill,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { FaAddressCard, FaServicestack } from "react-icons/fa6";
import { MdOutlineEmail, MdSubject } from "react-icons/md";

const Page = () => {
  return (
    <>
      <HeaderComp />
      <div className="lg:pt-[120px] antialiased">
        <BreadCrumb
          link1="/"
          link1title="home"
          link2="/ContactPage"
          link2title="Contact Us"
          title="Contact Us"
        />
        <div className="container mx-auto px-4 pt-3">
          <div className="grid grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex hover:scale-105 transition duration-300">
              <ContactDetails
                icon={<MdOutlineEmail className="mr-2 pt-2" size={25} />}
                title="Email"
                desc1="info@crownintltechnology.com"
                desc2="crownintltechnology@gmail.com"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex hover:scale-105 transition duration-300">
              <ContactDetails
                icon={<BsFillTelephoneFill className="mr-2 pt-2" size={25} />}
                title="Phone Number"
                desc1="+92 051 5511155"
                desc2="+92 328 0143786"
              />
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex hover:scale-105 transition duration-300">
              <ContactDetails
                icon={<FaAddressCard className="mr-2 pt-2" size={25} />}
                title="Address"
                desc1="Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road
                Saddar, Rawalpindi, Punjab, Pakistan"
              />
            </div>
          </div>
          <div className="grid grid-cols-12 gap-6 mb-10">
            <div className="md:col-span-6 col-span-12">
              <h2 className="text-[35px] font-bold mb-5 underline decoration-[#fe720f] decoration-3">
                Get in touch
              </h2>
              <p className="mb-5">
                Do you want to know more or contact our sales department?
              </p>
              <div className="flex mb-5 hover:scale-105 transition duration-300">
                <ContactDetails
                  icon={<BsBookHalf className="mr-4 pt-2" size={35} />}
                  title="Visit the Knowledge Base"
                  desc1="Crown International Technology: Redefining the Digital
                Frontier Unlocking Digital Potential, Empowering Global
                Progress."
                />
              </div>
              <div className="flex mb-5  hover:scale-105 transition duration-300">
                <ContactDetails
                  icon={<FaServicestack className="mr-4 pt-2" size={35} />}
                  title="View Our Service"
                  desc1="Crown International Technology: Redefining the Digital
                  Frontier Unlocking Digital Potential, Empowering Global
                  Progress."
                />
              </div>
              <div className="flex mb-5 hover:scale-105 transition duration-300">
                <ContactDetails
                  icon={<BiSupport className="mr-4 pt-2" size={35} />}
                  title="Get in touch with Team"
                  desc1="Crown International Technology: Redefining the Digital
                  Frontier Unlocking Digital Potential, Empowering Global
                  Progress."
                />
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
                <Input
                  size="large"
                  placeholder="Subject"
                  suffix={<MdSubject />}
                />
              </div>
              <div className="py-3">
                <TextArea
                  rows={4}
                  className="resize-none"
                  placeholder="comment here..."
                />
              </div>
              <div className="flex justify-start py-3">
                <button className="btn bg-[#fe720f] px-3 py-1 rounded-md text-md text-white mr-3 flex justify-center items-center ">
                  Submit
                </button>
                <button className="btn bg-[#fe720f] px-3 py-1 rounded-md text-md text-white mr-3 flex justify-center items-center ">
                  Reset
                </button>
              </div>
            </div>
            <div className="col-span-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6646.779679693498!2d73.05559420000002!3d33.595188200000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df949dbba75c4f%3A0xaab826c83f4d297!2sKFC!5e0!3m2!1sen!2s!4v1698855696743!5m2!1sen!2s"
                style={{ border: "0", width: "100%", height: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
          <Newsletter />
        </div>
      </div>
      <FooterComp />
    </>
  );
};

export default Page;
