//@ts-nocheck
"use client";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Select } from "antd";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const { TextArea } = Input;

interface TagType {
  id: number;
  title: string;
}

const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log("Change:", e.target.value);
};

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
      console.log("Country data posted successfully");
      //   router.push(`/VisaRequirementsPage?title=${encodeURIComponent(values.title)}`);
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting country data:", error);
    },
  });

  const travelitinerarymutation = useMutation(postTravelItinerary, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("Country data posted successfully");
      //   router.push(`/VisaRequirementsPage?title=${encodeURIComponent(values.title)}`);
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting country data:", error);
    },
  });

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    settitle(values.title);
    const countrydata = {
      title: values.title,
      details: values.details,
      overview: values.overview,
      tagId: values.tagId,
      countryname: values.countryname,
    };
    console.log(countrydata);
    console.log(title);
    try {
      // Await the mutation to complete
      await mutation.mutateAsync(countrydata);
      // Fetch country data after successful mutation
      const response = await axios.get(
        `/api/visaapi/countries/title/${values.title}`
      );
      console.log(response.data.country.id);
      setCountryData(response.data.country.id); // Update the state with fetched data
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
    // Accessing the items array
    const items = values.visarequirements;
    console.log("Items:", items);
    // You can now process each item as needed
    items.forEach((item, index) => {
      console.log(`Item ${index + 1}:`, item.title);
      const VisaRequirementsData = {
        title: item.title,
        description: item.description,
        countryid: countryData,
      };
      console.log(VisaRequirementsData);
      visarequirementmutation.mutate(VisaRequirementsData);
    });
    // Accessing the items array
    const items1 = values.travelitinerary;
    console.log("Items:", items1);
    // You can now process each item as needed
    items1.forEach((item, index) => {
      console.log(`Item ${index + 1}:`, item.title);
      const TravelItineraryData = {
        title: item.title,
        description: item.description,
        countryid: countryData,
      };
      console.log(TravelItineraryData);
      travelitinerarymutation.mutate(TravelItineraryData);
    });
    router.push(`/DashboardPage`);
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
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input
              placeholder="Enter Title"
              className="border-gray-400 rounded-md"
            />
          </Form.Item>

          <Form.Item
            name="details"
            label="Details"
            rules={[{ required: true, message: "Please input your Details!" }]}
          >
            <TextArea
              onChange={onChange}
              placeholder="Enter Details"
              style={{ height: 50, resize: "none" }}
            />
          </Form.Item>

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

          <Form.Item
            name="countryname"
            label="Country Name"
            rules={[
              { required: true, message: "Please input your country name!" },
            ]}
          >
            <Input
              placeholder="Enter Country Name"
              className="border-gray-400 rounded-md"
            />
          </Form.Item>

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
                    {/* <Form onFinish={onSubmitVisaRequirements}> */}
                    <Form.Item
                      name={[field.name, "title"]}
                      label="Title"
                      rules={[{ required: true }]}
                    >
                      <Input />
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

                    {/* </Form> */}
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
                    {/* <Form onFinish={onSubmitVisaRequirements}> */}
                    <Form.Item
                      name={[field.name, "title"]}
                      label="Title"
                      rules={[{ required: true }]}
                    >
                      <Input />
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

                    {/* </Form> */}
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
