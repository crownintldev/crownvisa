//@ts-nocheck
import { Option, formItemLayout, tailFormItemLayout } from "@/constants/constants";
import { Button, Checkbox, Form, Input, Select } from "antd";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineUser,
} from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { useMutation } from "react-query";
import { toast } from "react-toastify";

const postUserData = async (UserData) => {
  const response = await axios.post("/api/user", UserData);
  return response.data;
};

const Signup: React.FC = () => {
  const router = useRouter();
  const [form] = Form.useForm();

  const mutation = useMutation(postUserData, {
    onSuccess: () => {
      // Perform actions on successful data posting
      toast.success("Country data Added successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      router.push("/AboutPage");
    },
    onError: (error) => {
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

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    const combinedPhoneNumber = `${values.prefix}${values.phonenumber}`;
    const userdata = {
      username: values.username,
      email: values.email,
      password: values.password,
      phonenumber: combinedPhoneNumber,
    };
    mutation.mutate(userdata);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="+86">+86</Option>
        <Option value="+87">+87</Option>
      </Select>
    </Form.Item>
  );

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ["zhejiang", "hangzhou", "xihu"],
        prefix: "86",
      }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="username"
        label="Username"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: "Please input your nickname!",
            whitespace: true,
          },
        ]}
      >
        <Input suffix={<AiOutlineUser />} />
      </Form.Item>

      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
      >
        <Input suffix={<AiOutlineMail />} />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The new password that you entered do not match!")
              );
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="phonenumber"
        label="Phone Number"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{ width: "100%" }}
          suffix={<AiOutlinePhone />}
        />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(new Error("Should accept agreement")),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the{" "}
          <a className="login-form-forgot text-[#fe720f]" href="">
            Terms and Conditions
          </a>
        </Checkbox>
      </Form.Item>
      <Button
        type="primary"
        htmlType="submit"
        className="bg-[#fe720f] w-[100%]"
      >
        Submit
      </Button>
      <div className="flex justify-center my-2">
        <p className="mr-2">Already have an account?</p>
        <a className="login-form-forgot text-[#fe720f]" href="">
          Signup
        </a>
      </div>
      <div className="flex items-center">
        <hr className="w-[45%]" />
        <span className="mx-2 ">OR</span>
        <hr className="w-[45%]" />
      </div>
      <div className="flex justify-between items-center my-2">
        <div className="flex items-center rounded border border-black p-2 mr-2">
          <FcGoogle size={25} />
          <span className="ml-2">Google</span>{" "}
        </div>
        <div className="flex items-center rounded border border-black p-2 mr-2">
          <BiLogoFacebook size={25} className="text-blue-700" />{" "}
          <span className="ml-2">Facebook</span>
        </div>
        <div className="flex items-center rounded border border-black p-2">
          {" "}
          <AiFillGithub size={25} /> <span className="ml-2">Github</span>
        </div>
      </div>
    </Form>
  );
};

export default Signup;
