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
import InputComp from "../UI components/InputComp";
import { toast } from "react-toastify";
import { Props } from "@/types/interfaces";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const TravelItinerary: React.FC<Props> = ({ id, addid }) => {
  const [form] = Form.useForm();
  const [text, setText] = useState("");
  const router = useRouter();
  const { title } = useTitleContext();
  const [countryData, setCountryData] = useState(null);
  const [Id, setId] = useState(null);
  const [AddId, setAddId] = useState(null);

  useEffect(() => {
    setId(id);
    setAddId(addid);
    if (id) {
      axios.get(`/api/visaapi/travelitinerary/${id}`).then((res) => {
        const fetchedData = res.data.travelItinerary;
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

  const postTravelItinerary = async (travelItinerary) => {
    const response = await axios.post(
      "/api/visaapi/travelitinerary",
      travelItinerary
    );
    return response.data;
  };

  const postmutation = useMutation(postTravelItinerary, {
    onSuccess: () => {
      // Perform actions on successful data posting
      toast.success("TravelItinerary data posted successfully", {
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
      toast.error(`Error posting TravelItinerary data:${error}`, {
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

  const updateTravelItinerary = async (travelItinerary) => {
    const response = await axios.put(
      `/api/visaapi/travelitinerary/${Id}`,
      travelItinerary
    );
    return response.data;
  };

  const updatemutation = useMutation(updateTravelItinerary, {
    onSuccess: () => {
      // Perform actions on successful data posting
      toast.success("TravelItinerary data updated successfully", {
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
      toast.error(`Error updating TravelItinerary data:${error}`, {
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
    let TravelItineraryData;
    if (AddId) {
      TravelItineraryData = {
        title: values.title,
        description: values.description,
        countryid: addid,
      };
      console.log(TravelItineraryData);
      postmutation.mutate(TravelItineraryData);
    } else {
      TravelItineraryData = {
        title: values.title,
        description: values.description,
        countryid: values.countryid,
      };
      console.log(TravelItineraryData);
      updatemutation.mutate(TravelItineraryData);
    }
  };
  const OverviewChange = (content: string) => {
    setText(content);
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="border border-black p-5">
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 24 }}
          form={form}
          name="dynamic_form_complex"
          style={{ maxWidth: 600 }}
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

export default TravelItinerary;
