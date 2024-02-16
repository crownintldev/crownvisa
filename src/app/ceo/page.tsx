import BreadCrumb from "@/components/BreadCrumb";
import Image from "next/image";
import FooterComp from "../../components/FooterComp";
import Navbar from "@/components/Navbar";
import Ceosection from "@/components/Ceosection";
import Ceomessage from "@/components/Ceomessage";
import Testimonial from "@/components/Testimonial/Testimonial";

const page = () => {
  return (
    <>
      <Navbar />
      <Ceosection />
      <Ceomessage/>
      <Testimonial/>
      <FooterComp />
    </>
  );
};

export default page;
