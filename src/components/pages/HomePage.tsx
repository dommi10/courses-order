import * as React from "react";
import TopNavigation from "../views/TopNavigation";
import FooterPage from "./FooterPage";
import { Layout } from "antd";

const HomePage: React.FC = () => {
  const { Header, Content } = Layout;
  return (
    <Layout>
      <Header>
        <TopNavigation />
      </Header>
      <Content></Content>
      <FooterPage />
    </Layout>
  );
};

export default HomePage;
