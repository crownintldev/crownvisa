//@ts-nocheck
"use client";
import { useTitleContext } from "@/app/ContextProvider";
import { Button, Form, Input, Select } from "antd";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { toast } from "react-toastify";

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

const CountriesEditForm: React.FC = () => {
  const router = useRouter();
  const { setTitle } = useTitleContext();
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  const [tagTypes, setTagTypes] = useState<TagType[]>([]); // New state variable
  const [Id, setId] = useState(null);
  const [countryData, setCountryData] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const urlParams = new URLSearchParams(window.location.search);
      const queryCardId = urlParams.get("id");
      if (queryCardId) {
        setId(queryCardId);
        console.log(queryCardId);
        axios.get(`/api/visaapi/countries/${queryCardId}`).then((res) => {
          const fetchedData = res.data.country;
          setCountryData(fetchedData);
          // Assuming fetchedData contains fields like title, details, etc.
          form.setFieldsValue({
            title: fetchedData.title,
            details: fetchedData.details,
            tagId: fetchedData.tagId,
            countryname: fetchedData.countryname,
            overview: fetchedData.overview,
          });
          setText(fetchedData.overview || "");
          console.log(res.data.country);
        });
      }
    }
  }, [form]);

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

  const postCountryData = async (countryData) => {
    const response = await axios.put(
      `/api/visaapi/countries/${Id}`,
      countryData
    );
    return response.data;
  };

  const mutation = useMutation(postCountryData, {
    onSuccess: () => {
      // Perform actions on successful data posting
      toast.success("Country data Updated successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push(`/VisaFormPage/CountriesFormTable`);
    },
    onError: (error) => {
      // Handle any errors here
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
    },
  });

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    setTitle(values.title); // Set the title in context
    const countrydata = {
      title: values.title,
      details: values.details,
      overview: values.overview,
      tagId: values.tagId,
      countryname: values.countryname,
    };
    console.log(countrydata);
    mutation.mutate(countrydata);
  };
  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <div className="border border-black p-5">
        <Form
          name="countryform"
          // labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          style={{ maxWidth: 800 }}
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            name="title"
            rules={[{ required: true, message: "Please input your title!" }]}
          >
            <Input placeholder="Enter Title" />
          </Form.Item>

          <Form.Item<FieldType>
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
            name="tagId"
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

          <Form.Item<FieldType>
            name="countryname"
            rules={[
              { required: true, message: "Please input your country name!" },
            ]}
          >
            <Input placeholder="Enter Country Name" />
          </Form.Item>

          <Form.Item<FieldType>
            name="overview"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <ReactQuill value={text} onChange={OverviewChange} />
          </Form.Item>

          <Form.Item wrapperCol={{ span: 16 }}>
            <Button
              type="primary"
              htmlType="submit"
              className="bg-blue-700 mr-3"
            >
              Update
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

export default CountriesEditForm;
