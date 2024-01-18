import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import React from "react";
import { AiFillCar } from "react-icons/ai";
import { BiSolidTruck } from "react-icons/bi";
import { CiTimer } from "react-icons/ci";
import { FaCcVisa, FaHotel, FaMapLocationDot, FaUsers } from "react-icons/fa6";
import { GiPathDistance } from "react-icons/gi";
import { MdFlightTakeoff } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

type MenuItem = Required<MenuProps>["items"][number];

export const links = [
  {
    id: 1,
    name: "MegaMenu",
    submenu: true,
    sublinks: [
      {
        id: 1,
        Head: "Visa Drop Box",
        sublink: [
          { id: 1, name: "Malaysia Drop Box", link: "/" },
          { id: 2, name: "Vietnam Drop Box", link: "/" },
          { id: 3, name: "Indonesia Drop Box", link: "/" },
        ],
      },
      {
        id: 2,
        Head: "Visa",
        sublink: [
          { id: 1, name: "Malaysia Visa", link: "/" },
          { id: 2, name: "Thailand Visa", link: "/" },
          { id: 3, name: "Indonesia Visa", link: "/" },
          { id: 4, name: "Vietnam Visa", link: "/" },
          { id: 5, name: "Nepal Visa", link: "/" },
          { id: 6, name: "Sri Lanka Visa", link: "/" },
          { id: 7, name: "Singapore Visa", link: "/" },
          { id: 8, name: "Cambodia Visa", link: "/" },
          { id: 9, name: "Egypt Visa", link: "/" },
          { id: 10, name: "Azerbaijan Visa", link: "/" },
          { id: 11, name: "Tajikistan Visa", link: "/" },
          { id: 12, name: "Uzbekistan Visa", link: "/" },
          { id: 13, name: "Jordan Visa", link: "/" },
          { id: 14, name: "Philippine Visa", link: "/" },
          { id: 15, name: "Kenya Visa", link: "/" },
          { id: 16, name: "Turkey Visa", link: "/" },
          { id: 17, name: "Dubai Visa", link: "/" },
        ],
      },
      {
        id: 3,
        Head: "File Processing",
        sublink: [
          { id: 1, name: "Schengen File Processing", link: "/" },
          { id: 2, name: "USA File Processing", link: "/" },
          { id: 3, name: "Canada File Processing", link: "/" },
          { id: 4, name: "UK File Processing", link: "/" },
        ],
      },
      {
        id: 4,
        Head: "Packages",
        sublink: [{ id: 1, name: "Umrah Packages", link: "/" }],
      },
      {
        id: 5,
        Head: "Services",
        sublink: [
          { id: 1, name: "Air Tickets", link: "/" },
          { id: 2, name: "Hajj & Umrah", link: "/" },
          { id: 3, name: "Tours & Holidays", link: "/" },
          { id: 4, name: "Travel Insurance", link: "/" },
          { id: 5, name: "Rent A Car", link: "/" },
        ],
      },
    ],
  },
];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

export const items: MenuItem[] = [
  getItem("Option 1", "1", <PieChartOutlined />),
  getItem("Option 2", "2", <DesktopOutlined />),
  getItem("User", "sub1", <UserOutlined />, [
    getItem("Tom", "3"),
    getItem("Bill", "4"),
    getItem("Alex", "5"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

export const services = [
  {
    icon: <MdFlightTakeoff size={40} />,
    title: "Air Tickets",
    description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
  },
  {
    icon: <FaMapLocationDot size={40} />,
    title: "Visa Services",
    description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
  },
  {
    icon: <GiPathDistance size={40} />,
    title: "Tours & holidays",
    description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
  },
  {
    icon: <FaCcVisa size={40} />,
    title: "File Processing",
    description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
  },
  {
    icon: <AiFillCar size={40} />,
    title: "Travel Insurrance",
    description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
  },
  {
    icon: <FaHotel  size={40} />,
    title: "Hotel Booking",
    description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
  },
  {
    icon: <BiSolidTruck size={40} />,
    title: "Hajj & Umrah",
    description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
  },
  {
    icon: <BiSolidTruck size={40} />,
    title: "Rent a Car",
    description: "We are a leading online ticketing agency that specializes in both domestic and international flights.",
  },
];

export const blogs = [
  {
    date: "Dec 22, 2023",
    CardTitle: "Meet AutoManage, the best AI management tools",
    CardDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://i.ibb.co/Cnwd4q6/image-01.jpg",
  },
  {
    date: "Dec 22, 2023",
    CardTitle: "Meet AutoManage, the best AI management tools",
    CardDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://i.ibb.co/Y23YC07/image-02.jpg",
  },
  {
    date: "Dec 22, 2023",
    CardTitle: "Meet AutoManage, the best AI management tools",
    CardDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://i.ibb.co/7jdcnwn/image-03.jpg",
  },
  {
    date: "Dec 22, 2023",
    CardTitle: "Meet AutoManage, the best AI management tools",
    CardDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image: "https://i.ibb.co/7jdcnwn/image-03.jpg",
  },
];

export const faqs = [
  {
    title: "How to create an account?",
    details: "Amet minim mollit non deserunt ullamco est sit",
  },
  {
    title: "How can I make payment using Paypal?",
    details: "Amet minim mollit non deserunt ullamco est sit",
  },
  {
    title: "Can I cancel my plan?",
    details: "Amet minim mollit non deserunt ullamco est sit",
  },
  {
    title: "How can I reach to support?",
    details: "Amet minim mollit non deserunt ullamco est sit",
  },
];

export const features = [
  {
    icon: <CiTimer size={40} />,
    title: "EMERGENCY SERVICES",
    description:
      "We are available to serve our clients 24/7 for any emergency travel needs, accessible via mobile.",
  },
  {
    icon: <MdFlightTakeoff size={40} />,
    title: "CHARTERED AIR FLIGHTS",
    description:
      "Crown International Aviation, in partnership with its affiliates, offers air ambulance and small plane services.",
  },
  {
    icon: <FaUsers size={40} />,
    title: "B2B SERVICES",
    description:
      "We offer competitive airfares for worldwide destinations, empowering travel agents to increase profitability.",
  },
  {
    icon: <TbWorld size={40} />,
    title: "World Wide Tours",
    description:
      "At Crown International, we specialize in designing holiday and tour packages tailored to our clients’ needs and preferences.",
  },
];
