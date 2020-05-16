import * as React from "react";
import "./style.css";
import SignUpForm from "../forms/SignUpForm";

const SignUpPage: React.FC = React.memo(() => {
  const onSubmit = async (values: any) => {};
  return <SignUpForm onSubmit={onSubmit} />;
});

export default SignUpPage;
