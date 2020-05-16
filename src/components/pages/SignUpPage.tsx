import * as React from "react";
import "./style.css";
import LoaderPage from "../views/LoaderPage";
import NotificationPage from "../views/NotificationPage";
import SignUpForm from "../forms/SignUpForm";
import { StateType } from "../../store/types";
import { useSelector, useDispatch } from "react-redux";
import { signUpUser } from "../../store/actions";

const SignUpPage: React.FC = React.memo(() => {
  const { isLoading, hasError } = useSelector((state: StateType) => state.user);
  const dispacth = useDispatch<any>();

  const onSubmit = async (values: any) => {
    dispacth(
      signUpUser({
        username: values.email,
        passwords: values.passwords,
        levels: 1,
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
        <SignUpForm onSubmit={onSubmit} />
      </div>
    );
  }
  return <LoaderPage />;
});

export default SignUpPage;
