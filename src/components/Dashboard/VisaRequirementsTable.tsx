//@ts-nocheck
"use client";
import { items } from "@/constants/constants";
import { MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from "@ant-design/icons";
import {
  Button,
  Drawer,
  DrawerProps,
  Layout,
  Menu,
  Modal,
  Space,
  Table,
  theme,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import VisaRequirements from "../Visa Form/VisaRequirements";
import Link from "next/link";

const { Header, Sider, Content } = Layout;

interface DataType {
  key: number;
  title: string;
  description: string;
  country: string;
}

interface VisaRequirements {
  key: string;
  id: number;
  title: string;
  description: string;
  countryid: number;
}

interface Country {
  id: number;
  title: string;
}

const VisaRequirementsTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");
  const [formType, setFormType] = useState<"edit" | "add" | null>(null);
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const params = useParams();
  const countryid = parseInt(params.countryId);
  console.log(countryid);

  const siderWidth = collapsed ? 80 : 200; // Width of the Sider

  // Styles for the Sider, Header, and Content
  const siderStyle = {
    height: "100vh",
    overflow: "auto",
    position: "fixed",
    left: 0,
    zIndex: 2,
  };

  const headerStyle = {
    padding: 0,
    background: colorBgContainer,
    position: "fixed",
    zIndex: 1,
    left: siderWidth,
    width: `calc(100% - ${siderWidth}px)`,
  };

  const contentStyle = {
    marginTop: 64, // Height of the Header
    padding: 24,
    minHeight: "100vh",
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
  };

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log("Selected ID:", selectedId);
      try {
        const countriesResponse = await axios.get("/api/visaapi/countries");
        const countriesData = countriesResponse.data.countries;
        let VisaRequirementsResponse;
        if (countryid) {
          VisaRequirementsResponse = await axios.get(
            `/api/visaapi/visarequirements/countryid/${countryid}`
          );
        } else {
          VisaRequirementsResponse = await axios.get(
            `/api/visaapi/visarequirements`
          );
        }
        const VisaRequirementsData =
          VisaRequirementsResponse.data.visaRequirements;

        const transformedData = VisaRequirementsData.map(
          (visarequirements: VisaRequirements) => {
            const Title = countriesData.find(
              (country: Country) => country.id === visarequirements.countryid
            );
            return {
              key: visarequirements.id,
              title: visarequirements.title,
              description: visarequirements.description,
              country: Title ? [Title.title] : [],
            };
          }
        );
        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedId,countryid]);

  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("Confirmed delete for:", selectedId);
    // Add your delete logic here
    await axios.delete(`/api/visaapi/travelitinerary/${selectedId}`);
    setIsModalOpen(false);
    router.push("/DashboardPage");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = (id: number) => {
    setSelectedId(id);
    setFormType("edit");
    showDrawer();
  };

  const handleAddClick = () => {
    setFormType("add");
    showDrawer();
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      render: (text) => <a className="p-3">{text}</a>,
    },
    {
      title: "Address",
      dataIndex: "description",
      key: "description",
      render: (details) => <div className="line-clamp-1">{details}</div>,
    },
    {
      title: "country",
      key: "country",
      dataIndex: "country",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record: DataType) => (
        <Space size="middle" direction="vertical">
          {/* Bottom two buttons */}
          <Space size="middle">
            <Button
              type="primary"
              className="bg-green-700"
              onClick={() => handleEditClick(record.key)}
            >
              Edit
            </Button>
            <Button
              type="primary"
              className="bg-red-700"
              onClick={() => handleDeleteClick(record.key)}
            >
              Delete
            </Button>
          </Space>
        </Space>
      ),
    },
  ];

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        style={siderStyle}
      >
        <div className="demo-logo-vertical" />
        <div className="flex justify-center items-center">
          <Image
            className="w-30 h-30 rounded-full my-3"
            src="https://www.crownintltravels.com/wp-content/uploads/2023/03/circle-flag-of-malaysia-free-png-980x980.webp"
            alt="Rounded avatar"
            width={50}
            height={50}
          ></Image>
        </div>
        <div className="text-white">
            <Link href="/DashboardPage" className="w-ful">
              <h2 className="p-3 mx-1 mb-2 bg-[#fe720f] rounded-md"><span className="ml-4 mr-3"><PieChartOutlined size={25} /></span>{!collapsed && <span>Visas</span>}</h2>
            </Link>
            <Link href="/FileProcessingFormPage/FileProcessingTable" className="w-ful">
              <h2 className="p-3 mx-1 mb-2 rounded-md"><span className="ml-4 mr-3"><PieChartOutlined size={25} /></span>{!collapsed && <span>File Processing</span>}</h2>
            </Link>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={items}
        />
      </Sider>
      <Layout style={{ marginLeft: siderWidth }}>
        <Header style={headerStyle}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content style={contentStyle}>
          <section className="dark:bg-gray-900 flex items-center">
            <div className=" w-full">
              <div className="relative bg-white dark:bg-gray-800 sm:rounded-lg">
                <div className="flex flex-col items-center justify-between p-4 space-y-3 md:flex-row md:space-y-0 md:space-x-4">
                  <div className="w-full md:w-1/2">
                    <form className="flex items-center">
                      <label htmlFor="simple-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                          placeholder="Search"
                          required
                        />
                      </div>
                    </form>
                  </div>
                  <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                    {!isNaN(countryid) && countryid > 0 && (
                      <button
                        type="button"
                        className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-[#fe720f] hover:bg-[#fe720f] focus:ring-4 focus:ring-[#fe720f] dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                        onClick={() => handleAddClick()}
                      >
                        <svg
                          className="h-3.5 w-3.5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                          />
                        </svg>
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Table
            columns={columns}
            dataSource={data}
            bordered={true}
            className="mx-3 overflow-x-scroll"
          />{" "}
          <Modal
            title="Basic Modal"
            open={isModalOpen}
            onOk={handleConfirmDelete}
            onCancel={handleCloseModal}
            className="modelbtn"
          ></Modal>
          <Drawer
            title={
              formType === "edit"
                ? "Edit Visa Requirement"
                : "Add Visa Requirement"
            }
            placement={placement}
            closable={false}
            onClose={onClose}
            open={open}
            key={placement}
            width={600}
          >
            {formType === "edit" && <VisaRequirements id={selectedId} />}
            {formType === "add" && <VisaRequirements addid={countryid} />}
          </Drawer>
        </Content>
      </Layout>
    </Layout>
  );
};

export default VisaRequirementsTable;
