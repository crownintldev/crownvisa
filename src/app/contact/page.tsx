import BreadCrumb from "@/components/BreadCrumb";
import ContactDetails from "@/components/ContactDetails";
import ContactForm from "@/components/ContactForm";
import Contactaddress from "@/components/Contactaddress";
import FooterComp from "@/components/FooterComp";
import Navbar from "@/components/Navbar";
import { Input } from "antd";
import TextArea from "antd/es/input/TextArea";
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
    <Navbar/>
        <BreadCrumb
          link1="/"
          link1title="home"
          link2="/contact"
          link2title="Contact Us"
          title="Contact Us"
        />
        
        <Contactaddress/>
      <ContactForm/>
     
      <FooterComp />
    </>
  );
};

export default Page;
