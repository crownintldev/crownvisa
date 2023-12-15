"use client";
import { Button, Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CustomModal from "../../../utils/CustomModel";

interface DataType {
  key: number;
  title: string;
  description: string;
  country:string;
}

interface VisaRequirements{
    key: string;
    id: number;
    title: string;
    description: string;
    countryid: number;
    countries:CountryType[];
  }

interface CountryType {
  id: number;
  title: string;
}

const VisaRequirementsTable: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      console.log("Selected ID:", selectedId);
      try {
        const visarequirementsResponse = await axios.get("/api/visaapi/visarequirements");
        const visarequirementsdata = visarequirementsResponse.data.visaRequirements;
        console.log("visarequirements data:", visarequirementsdata);

        const transformedData = visarequirementsdata.map((data: VisaRequirements) => {
        //   const tagType = countryTypesData.find(
        //     (tag: TagType) => tag.id === country.tagId
        //   );
          return {
            key: data.id,
            title: data.title,
            description: data.description,
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
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record: DataType) => (
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
      <Table columns={columns} dataSource={data} bordered />{" "}
      <CustomModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default VisaRequirementsTable;
