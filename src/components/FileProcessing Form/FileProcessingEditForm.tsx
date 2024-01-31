//@ts-nocheck
"use client";
import { useTitleContext } from "@/context/ContextProvider";
import { Props } from "@/types/interfaces";
import { Button, Form } from "antd";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import InputComp from "../UI components/InputComp";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const FileProcessingEditForm: React.FC<Props> = ({ id }) => {
  const router = useRouter();
  const { setTitle } = useTitleContext();
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const queryClient = useQueryClient();
  const [tagTypes, setTagTypes] = useState<TagType[]>([]); // New state variable
  const [Id, setId] = useState(null);
  const [countryData, setCountryData] = useState<any>(null);
  const [flagimg, setflagimg] = useState();
  const [flagurl, setflagurl] = useState();
  const [bgimg, setbgimg] = useState();
  const [bgurl, setbgurl] = useState();

  useEffect(() => {
    setId(id);
    axios.get(`/api/fileprocessingapi/fileprocessing/${id}`).then((res) => {
      const fetchedData = res.data.fileprocessing;
      setCountryData(fetchedData);
      setflagurl(fetchedData.countryflagurl);
      setbgurl(fetchedData.countrybgurl);
      // Assuming fetchedData contains fields like title, details, etc.
      form.setFieldsValue({
        title: fetchedData.title,
        details: fetchedData.details,
        overview: fetchedData.overview,
      });
      setText(fetchedData.overview || "");
      console.log(res.data.country);
    });
  }, [form, id]);

  useEffect(() => {
    console.log("Flag Image:", flagurl);
    console.log("Background Image:", bgurl);
  }, [flagurl, bgurl]);

  const OverviewChange = (content: string) => {
    setText(content);
  };

  const postfileprocessingData = async (fileprocessingData) => {
    console.log(Id);
    const response = await axios.put(
      `/api/fileprocessingapi/fileprocessing/${Id}`,
      fileprocessingData
    );
    return response.data;
  };

  const mutation = useMutation(postfileprocessingData, {
    onSuccess: () => {
      // Perform actions on successful data posting
      toast.success("fileprocessing data Updated successfully", {
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
      toast.error(`Error updating fileprocessing data:${error}`, {
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

  const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result.split(",")[1]); // Split to remove data URL part
    reader.onerror = (error) => reject(error);
  });

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    setTitle(values.title); // Set the title in context

    let newFlagUrl = flagurl;
    let newBgUrl = bgurl;

    if (flagimg instanceof File) {
      const flagBase64 = await toBase64(flagimg);
      const flagResponse = await axios.post("api/upload", {
        file: flagBase64,
        filename: flagimg.name
      });
      if (flagResponse.data.success) {
        newFlagUrl = flagResponse.data.path;
      }
    }

    if (bgimg instanceof File) {
      const bgBase64 = await toBase64(bgimg);
      const bgResponse = await axios.post("api/upload", {
        file: bgBase64,
        filename: bgimg.name
      });
      if (bgResponse.data.success) {
        newBgUrl = bgResponse.data.path;
      }
    }

    if (bgimg instanceof File) {
      const bgData = new FormData();
      bgData.set("file", bgimg);
      const bgResponse = await fetch("api/upload", {
        method: "POST",
        body: bgData,
      });
      const bgResult = await bgResponse.json();
      if (bgResult.success) {
        newBgUrl = bgResult.path;
      }
    }

    const fileprocessingdata = {
      title: values.title,
      details: values.details,
      overview: values.overview,
      countryflagurl: newFlagUrl,
      countrybgurl: newBgUrl,
    };

    console.log(fileprocessingdata);
    mutation.mutate(fileprocessingdata);
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
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <InputComp
            formname="flagurl"
            label="country flag image"
            rules={[
              {
                required: false,
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
                required: false,
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
            label="overview"
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
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FileProcessingEditForm;
