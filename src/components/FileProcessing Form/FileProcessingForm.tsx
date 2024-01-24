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

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const postfileprocessingData = async (fileprocessingData) => {
  const response = await axios.post("/api/fileprocessingapi/fileprocessing", fileprocessingData);
  console.log(response.data);
  return response.data;
};

const postfileprocessingRequirements = async (fileprocessingRequirements) => {
  const response = await axios.post(
    "/api/fileprocessingapi/fileprocessingrequirements",
    fileprocessingRequirements
  );
  console.log(response.data);
  return response.data;
};

const postfileprocessingTravelItinerary = async (fileprocessingTravelItinerary) => {
  const response = await axios.post(
    "/api/fileprocessingapi/fileprocessingtravelitinerary",
    fileprocessingTravelItinerary
  );
  console.log(response.data);
  return response.data;
};

const FileProcessingForm: React.FC = () => {
  const router = useRouter();
  const [title, settitle] = useState("");
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  const [flagimg, setflagimg] = useState();
  const [flagurl, setflagurl] = useState();
  const [bgimg, setbgimg] = useState();
  const [bgurl, setbgurl] = useState();

  const OverviewChange = (content: string) => {
    setText(content);
  };

  const mutation = useMutation(postfileprocessingData, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("fileprocessing data posted successfully");
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting fileprocessing data:", error);
    },
  });

  const fileprocessingrequirementmutation = useMutation(postfileprocessingRequirements, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("fileprocessing Requirements data posted successfully");
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting fileprocessing Requirements data:", error);
    },
  });

  const fileprocessingtravelitinerarymutation = useMutation(postfileprocessingTravelItinerary, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("fileprocessing Travel Itinerary data posted successfully");
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting fileprocessing Travel Itinerary data:", error);
    },
  });

  const toBase64 = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(',')[1]); // Split to remove data URL part
    reader.onerror = error => reject(error);
  });

  const onFinish = async (values: any) => {
    settitle(values.title);
    console.log(flagimg.name);
    console.log(bgimg.name);
    const flagBase64 = await toBase64(flagimg);
    const bgBase64 = await toBase64(bgimg);

    const uploadFlagResponse = await axios.post('/api/upload', {
      file: flagBase64,
      filename: flagimg.name
    });

    const uploadBgResponse = await axios.post('/api/upload', {
      file: bgBase64,
      filename: bgimg.name
    });
    if (uploadFlagResponse.data.success && uploadBgResponse.data.success) {
      setflagurl(uploadFlagResponse.data.path); // Update state with the file path
      setbgurl(uploadBgResponse.data.path); // Update state with the file path
      const fileprocessingdata = {
        title: values.title,
        overview: values.overview,
        countryflagurl: uploadFlagResponse.data.path,
        countrybgurl: uploadBgResponse.data.path,
      };
      console.log(fileprocessingdata);
      try {
        // Await the mutation to complete
        await mutation.mutateAsync(fileprocessingdata);
        // Fetch country data after successful mutation
        const response = await axios.get(
          `/api/fileprocessingapi/fileprocessing/title/${values.title}`
        );
        // Accessing the items array
        const items = values.visarequirements;
        // You can now process each item as needed
        items.forEach((item, index) => {
          const fileprocessingRequirementsData = {
            title: item.title,
            description: item.description,
            countryid: response.data.fileprocessing.id,
          };
          console.log(fileprocessingRequirementsData);
          fileprocessingrequirementmutation.mutate(fileprocessingRequirementsData);
        });
        // Accessing the items array
        const items1 = values.travelitinerary;
        // You can now process each item as needed
        items1.forEach((item, index) => {
          const fileprocessingTravelItineraryData = {
            title: item.title,
            description: item.description,
            countryid: response.data.fileprocessing.id,
          };
          console.log(fileprocessingTravelItineraryData);
          fileprocessingtravelitinerarymutation.mutate(fileprocessingTravelItineraryData);
        });
        toast.success("fileprocessing data Added successfully", {
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
        toast.error(`Error posting fileprocessing data:${error}`, {
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
                    title={`FileProcessing Requirements ${field.name + 1}`}
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
                          message: "Please input your requirements!",
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
                    title={`FileProcessing Travel Itinerary ${field.name + 1}`}
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
                          message: "Please input your travel itinerary!",
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

export default FileProcessingForm;
