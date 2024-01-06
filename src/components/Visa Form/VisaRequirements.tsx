//@ts-nocheck
"use client";
import { useTitleContext } from "@/context/ContextProvider";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input, Typography } from "antd";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import CustomVisaSteps from "./CustomVisaSteps";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const VisaRequirements: React.FC = () => {
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const router = useRouter();
  const { title } = useTitleContext();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    if (title) {
      console.log("Title from context:", title);
      const fetchCountryData = async () => {
        try {
          const { data } = await axios.get(`/api/visaapi/countries/title/${title}`);
          console.log(data.country.id);
          setCountryData(data.country.id); // Update the state with fetched data
        } catch (error) {
          console.error('Error fetching country data:', error);
        }
      };

      fetchCountryData();
    }
  }, [title]);

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

  const onSubmitVisaRequirements = async(values: any) => {
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
        countryid: countryData,
      };
      console.log(VisaRequirementsData);
      mutation.mutate(VisaRequirementsData);
    });
    router.push(`/VisaFormPage/TravelItineraryPage`);
  };

  const OverviewChange = (content: string) => {
    setText(content);
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <CustomVisaSteps step2></CustomVisaSteps>
      <div className="border border-black p-5">
        <Form
          // labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          form={form}
          name="dynamic_form_complex"
          style={{ minWidth: 500 }}
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
                      name={[field.name, "title"]}
                      rules={[{ required: true }]}
                    >
                      <Input />
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
