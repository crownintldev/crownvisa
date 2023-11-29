//@ts-nocheck
"use client";
import React from "react";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "react-query";
import { useRouter } from "next/navigation";
import { useTitleContext } from "@/app/ContextProvider";

const { TextArea } = Input;

const onChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => {
  console.log("Change:", e.target.value);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

interface TagType {
  id: number;
  title: string;
}

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const fetchserviceTypes = async () => {
  const { data } = await axios.get("/api/serviceapi/servicecategory");
  return data.visacategory;
};

const postserviceData = async (serviceData) => {
  const response = await axios.post("/api/serviceapi/services", serviceData);
  return response.data;
};

const ServiceForm: React.FC = () => {
  const router = useRouter();
  const { setTitle } = useTitleContext();
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  // useQuery for initial data fetch and to provide queryClient with the data
  useQuery("serviceTypes", fetchserviceTypes, {
    onSuccess: (data) => {
      // Set query data manually
      queryClient.setQueryData("serviceTypes", data);
    },
  });
  const tagTypes: TagType[] = queryClient.getQueryData("serviceTypes") || [];

  const mutation = useMutation(postserviceData, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("Service data posted successfully");
    //   router.push(`/VisaFormPage/VisaRequirementsPage`);
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting Service data:", error);
    },
  });

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setTitle(values.title); // Set the title in context
    const servicedata = {
      title: values.title,
      metadata: values.metadata,
      categoryid: values.categoryid,
    };
    mutation.mutate(servicedata);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-black p-5">
        <Form
          name="serviceform"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ minWidth: 500 }}
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Title"
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input placeholder="Enter Title" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Details"
            name="metadata"
            rules={[{ required: true, message: "Please input your Details!" }]}
          >
            <TextArea
              onChange={onChange}
              placeholder="Enter Details"
              style={{ height: 50, resize: "none" }}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Select Category Type"
            name="categoryid"
            rules={[{ required: true, message: "Please select category type!" }]}
          >
            <Select
              defaultValue={tagTypes[0]?.title}
              onChange={handleChange}
              options={tagTypes.map((tag) => ({
                value: tag.id,
                label: tag.title,
              }))}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" className="bg-blue-700">
              Submit
            </Button>
            <Button type="primary" htmlType="submit" className="bg-red-700">
              Reset
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ServiceForm;
