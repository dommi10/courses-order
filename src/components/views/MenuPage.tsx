import * as React from "react";
import {
  Menu,
  MenuItemProps,
  Input,
  Button,
  Icon,
  Label,
} from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions";
import { StateType } from "../../store/types";

interface StateTypes {
  activeItem: String;
}

const MenuPage: React.FC = React.memo(() => {
  const initialState: StateTypes = { activeItem: "CS" };
  const [state, setState] = React.useState<StateTypes>(initialState);
  const { data } = useSelector((state: StateType) => state.card);

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
            <Menu.Item as="a">
              <Icon name="alarm" />
              Panier
              <Label color="red" floating>
                {data?.length}
              </Label>
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
