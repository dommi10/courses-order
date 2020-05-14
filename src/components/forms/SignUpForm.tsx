import * as React from "react";
import { Form, Input } from "antd";
import "../pages/style.css";

const SignUpForm: React.FC = () => {
  const formItemLayout = {
    labelCol: {
      xs: { span: 2 },
      sm: { span: 2 },
    },
    wrapperCol: {
      xs: { span: 2 },
      sm: { span: 4 },
    },
  };
  return (
    <Form {...formItemLayout}>
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
        <Input />
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
