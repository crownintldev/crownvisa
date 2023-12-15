import { BiLogoFacebook } from "react-icons/bi";
import { BsTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const TopHeader = () => {
  return (
    <div className="lg:flex hidden items-center justify-between container mx-auto py-1 border-b-2 border-black">
      <div className="flex items-center text-black ml-3">
        <MdEmail className="mx-1 text-black" />
        <p className="mx-1 lg:text-[13px] md:text-[10px]">
          needhelp@company.com
        </p>
        <p className="mx-1">/</p>
        <BsTelephoneFill className="mx-1 text-black" />
        <p className="mx-1 lg:text-[13px] md:text-[10px]">+60123456789</p>
        <p className="mx-1">/</p>
        <BsTelephoneFill className="mx-1 text-black" />
        <p className="mx-1 lg:text-[13px] md:text-[10px]">+60123456789</p>
      </div>
      <div className="text-black flex items-center mr-2 lg:flex-row md:flex-col">
        <p>
          <a href="" className="mx-1 lg:text-[13px] md:text-[10px]">
            Terms and Conditions
          </a>
          |
          <a href="" className="mx-1 lg:text-[13px] md:text-[10px]">
            Cancellation Policy{" "}
          </a>
          |
          <a href="" className="mx-1 lg:text-[13px] md:text-[10px]">
            Refund Policy
          </a>
        </p>
        <div className="flex">
          <BiLogoFacebook
            size={20}
            style={{ color: "#3B5998", fontSize: "24px" }}
            className="mx-1"
          />
          <FaInstagram
            size={20}
            style={{ color: "#DD4B39", fontSize: "24px" }}
            className="mx-1"
          />
          <BsWhatsapp
            size={20}
            style={{ color: "#3ead19", fontSize: "24px" }}
            className="mx-1"
          />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
