//@ts-nocheck
"use client";
import React, { useEffect, useState } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Space, Typography } from "antd";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useTitleContext } from "@/app/ContextProvider";
import { useQuery, useQueryClient, useMutation } from "react-query";
import axios from "axios";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const VisaRequirements: React.FC = () => {
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const router = useRouter();
  const { title } = useTitleContext();

  useEffect(() => {
    if (title) {
      console.log("Title from context:", title);
    }
  }, [title]);

  const fetchCountryData = async () => {
    const { data } = await axios.get(`/api/visaapi/countries/title/${title}`);
    console.log(data.country.id);
    return data.country.id;
  };

  const queryClient = useQueryClient();
  // useQuery for initial data fetch and to provide queryClient with the data
  useQuery("countryData", fetchCountryData, {
    onSuccess: (data) => {
      // Set query data manually
      queryClient.setQueryData("countryData", data);
    },
  });
  const countrydata = queryClient.getQueryData("countryData");
  console.log(countrydata);

  const postVisaRequirements = async (VisaRequirements) => {
    const response = await axios.post(
      "/api/visaapi/visarequirements",
      VisaRequirements
    );
    return response.data;
  };

  const mutation = useMutation(postVisaRequirements, {
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

  const onSubmitVisaRequirements = (values: any) => {
    console.log("onSubmitVisaRequirements" + values);
    // Accessing the items array
    const items = values.items;
    console.log("Items:", items);
    // You can now process each item as needed
    items.forEach((item, index) => {
      console.log(`Item ${index + 1}:`, item.title);
      const VisaRequirementsData = {
        title: item.title,
        description: item.description,
        countryid: countrydata,
      };
      console.log(VisaRequirementsData);
      mutation.mutate(VisaRequirementsData);
    });
    router.push(`VisaFormPage/TravelItineraryPage`);
  };
  const OverviewChange = (content: string) => {
    setText(content);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="border border-black p-5">
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          form={form}
          name="dynamic_form_complex"
          style={{ maxWidth: 600 }}
          autoComplete="off"
          onFinish={onSubmitVisaRequirements}
          initialValues={{ items: [{}] }}
        >
          <Form.List name="items">
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
                      label="Title"
                      name={[field.name, "title"]}
                      rules={[{ required: true }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Description"
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

          <Form.Item noStyle shouldUpdate>
            {() => (
              <Typography>
                <pre>{JSON.stringify(form.getFieldsValue(), null, 2)}</pre>
              </Typography>
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className="bg-blue-700">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default VisaRequirements;
