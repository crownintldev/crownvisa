//@ts-nocheck
"use client";
import React, { useState } from "react";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import { useQuery, useQueryClient, useMutation } from "react-query";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useTitleContext } from "@/app/ContextProvider";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

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

const fetchCountryTypes = async () => {
  const { data } = await axios.get("/api/visaapi/countriestype");
  return data.countrytype;
};

const postCountryData = async (countryData) => {
  const response = await axios.post("/api/visaapi/countries", countryData);
  return response.data;
};

const CountriesForm: React.FC = () => {
  const router = useRouter();
  const { setTitle } = useTitleContext();
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  // useQuery for initial data fetch and to provide queryClient with the data
  useQuery("countryTypes", fetchCountryTypes, {
    onSuccess: (data) => {
      // Set query data manually
      queryClient.setQueryData("countryTypes", data);
    },
  });
  const tagTypes: TagType[] = queryClient.getQueryData("countryTypes") || [];

  const OverviewChange = (content: string) => {
    setText(content);
  };

  const mutation = useMutation(postCountryData, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("Country data posted successfully");
      router.push(`/VisaFormPage/VisaRequirementsPage`);
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting country data:", error);
    },
  });

  const onFinish = (values: any) => {
    console.log("Success:", values);
    setTitle(values.title); // Set the title in context
    router.push(`/VisaRequirementsPage`);
    const countrydata = {
      title: values.title,
      details: values.details,
      overview: values.overview,
      tagId: values.tagId,
      countryname: values.countryname,
    };
    mutation.mutate(countrydata);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-black p-5">
        <Form
          name="countryform"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 800 }}
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
            name="details"
            rules={[{ required: true, message: "Please input your Details!" }]}
          >
            <TextArea
              onChange={onChange}
              placeholder="Enter Details"
              style={{ height: 50, resize: "none" }}
            />
          </Form.Item>

          <Form.Item<FieldType>
            label="Select Visa Type"
            name="tagId"
            rules={[{ required: true, message: "Please select visa type!" }]}
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

          <Form.Item<FieldType>
            label="Country Name"
            name="countryname"
            rules={[
              { required: true, message: "Please input your country name!" },
            ]}
          >
            <Input placeholder="Enter Country Name" />
          </Form.Item>

          <Form.Item<FieldType>
            label="Overview"
            name="overview"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <ReactQuill value={text} onChange={OverviewChange} />
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

export default CountriesForm;
