//@ts-nocheck
"use client";
import {
  Avatar,
  Button,
  Drawer,
  DrawerProps,
  Modal,
  Space,
  Table,
  Tag,
} from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CountriesEditForm from "../Visa Form/CountriesEditForm";
import CountriesForm from "../Visa Form/countriesForm";
import { Country } from "@/types/interfaces";
import { TagType } from "@prisma/client";

interface DataType {
  key: number;
  countryflagurl: string;
  title: string;
  details: string;
  tags: string[];
  countryname: string;
  overview: string;
}

const CountriesTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");
  const [formType, setFormType] = useState<"edit" | "add" | null>(null);

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
        const countryTypesResponse = await axios.get(
          "/api/visaapi/countriestype"
        );
        const countriesResponse = await axios.get("/api/visaapi/countries");

        const countryTypesData = countryTypesResponse.data.countrytype;
        const countriesData = countriesResponse.data.countries;

        const transformedData = countriesData.map((country: Country) => {
          const tagType = countryTypesData.find(
            (tag: TagType) => tag.id === country.tagId
          );
          return {
            key: country.id,
            countryflagurl: country.countryflagurl,
            title: country.title,
            details: country.details,
            tags: tagType ? [tagType.title] : [],
            countryname: country.countryname,
            overview: country.overview,
          };
        });
        setData(transformedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedId]);

  const handleDeleteClick = (id: number) => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    console.log("Confirmed delete for:", selectedId);
    // Add your delete logic here
    await axios.delete(`/api/visaapi/countries/${selectedId}`);
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
      title: "Flag",
      dataIndex: "countryflagurl",
      key: "countryflagurl",
      render: (text) => (
        <Avatar
          src={<Image src={text} alt="avatar" width={100} height={100} />}
          size={45}
        />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a className="p-3">{text}</a>,
    },
    {
      title: "Details",
      dataIndex: "details",
      key: "details",
      render: (details) => <div className="line-clamp-1">{details}</div>,
    },
    {
      title: "Visa Type",
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
      title: "country name",
      key: "countryname",
      dataIndex: "countryname",
    },
    {
      title: "overview",
      key: "overview",
      dataIndex: "overview",
      render: (overview) => <div className="line-clamp-1">{overview}</div>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record: DataType) => (
        <Space size="middle" direction="vertical">
          {/* Top two buttons */}
          <Space size="middle">
            <Link href={`/VisaFormPage/VisaRequirementsTable/${record.key}`}>
              <Button type="primary" className="bg-[#fe720f] hover:bg-[#fe720f]">
                Visa Requirements
              </Button>
            </Link>
            <Link href={`/VisaFormPage/TravelItineraryTable/${record.key}`}>
              <Button type="primary" className="bg-[#fe720f] hover-bg-[#fe720f]">
                Travel Itinerary
              </Button>
            </Link>
          </Space>

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
    <>
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
                        className="w-5 h-5 dark:text-gray-400"
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
                      className="block w-full p-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                      placeholder="Search"
                      required
                    />
                  </div>
                </form>
              </div>
              <div className="flex flex-col items-stretch justify-end flex-shrink-0 w-full space-y-2 md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
                <button
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-[#fe720f] hover:bg-[#fe720f] dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
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
                <Link
                  href="VisaFormPage/VisaRequirementsTable"
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-[#fe720f] hover:bg-[#fe720f] dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  Visa Requirements
                </Link>
                <Link
                  href="VisaFormPage/TravelItineraryTable"
                  type="button"
                  className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-[#fe720f] hover:bg-[#fe720f] dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >
                  Travel Itinerary
                </Link>
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
        title={formType === "edit" ? "Edit Country" : "Add Country"}
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        width={600}
      >
        {formType === "edit" && <CountriesEditForm id={selectedId} />}
        {formType === "add" && <CountriesForm />}
      </Drawer>
    </>
  );
};

export default CountriesTable;
