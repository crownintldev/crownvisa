import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps } from "antd";
import React from "react";

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
