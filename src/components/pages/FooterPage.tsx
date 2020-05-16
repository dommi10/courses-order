import * as React from "react";
import { Header } from "semantic-ui-react";

const FooterPage: React.FC = () => {
  return (
    <footer>
      <Header as='h5' style={{ textAlign: "center" }}>
        Courses Subscription ©{new Date().getFullYear()}{" "}
        <a target="new" href={"https://twitter.com/BuhendwaDoms"}>
          by Dom's Buhendwa
        </a>
      </Header>
    </footer>
  );
};
export default FooterPage;
