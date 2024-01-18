//@ts-nocheck
"use client";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Select } from "antd";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import InputComp from "../UI components/InputComp";
import { toast } from "react-toastify";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const { TextArea } = Input;

interface TagType {
  id: number;
  title: string;
}

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const fetchCountryTypes = async () => {
  const { data } = await axios.get("/api/visaapi/countriestype");
  return data.countrytype;
};

const postCountryData = async (countryData) => {
  const response = await axios.post("/api/visaapi/countries", countryData);
  return response.data;
};

const postVisaRequirements = async (VisaRequirements) => {
  const response = await axios.post(
    "/api/visaapi/visarequirements",
    VisaRequirements
  );
  return response.data;
};

const postTravelItinerary = async (TravelItinerary) => {
  const response = await axios.post(
    "/api/visaapi/travelitinerary",
    TravelItinerary
  );
  return response.data;
};

const CountriesForm: React.FC = () => {
  const router = useRouter();
  const [title, settitle] = useState("");
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  const [tagTypes, setTagTypes] = useState<TagType[]>([]); // New state variable
  const [countryData, setCountryData] = useState(null);
  const [flagimg, setflagimg] = useState();
  const [flagurl, setflagurl] = useState();
  const [bgimg, setbgimg] = useState();
  const [bgurl, setbgurl] = useState();

  // useQuery for initial data fetch
  const { data: countryTypesData } = useQuery(
    "countryTypes",
    fetchCountryTypes,
    {
      onSuccess: (data) => {
        setTagTypes(data); // Update state when data is successfully fetched
      },
    }
  );

  const OverviewChange = (content: string) => {
    setText(content);
  };

  const mutation = useMutation(postCountryData, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("Country data posted successfully");
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting country data:", error);
    },
  });

  const visarequirementmutation = useMutation(postVisaRequirements, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("Visa Requirements data posted successfully");
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting Visa Requirements data:", error);
    },
  });

  const travelitinerarymutation = useMutation(postTravelItinerary, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("Travel Itinerary data posted successfully");
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting Travel Itinerary data:", error);
    },
  });

  const onFinish = async (values: any) => {
    settitle(values.title);
    const data = new FormData();
    data.set("file", flagimg);
    const response = await fetch("api/upload", {
      method: "POST",
      body: data,
    });
    const result = await response.json();
    const data1 = new FormData();
    data1.set("file", bgimg);
    const response1 = await fetch("api/upload", {
      method: "POST",
      body: data1,
    });
    const result1 = await response1.json();
    if (result.success && result1.success) {
      setflagurl(result.path); // Update state with the file path
      setbgurl(result1.path); // Update state with the file path
      const countrydata = {
        title: values.title,
        details: values.details,
        overview: values.overview,
        tagId: values.tagId,
        countryname: values.countryname,
        countryflagurl: result.path,
        countrybgurl: result1.path,
      };
      try {
        // Await the mutation to complete
        await mutation.mutateAsync(countrydata);
        // Fetch country data after successful mutation
        const response = await axios.get(
          `/api/visaapi/countries/title/${values.title}`
        );
        // Accessing the items array
        const items = values.visarequirements;
        // You can now process each item as needed
        items.forEach((item, index) => {
          const VisaRequirementsData = {
            title: item.title,
            description: item.description,
            countryid: response.data.country.id,
          };
          visarequirementmutation.mutate(VisaRequirementsData);
        });
        // Accessing the items array
        const items1 = values.travelitinerary;
        // You can now process each item as needed
        items1.forEach((item, index) => {
          const TravelItineraryData = {
            title: item.title,
            description: item.description,
            countryid: response.data.country.id,
          };
          travelitinerarymutation.mutate(TravelItineraryData);
        });
        toast.success("Country data Added successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        router.push(`/DashboardPage`);
      } catch (error) {
        toast.error(`Error posting country data:${error}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="border border-black p-5">
        <Form
          name="countryform"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 800 }}
          form={form}
          initialValues={{
            remember: true,
            visarequirements: [{}],
            travelitinerary: [{}],
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <InputComp
            formname="flagurl"
            label="country flag image"
            rules={[
              {
                required: true,
                message: "Please input your country flag image!",
              },
            ]}
            type="file"
            fieldname="file"
            onchange={(e) => setflagimg(e.target.files?.[0])}
          />
          <InputComp
            formname="bgurl"
            label="country bg image"
            rules={[
              {
                required: true,
                message: "Please input your country background image!",
              },
            ]}
            type="file"
            fieldname="file"
            onchange={(e) => setbgimg(e.target.files?.[0])}
          />
          <InputComp
            formname="title"
            label="Title"
            rules={[{ required: true, message: "Please input your title!" }]}
            type="text"
            placeholder="Enter Title"
          />
          <InputComp
            formname="details"
            label="Details"
            rules={[{ required: true, message: "Please input your Details!" }]}
            type="text"
            placeholder="Enter Details"
          />
          <Form.Item
            name="tagId"
            label="Visa Type"
            rules={[{ required: true, message: "Please select visa type!" }]}
          >
            <Select
              defaultValue={tagTypes[0]?.title}
              placeholder="Select visa type"
              onChange={handleChange}
              options={tagTypes.map((tag) => ({
                value: tag.id,
                label: tag.title,
              }))}
            />
          </Form.Item>
          <InputComp
            formname="countryname"
            label="Country Name"
            rules={[
              { required: true, message: "Please input your country name!" },
            ]}
            type="text"
            placeholder="Enter Country Name"
          />
          <Form.Item
            name="overview"
            label="Overview"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <ReactQuill value={text} onChange={OverviewChange} />
          </Form.Item>
          <Form.List name="visarequirements">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`VisaRequirements ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <Form.Item
                      name={[field.name, "title"]}
                      label="Title"
                      rules={[{ required: true }]}
                    >
                      <Input
                        placeholder="Enter Visa Requirement"
                        className="border-gray-400 rounded-md"
                      />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "description"]}
                      label="Description"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <ReactQuill value={text} onChange={OverviewChange} />
                    </Form.Item>
                    <Form.Item name="countryid" hidden={true}>
                      <Input />
                    </Form.Item>
                  </Card>
                ))}
                <Button type="dashed" onClick={() => add()} block>
                  + Add Item
                </Button>
              </div>
            )}
          </Form.List>
          <Form.List name="travelitinerary">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Travel Itinerary ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <Form.Item
                      name={[field.name, "title"]}
                      label="Title"
                      rules={[{ required: true }]}
                    >
                      <Input
                        placeholder="Enter Travel Itinerary"
                        className="border-gray-400 rounded-md"
                      />
                    </Form.Item>
                    <Form.Item
                      name={[field.name, "description"]}
                      label="Description"
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <ReactQuill value={text} onChange={OverviewChange} />
                    </Form.Item>
                    <Form.Item name="countryid" hidden={true}>
                      <Input />
                    </Form.Item>
                  </Card>
                ))}
                <Button type="dashed" onClick={() => add()} block>
                  + Add Item
                </Button>
              </div>
            )}
          </Form.List>
          <Form.Item wrapperCol={{ span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-700 mr-3 my-3"
            >
              Submit
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-red-700 my-3"
            >
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default CountriesForm;
