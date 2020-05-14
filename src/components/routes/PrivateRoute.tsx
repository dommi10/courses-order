import * as React from "react";
import { Route, Redirect } from "react-router-dom";
import { UserState } from "../../store/types";
import { connect } from "react-redux";

const PrivateRoute: React.ComponentType<any> = ({
  user,
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        user.username ? (
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

function mapStateToProps(state: UserState) {
  return {
    user: state.user,
  };
}

export default connect(mapStateToProps)(PrivateRoute);
