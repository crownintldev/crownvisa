"use client";
import React, { useState } from "react";
import {
  Select,
  Form,
  Input,
  Space,
  Button,
  Upload,
  Typography,
  Card,
} from "antd";
import dynamic from "next/dynamic";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddDetails: React.FC = () => {
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const [forms, setForms] = useState<string[]>([]);
  const [boxforms, setboxForms] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string | undefined>();
  const [selectKey, setSelectKey] = useState<number>(0);
  const [isButtonVisible, setIsButtonVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState(true);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
    if (value === "section") {
      setSelectValue("section");
      setDisplayValue(false);
      //   setForms((prevForms) => [...prevForms, value]);
    } else if (value === "box") {
      setSelectValue("box");
      setDisplayValue(false);
      //   setboxForms((prevForms) => [...prevForms, value]);
    }
    setSelectKey((prevKey) => prevKey + 1);
    console.log(selectValue);
    setIsButtonVisible(true);
  };

  const onSubmitSection = (values: any) => {
    console.log("onSubmitVisaRequirements" + values);
    console.log(values.title);
    // // Accessing the items array
    // const items = values.items;
    // console.log("Items:", items);
    // // You can now process each item as needed
    // items.forEach((item, index) => {
    //   console.log(`Item ${index + 1}:`, item.title);
    //   const VisaRequirementsData = {
    //     title: item.title,
    //     description: item.description,
    //     countryid: countrydata,
    //   };
    //   console.log(VisaRequirementsData);
    //   mutation.mutate(VisaRequirementsData);
    // });
    // router.push(`VisaFormPage/TravelItineraryPage`);
  };
  const onSubmitBox = (values: any) => {
    console.log("onSubmitVisaRequirements" + values);
    console.log(values.title);
    // // Accessing the items array
    // const items = values.items;
    // console.log("Items:", items);
    // // You can now process each item as needed
    // items.forEach((item, index) => {
    //   console.log(`Item ${index + 1}:`, item.title);
    //   const VisaRequirementsData = {
    //     title: item.title,
    //     description: item.description,
    //     countryid: countrydata,
    //   };
    //   console.log(VisaRequirementsData);
    //   mutation.mutate(VisaRequirementsData);
    // });
    // router.push(`VisaFormPage/TravelItineraryPage`);
  };

  const OverviewChange = (content: string) => {
    setText(content);
  };

  const normFile = () => {
    // Logic to handle file event
    // ...
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Space direction="vertical" className="border border-black p-5">
        {selectValue === "section" && (
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            form={form}
            name="dynamic_form_complex"
            style={{ minWidth: 500 }}
            autoComplete="off"
            onFinish={onSubmitSection}
            //   initialValues={{ items: [{}] }}
          >
            <Form.Item label="Title" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <ReactQuill value={text} onChange={OverviewChange} />
            </Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-700">
              Submit
            </Button>
          </Form>
        )}
        {selectValue === "box" && (
          <Form
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            form={form}
            name="dynamic_form_complex"
            style={{ minWidth: 500 }}
            autoComplete="off"
            onFinish={onSubmitBox}
            //   initialValues={{ items: [{}] }}
          >
            <Form.Item label="Title" name="title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <ReactQuill value={text} onChange={OverviewChange} />
            </Form.Item>
            <Form.Item
              label="Upload"
              valuePropName="fileList"
              getValueFromEvent={normFile}
              rules={[
                {
                  required: true,
                  message: "Please upload a file",
                },
              ]}
            >
              <Upload action="/upload.do" listType="picture-card">
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item>
            <Button type="primary" htmlType="submit" className="bg-blue-700">
              Submit
            </Button>
          </Form>
        )}
        {displayValue && (
          <Select
            key={selectKey}
            onChange={handleChange}
            placeholder="Choose option from below"
            style={{ width: "100%" }}
            options={[
              { value: "section", label: "Section" },
              { value: "box", label: "Box" },
            ]}
          />
        )}
      </Space>
    </div>
  );
};

export default AddDetails;
