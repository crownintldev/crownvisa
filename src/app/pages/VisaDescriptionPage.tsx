"use client";
import React from "react";
import { Card, Timeline } from "antd";

import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
    CheckCircleTwoTone,
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar } from "antd";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";

const { Meta } = Card;

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>Invite {record.name}</a>
        <a>Delete</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const VisaDescriptionPage = () => {
  return (
    <div className="bg-[#F3F3F3]">
      <div className=" container mx-auto flex justify-between border p-5 bg-white">
        <div className="w-[50%]">
          <h1 className="font-bold text-[35px]">Visa Description Page</h1>
          <div className="my-3">
            <h2 className="text-[25px]">Required Documents</h2>
            <p className="text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              dolor ut esse eligendi velit accusantium distinctio pariatur,
              facere sunt accusamus asperiores? Nam eaque, et ut vitae repellat
              exercitationem quisquam unde.
            </p>
          </div>
          <div className="my-3">
            <h2>About The Tour</h2>
            <Table columns={columns} dataSource={data} pagination={false} />
          </div>
          <div className="my-3">
            <h2>Detailed Day</h2>
            <Timeline
              className="my-3"
              items={[
                {
                  children: "Create a services site 2015-09-01",
                },
                {
                  children: "Solve initial network problems 2015-09-01",
                },
                {
                  children: "Technical testing 2015-09-01",
                },
                {
                  children: "Network problems being solved 2015-09-01",
                },
              ]}
            />
          </div>
          <div className="my-3">
            <h2>Location</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6646.779679693498!2d73.05559420000002!3d33.595188200000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df949dbba75c4f%3A0xaab826c83f4d297!2sKFC!5e0!3m2!1sen!2s!4v1698855696743!5m2!1sen!2s"
              style={{ border: "0", width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="my-3">
            <Card style={{ width: "100%" }}>
              <Meta
                avatar={
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </div>
        </div>
        <div className="w-[40%]">
          <Card
            title="Trip Information"
            style={{ width: "100%" }}
            headStyle={{background:'#253D52',color:'white'}}
            className="mb-4"
          >
            <p><CheckCircleTwoTone className="mr-5" />Location : Rio,Brazil</p>
            <p><CheckCircleTwoTone className="mr-5" />Arrival Date: Nov 12, 2017</p>
            <p><CheckCircleTwoTone className="mr-5" />Departure Date: Nov 21, 2017</p>
            <p><CheckCircleTwoTone className="mr-5" />Free Sightseeing & Hotel</p>
          </Card>
          <Card
            title="Trip Information"
            style={{ width: "100%" }}
            headStyle={{background:'#253D52',color:'white'}}
          >
            <div className="flex">
            <p className="border border-black rounded-3xl p-2 mr-2 bg-[#3B5998]"><BiLogoFacebook size={25} style={{ color: 'white', fontSize: '24px' }}/></p>
            <p className="border border-black rounded-3xl p-2 mr-2 bg-[#DD4B39]"><AiOutlineGooglePlus size={25} style={{ color: 'white', fontSize: '24px' }}/></p>
            <p className="border border-black rounded-3xl p-2 mr-2 bg-[#55acee]"><AiOutlineTwitter size={25} style={{ color: 'white', fontSize: '24px' }}/></p>
            <p className="border border-black rounded-3xl p-2 mr-2 bg-[#0077b5]"><FaLinkedinIn size={25} style={{ color: 'white', fontSize: '24px' }}/></p>
            <p className="border border-black rounded-3xl p-2 mr-2 bg-[#3ead19]"><BsWhatsapp size={25} style={{ color: 'white', fontSize: '24px' }}/></p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VisaDescriptionPage;
