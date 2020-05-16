import * as React from "react";
import LoginForm from "../forms/LoginForm";
import { StateType } from "../../store/types";
import { useSelector, useDispatch } from "react-redux";
import { logUserIn } from "../../store/actions";

const LoginPage: React.FC = React.memo(() => {
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

  return { isLoading } && <LoginForm onFinish={onFinish} />;
});

export default LoginPage;
