"use client";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CustomModal from "../CustomModel";

interface DataType {
  key: number;
  title: string;
  details: string;
  tags: string[];
  countryname: string;
  overview: string;
}

interface TagType {
  id: number;
  title: string;
}

interface Country {
  key: string;
  id: number;
  title: string;
  details: string;
  tagId: number;
  overview: string;
  countryname: string;
  tag: TagType;
}

const CountriesTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const router = useRouter();

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
    router.push("/VisaFormPage/CountriesFormTable");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEditClick = (id: number) => {
    setSelectedId(id);
    router.push(`/VisaFormPage/CountriesEditFormPage?id=${id}`);
  };

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Address",
      dataIndex: "details",
      key: "details",
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
      title: "country name",
      key: "countryname",
      dataIndex: "countryname",
    },
    {
      title: "overview",
      key: "overview",
      dataIndex: "overview",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record: DataType) => (
        <Space size="middle">
          <Button type="primary" className="bg-blue-700">
            Visa Requirements
          </Button>
          <Button type="primary" className="bg-blue-700">
            Travel Itinerary
          </Button>
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
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-end">
        <Button type="primary" className="bg-blue-700 mx-2 my-2">
          Add
        </Button>
        <Button type="primary" className="bg-blue-700 mx-2 my-2">
          Visa Requirements
        </Button>
        <Button type="primary" className="bg-blue-700 mx-2 my-2">
          Travel Itinerary
        </Button>
      </div>
      <Table columns={columns} dataSource={data} bordered={true} className="mx-3" />{" "}
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default CountriesTable;
