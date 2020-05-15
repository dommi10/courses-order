import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserState } from "../../store/types";
import { useSelector } from "react-redux";

interface StateType {
  user: UserState;
}

const PrivateRoute: React.ComponentType<any> = ({
  component: Component,
  ...rest
}) => {
  const { data } = useSelector((state: StateType) => state.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        data ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
