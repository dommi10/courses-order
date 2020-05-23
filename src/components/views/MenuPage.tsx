import * as React from "react";
import { Menu, Input, Button, Icon, Label } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/actions";
import { StateType } from "../../store/types";
import Shop from "./Shop";
import { Link, useLocation } from "react-router-dom";

interface StateTypes {
  activeItem: String;
}

const MenuPage: React.FC = React.memo(() => {
  const initialState: StateTypes = { activeItem: "CS" };
  const [state, setState] = React.useState<StateTypes>(initialState);
  const [open, setOpen] = React.useState<boolean>(false);
  const { data } = useSelector((state: StateType) => state.card);
  const location = useLocation();

  const handleClose = () => {
    setOpen(false);
  };
  const handleClick = () => setOpen(!open);

  const dispatch = useDispatch<any>();

  React.useEffect(() => {
    const currentPath = location.pathname;
    if (currentPath === "/") setState({ activeItem: "CS" });
    else if (currentPath === "/cart") setState({ activeItem: "cart" });
  }, [location]);

  const handleLogOut = () => {
    dispatch(logoutUser());
  };
  return (
    <header>
      <div>
        <nav>
          <Menu secondary stackable style={{ padding: "1em 2em " }}>
            <Menu.Item
              name="CS"
              color="blue"
              active={state.activeItem === "CS"}
              // onClick={handleItemClick}
            >
              <Link to="/">CS</Link>
            </Menu.Item>
            <Menu.Item
              name="my courses"
              active={state.activeItem === "my courses"}
            />
            <Menu.Item name="cart" active={state.activeItem === "cart"}>
              <Link to="/cart">Cart</Link>
            </Menu.Item>
            <Menu.Menu position="right">
              <Menu.Item>
                <Input icon="search" placeholder="Search..." />
              </Menu.Item>
              <Menu.Item as="a" onClick={handleClick}>
                <Icon name="alarm" color="red" />
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
        <Shop open={open} onClose={handleClose} />
      </div>
    </header>
  );
});

export default MenuPage;
