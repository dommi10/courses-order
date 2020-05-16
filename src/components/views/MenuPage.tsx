import * as React from "react";
import { Menu, MenuItemProps, Input, Button } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/actions";

interface StateType {
  activeItem: String;
}

const MenuPage: React.FC = React.memo(() => {
  const initialState: StateType = { activeItem: "CS" };
  const [state, setState] = React.useState<StateType>(initialState);
  const handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => {
    const { name } = data;
    setState({ activeItem: name ?? "" });
  };

  const dispatch = useDispatch<any>();

  const handleLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <header>
      <nav>
        <Menu secondary stackable style={{ padding: "1em 2em " }}>
          <Menu.Item
            name="CS"
            color="blue"
            active={state.activeItem === "CS"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="my courses"
            active={state.activeItem === "my courses"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="friends"
            active={state.activeItem === "friends"}
            onClick={handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input icon="search" placeholder="Search..." />
            </Menu.Item>
            <Menu.Item>
              <Button primary onClick={handleLogOut}>
                Logout
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </nav>
    </header>
  );
});

export default MenuPage;
