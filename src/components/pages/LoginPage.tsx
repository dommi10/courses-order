import * as React from "react";
import { Card, Layout } from "antd";
import LoginForm from "../forms/LoginForm";

const LoginPage: React.FC = () => {
  const { Content } = Layout;

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Layout
      style={{
        background: "#ecece",
        padding: "30px",
      }}
    >
      <Content>
        <Card
          title="Sign in to your account"
          bordered={true}
          style={{ width: 300 }}
        >
          <LoginForm onFinish={onFinish} />
        </Card>
      </Content>
    </Layout>
  );
};

export default LoginPage;
