import * as React from "react";
import { UserState, User } from "../../store/types";
import { connect } from "react-redux";

const TopNavigation = (user: User) => {
  return <nav></nav>;
};

const mapStateToProps = (state: UserState) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(TopNavigation);
