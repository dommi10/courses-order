import * as React from "react";
import LoginForm from "../forms/LoginForm";
import { StateType } from "../../store/types";
import { useSelector, useDispatch } from "react-redux";
import { logUserIn } from "../../store/actions";
import LoaderPage from "../views/LoaderPage";
import NotificationPage from "../views/NotificationPage";

const LoginPage: React.FC = React.memo(() => {
  const { isLoading, hasError } = useSelector((state: StateType) => state.user);
  const dispacth = useDispatch<any>();

  const onSubmit = async (values: any) => {
    dispacth(
      logUserIn({
        username: values.email,
        passwords: values.password,
      })
    );
  };

  if (hasError || !isLoading) {
    return (
      <div>
        {hasError && (
          <NotificationPage
            title="Notification"
            message="something went wrong"
          />
        )}
        <LoginForm onSubmit={onSubmit} />
      </div>
    );
  }
  return <LoaderPage />;
});

export default LoginPage;
