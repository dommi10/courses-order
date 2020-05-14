import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserState } from "../../store/types";
import { connect } from "react-redux";

const PublicRoute: React.ComponentType<any> = ({
  user,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !user ? (
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

function mapStateToProps(state: UserState) {
  return {
    user: state.data,
  };
}

export default connect(mapStateToProps)(PublicRoute);
