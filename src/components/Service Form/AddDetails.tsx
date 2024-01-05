//@ts-nocheck
"use client";
import { useTitleContext } from "@/app/ContextProvider";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Card,
  Dropdown,
  Form,
  Input,
  Menu,
  Upload
} from "antd";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const AddDetails: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const [fileList, setFileList] = useState([]);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const { title } = useTitleContext();

  useEffect(() => {
    if (title) {
      console.log("Title from context:", title);
    }
  }, [title]);

  const fetchServiceData = async () => {
    const { data } = await axios.get(`/api/serviceapi/services/title/${title}`);
    console.log(data.service.id);
    return data.service.id;
  };

  const postsectionData = async (sectionData) => {
    const response = await axios.post("/api/serviceapi/section", sectionData);
    return response.data;
  };

  const postboxData = async (boxData) => {
    const response = await axios.post("/api/serviceapi/box", boxData);
    return response.data;
  };

  const queryClient = useQueryClient();
  // useQuery for initial data fetch and to provide queryClient with the data
  useQuery("serviceData", fetchServiceData, {
    onSuccess: (data) => {
      // Set query data manually
      queryClient.setQueryData("serviceData", data);
    },
  });
  const servicedata = queryClient.getQueryData("serviceData");
  console.log(servicedata);

  // Define the dropdown items
  const dropdownItems: MenuProps["items"] = [
    {
      key: "ContentSection",
      label: <span>+ Content Section</span>,
    },
    {
      key: "ImageSection",
      label: <span>+ Image Section</span>,
    },
    // Add other items if necessary
  ];
  // Function to handle menu click
  const handleMenuClick = (e, section) => {
    if (e.key === "ContentSection") {
      // Get the current items from the form
      const items = form.getFieldValue("items") || [];
      // Add a new item (section) to the items array
      const newItem = { title: "", description: "" }; // Define the structure of a new item
      const newItems = [...items, newItem];
      // Update the form's 'items' field with the new items array
      form.setFieldsValue({ items: newItems });
    } else if (e.key === "ImageSection") {
      // Get the current items from the form
      const items1 = form.getFieldValue("items1") || [];
      // Add a new item (section) to the items array
      const newItem1 = { title: "", description: "", image: [] }; // Define the structure of a new item
      const newItems1 = [...items1, newItem1];
      // Update the form's 'items' field with the new items array
      form.setFieldsValue({ items1: newItems1 });
    }
    // Add other cases if needed
  };

  const sectionmutation = useMutation(postsectionData, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("Country data posted successfully");
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting country data:", error);
    },
  });

  const boxmutation = useMutation(postboxData, {
    onSuccess: () => {
      // Perform actions on successful data posting
      console.log("Country data posted successfully");
    },
    onError: (error) => {
      // Handle any errors here
      console.error("Error posting country data:", error);
    },
  });

  const onSubmitSection = (values: any) => {
    console.log("onSubmitVisaRequirements" + values);
    console.log(values.items);
    console.log(values.items1);
    // Accessing the items array
    const items = values.items;
    console.log("Items:", items);
    const items1 = values.items1;
    console.log("Items1:", items1);
    // You can now process each item as needed
    items.forEach((item, index) => {
      // console.log(`Item ${index + 1}:`, item.title);
      const contentsection = {
        title: item.title,
        description: item.description,
        serviceid: servicedata,
      };
      console.log(contentsection);
      // sectionmutation.mutate(contentsection);
    });
    items1.forEach((item, index) => {
      // console.log(`Item ${index + 1}:`, item.title);
      const boxsection = {
        image: item.image[0].name,
        title: item.title,
        description: item.description,
        serviceid: servicedata,
      };
      console.log(boxsection);
      // boxmutation.mutate(boxsection);
    });
    // router.push(`/ServiceFormPage/AddDetailsPage`);
  };

  const OverviewChange = (content: string) => {
    setText(content);
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("You can only upload image files!");
    }
    const isSingle = fileList.length < 1;
    if (!isSingle) {
      message.error("You can only upload one image!");
    }
    return isImage && isSingle && !fileList.length;
  };

  const handleChange = (info) => {
    let newFileList = [...info.fileList];
    if (newFileList.length > 1) {
      newFileList = newFileList.slice(-1);
    }
    setFileList(newFileList);
    console.log(fileList);
  };

  return (
    <div className="flex justify-center flex-col items-center ">
      <div className="border border-black p-5">
        <Form
          // labelCol={{ span: 6 }}
          wrapperCol={{ span: 24 }}
          className="flex justify-center flex-col"
          form={form}
          name="dynamic_form_complex"
          style={{ maxWidth: 600 }}
          autoComplete="off"
          onFinish={onSubmitSection}
          initialValues={{ items: [{}] }}
        >
          <Dropdown
            overlay={<Menu items={dropdownItems} onClick={handleMenuClick} />}
            placement="bottom"
            className="mb-3"
            arrow
          >
            <Button>More Actions</Button>
          </Dropdown>

          <Form.List name="items">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    className="mb-2"
                    title={`Content Section`}
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
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Enter Title" />
                    </Form.Item>

                    <Form.Item
                      name={[field.name, "description"]}
                      rules={[
                        {
                          required: true,
                          message: "Please input your username!",
                        },
                      ]}
                    >
                      <ReactQuill value={text} onChange={OverviewChange} />
                    </Form.Item>
                  </Card>
                ))}
              </div>
            )}
          </Form.List>

          <Form.List name="items1">
            {(fields, { add, remove }) => (
              <div
                style={{ display: "flex", rowGap: 16, flexDirection: "column" }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Image Section`}
                    key={field.key}
                    className="mb-3"
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <div className="flex justify-between">
                      <div>
                        <Form.Item
                          name={[field.name, "image"]}
                          valuePropName="fileList"
                          getValueFromEvent={({ fileList }) => fileList}
                          rules={[
                            {
                              required: true,
                              message: "Please upload an image!",
                            },
                          ]}
                        >
                          <Upload
                            name="image"
                            listType="picture-card"
                            beforeUpload={beforeUpload}
                            onChange={handleChange}
                            onPreview={() => {}}
                            fileList={fileList}
                          >
                            {fileList.length >= 1 ? null : <UploadOutlined />}
                          </Upload>
                        </Form.Item>
                      </div>
                      <div>
                        <Form.Item
                          name={[field.name, "title"]}
                          rules={[{ required: true }]}
                        >
                          <Input placeholder="Enter Title" />
                        </Form.Item>

                        <Form.Item
                          name={[field.name, "description"]}
                          rules={[
                            {
                              required: true,
                              message: "Please input your username!",
                            },
                          ]}
                        >
                          <ReactQuill value={text} onChange={OverviewChange} />
                        </Form.Item>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </Form.List>

          {/* <Form.Item noStyle shouldUpdate>
            {() => (
              <Typography>
                <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
              </Typography>
            )}
          </Form.Item> */}
          <Button type="primary" htmlType="submit" className="bg-blue-700">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddDetails;
