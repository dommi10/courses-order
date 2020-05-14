import * as React from "react";
import { Layout } from "antd";

const FooterPage: React.FC = () => {
  const { Footer } = Layout;
  return (
    <Footer style={{ textAlign: "center" }}>
      Courses Subscription ©{new Date().getFullYear()} by Dom's Buhendwa
    </Footer>
  );
};
export default FooterPage;
