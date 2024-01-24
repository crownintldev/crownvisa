//@ts-nocheck
"use client";
import { Button, Form, Input } from "antd";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import InputComp from "../UI components/InputComp";
import { toast } from "react-toastify";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface Props {
  id?: any;
  addid?: any;
}

const FileProcessingRequirements: React.FC<Props> = ({ id, addid }) => {
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const router = useRouter();
  const [countryData, setCountryData] = useState(null);
  const [Id, setId] = useState(null);
  const [AddId, setAddId] = useState(null);

  useEffect(() => {
    setId(id);
    setAddId(addid);
    if (id) {
      axios.get(`/api/fileprocessingapi/fileprocessingrequirements/${id}`).then((res) => {
        const fetchedData = res.data.fileprocessingRequirements;
        setCountryData(fetchedData);
        // Assuming fetchedData contains fields like title, details, etc.
        form.setFieldsValue({
          title: fetchedData.title,
          description: fetchedData.description,
          countryid: fetchedData.countryid,
        });
      });
    }
  }, [id, form,addid]);

  const postfileprocessingRequirements = async (fileprocessingRequirements) => {
    const response = await axios.post(
      `/api/fileprocessingapi/fileprocessingrequirements`,
      fileprocessingRequirements
    );
    return response.data;
  };

  const postmutation = useMutation(postfileprocessingRequirements, {
    onSuccess: () => {
      // Perform actions on successful data posting
      toast.success("fileprocessingRequirements data posted successfully", {
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
    },
    onError: (error) => {
      // Handle any errors here
      toast.error(`Error posting fileprocessingRequirements data:${error}`, {
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

  const updatefileprocessingRequirements = async (fileprocessingRequirements) => {
    const response = await axios.put(
      `/api/fileprocessingapi/fileprocessingrequirements/${Id}`,
      fileprocessingRequirements
    );
    return response.data;
  };

  const updatemutation = useMutation(updatefileprocessingRequirements, {
    onSuccess: () => {
      // Perform actions on successful data posting
      toast.success("fileprocessingRequirements data updated successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push(`/FileProcessingFormPage/FileProcessingRequirementsTable/${Id}`);
    },
    onError: (error) => {
      // Handle any errors here
      toast.error(`Error updating fileprocessingrequirements data:${error}`, {
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

  const onSubmitVisaRequirements = async (values: any) => {
    console.log("onSubmitVisaRequirements" + values);
    let fileprocessingRequirementsData;
    if (AddId) {
        fileprocessingRequirementsData = {
        title: values.title,
        description: values.description,
        countryid: addid,
      };
      console.log(fileprocessingRequirementsData);
      postmutation.mutate(fileprocessingRequirementsData);
    } else {
        fileprocessingRequirementsData = {
        title: values.title,
        description: values.description,
        countryid: values.countryid,
      };
      console.log(fileprocessingRequirementsData);
      updatemutation.mutate(fileprocessingRequirementsData);
    }
  };

  const OverviewChange = (content: string) => {
    setText(content);
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="border border-black p-5">
        <Form
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 24 }}
          form={form}
          name="dynamic_form_complex"
          style={{ minWidth: 500 }}
          autoComplete="off"
          onFinish={onSubmitVisaRequirements}
        >
          <InputComp
            formname="title"
            label="Title"
            rules={[{ required: true, message: "Please input your title!" }]}
            type="text"
            placeholder="Enter Title"
          />

          <Form.Item
            name="description"
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
          {AddId ? (
            <Button type="primary" htmlType="submit" className="bg-blue-700">
              Submit
            </Button>
          ) : (
            <Button type="primary" htmlType="submit" className="bg-green-700">
              Update
            </Button>
          )}
        </Form>
      </div>
    </div>
  );
};

export default FileProcessingRequirements;
