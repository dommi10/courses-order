import * as React from "react";
import { Message } from "semantic-ui-react";

const FooterPage: React.FC = () => {
  return (
    <Message style={{ textAlign: "center" }}>
      Courses Subscription ©{new Date().getFullYear()}{" "}
      <a target="new" href={"https://twitter.com/BuhendwaDoms"}>
        by Dom's Buhendwa
      </a>
    </Message>
  );
};
export default FooterPage;
