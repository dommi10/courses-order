import * as React from "react";
import { UserState, User } from "../../store/types";
import { connect } from "react-redux";
import { Menu, Button } from "antd";

interface TopNavigationProps {
  user: User;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ user }) => (
  <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
    {/* <div
      style={{
        height: "32px",
        // background: rgba(255, 255, 255, 0.2),
        margin: "16px",
      }}
    ></div> */}
    <Menu.Item key="home">Home</Menu.Item>
    <Menu.Item key="courses">My Courses</Menu.Item>
    <Menu.Item key="log">
      <Button
        about={"Login into your account"}
        type={"primary"}
        block={true}
        shape={"round"}
      >
        {user ? "Login" : "Logout"}
      </Button>
    </Menu.Item>
  </Menu>
);

const mapStateToProps = (state: UserState) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(TopNavigation);
