import * as React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

interface Props {
  onFinish: (values: any) => void;
}

const LoginForm: React.FC<Props> = ({ onFinish }) => {
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a
          onClick={(event) => event.preventDefault}
          className="login-form-forgot"
          href="/"
        >
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <br />
        <br />
        <div
          style={{
            textAlign: "center",
          }}
        >
          Or
          <br />
          <a href="/" onClick={(event) => event.preventDefault}>
            register now !
          </a>
        </div>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
