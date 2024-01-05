//@ts-nocheck
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { BiLogoFacebook } from "react-icons/bi";
import { AiFillGithub, AiOutlineMail, AiOutlineUser } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const Login: React.FC = () => {
  const router=useRouter();
  const onFinish = async(values: any) => {
    console.log("Success:", values);
    try{
      const { data } = await axios.get(`/api/user/email/${values.email}`);
      console.log(data);
      if(data.user.email === values.email && data.user.password === values.password){
        router.push('/AboutPage');
      }
    }catch(error) {
      console.error("Error:", error);
    }
  };
  return(
    <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
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

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: "Please input your password!" }]}
    >
      <Input.Password />
    </Form.Item>
    <div className="flex justify-between">
      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>
      <a className="login-form-forgot text-blue-500" href="">
        Forgot password
      </a>
    </div>
    <Button type="primary" htmlType="submit" className="bg-blue-700 w-[100%]">
      Submit
    </Button>
    <div className="flex justify-center my-2">
      <p className="mr-2">Dont have an account?</p>
      <a className="login-form-forgot text-blue-500" href="">
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
      <div
        onClick={() => signIn("github")}
        className="flex items-center rounded border border-black p-2"
      >
        {" "}
        <AiFillGithub size={25} /> <span className="ml-2">Github</span>
      </div>
    </div>
  </Form>
  )
}

export default Login;
