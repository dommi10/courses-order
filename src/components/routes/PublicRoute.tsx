import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { StateType } from "../../store/types";
import { useSelector } from "react-redux";

const PublicRoute: React.ComponentType<any> = ({
  component: Component,
  ...rest
}) => {
  const { data } = useSelector((state: StateType) => state.user);
  return (
    <Route
      {...rest}
      render={(props) =>
        !data ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PublicRoute;
