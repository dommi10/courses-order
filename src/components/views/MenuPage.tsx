import * as React from "react";
import { Menu, MenuItemProps, Input } from "semantic-ui-react";

interface StateType {
  activeItem: String;
}

const MenuPage: React.FC = React.memo(() => {
  const initialState: StateType = { activeItem: "home" };
  const [state, setState] = React.useState<StateType>(initialState);
  const handleItemClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    data: MenuItemProps
  ) => {
    const { name } = data;
    setState({ activeItem: name ?? "" });
  };
  return (
    <header>
      <nav>
        <Menu secondary>
          <Menu.Item
            name="home"
            active={state.activeItem === "home"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={state.activeItem === "messages"}
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
            <Menu.Item
              name="logout"
              active={state.activeItem === "logout"}
              onClick={handleItemClick}
            />
          </Menu.Menu>
        </Menu>
      </nav>
    </header>
  );
});

export default MenuPage;
