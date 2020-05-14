import * as React from "react";
import { Layout, Steps, Button, message } from "antd";
import "./style.css";
import SignUpForm from "../forms/SignUpForm";

interface StepType {
  title: string;
  content: any;
}

const SignUpPage: React.FC = () => {
  const { Content } = Layout;
  const { Step } = Steps;
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps: Array<StepType> = [
    {
      title: "User Info",
      content: <SignUpForm />,
    },
    {
      title: "Next",
      content: <SignUpForm />,
    },
  ];
  return (
    <Layout>
      <Content className="content">
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </Content>
    </Layout>
  );
};

export default SignUpPage;
