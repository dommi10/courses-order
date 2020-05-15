import * as React from "react";
import { Card, Layout, Spin } from "antd";
import LoginForm from "../forms/LoginForm";
import { UserState } from "../../store/types";
import { useSelector, useDispatch } from "react-redux";
import { logUserIn } from "../../store/actions";

interface StateType {
  user: UserState;
}

const LoginPage: React.FC = React.memo(() => {
  const { Content, Sider } = Layout;
  const { isLoading } = useSelector((state: StateType) => state.user);
  const dispacth = useDispatch<any>();

  const onFinish = async (values: any) => {
    dispacth(
      logUserIn({
        username: values.username,
        passwords: values.passwords,
      })
    );
  };

  return (
    <Layout
      style={{
        background: "#ecece",
        padding: "30px",
      }}
    >
      <Spin spinning={isLoading}>
        <Content>
          <Layout>
            <Sider className="site-layout-background" style={{ minWidth: 600 }}>
              
            </Sider>
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
        </Content>
      </Spin>
    </Layout>
  );
});

export default LoginPage;
