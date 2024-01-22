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
        <div className="h-[400px] flex flex-col rounded-3xl mx-[35px] bg-[url('https://motivoweb.com/saga/wp-content/themes/saga/assets/images/bg-titlebar.jpg')] bg-fixed bg-cover bg-no-repeat mb-10 relative">
          <div className="w-full h-full bg-gray-700 opacity-50 rounded-3xl absolute top-0 left-0"></div>
          <div className="flex justify-center items-center h-full flex-col z-10">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-medium  dark:text-gray-400 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3  mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <Link
                      href="/ContactPage"
                      className="ms-1 text-sm font-medium  md:ms-2 dark:text-gray-400 dark:hover:text-white"
                    >
                      ContactPage
                    </Link>
                  </div>
                </li>
              </ol>
            </nav>
            <h2 className="text-6xl">Contact Us</h2>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-3">
          <div className="grid grid-cols-12 gap-10 mb-10">
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex hover:scale-105 transition duration-300">
              <MdOutlineEmail className="mr-2 pt-2" size={25} />
              <div className="flex flex-col">
                <h2 className="font-bold">Email:</h2>
                <p>info@crownintltechnology.com</p>
                <p>crownintltechnology@gmail.com</p>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex hover:scale-105 transition duration-300">
              <BsFillTelephoneFill className="mr-2 pt-2" size={25} />
              <div className="flex flex-col">
                <h2 className="font-bold">Phone Number:</h2>
                <p>+92 051 5511155</p>
                <p>+92 328 0143786</p>
              </div>
            </div>
            <div className="lg:col-span-4 md:col-span-6 col-span-12 flex hover:scale-105 transition duration-300">
              <FaAddressCard className="mr-2 pt-2" size={25} />
              <div className="flex flex-col">
                <h2 className="font-bold">Address:</h2>
                <p>
                  Office No. 406 , 4th Floor Rizwan Arcade I, Adam Jee Road
                  Saddar, Rawalpindi, Punjab, Pakistan
                </p>
              </div>
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
                <BsBookHalf className="mr-4 pt-2" size={35} />
                <div>
                  <h3 className="font-bold">Visit the Knowledge Base</h3>
                  <p>
                    Crown International Technology: Redefining the Digital
                    Frontier Unlocking Digital Potential, Empowering Global
                    Progress.
                  </p>
                </div>
              </div>
              <div className="flex mb-5  hover:scale-105 transition duration-300">
                <FaServicestack className="mr-4 pt-2" size={35} />
                <div>
                  <h3 className="font-bold">View Our Service</h3>
                  <p>
                    Crown International Technology: Redefining the Digital
                    Frontier Unlocking Digital Potential, Empowering Global
                    Progress.
                  </p>
                </div>
              </div>
              <div className="flex mb-5 hover:scale-105 transition duration-300">
                <BiSupport className="mr-4 pt-2" size={35} />
                <div>
                  <h3 className="font-bold">Get in touch with Team</h3>
                  <p>
                    Crown International Technology: Redefining the Digital
                    Frontier Unlocking Digital Potential, Empowering Global
                    Progress.
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
