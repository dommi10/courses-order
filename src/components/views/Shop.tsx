import * as React from "react";
import { TransitionablePortal, Segment, Header, Icon } from "semantic-ui-react";

interface Props {
  open: boolean;
  onClose: () => void;
}
const Shop: React.FC<Props> = ({ open, onClose }) => {
  React.useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 2000);
  }, [onClose]);
  return (
    <TransitionablePortal onClose={onClose} open={open}>
      <Segment
        style={{ right: "2%", position: "fixed", top: "12%", zIndex: 1000 }}
      >
        <Header>
          <Icon name="shopping cart" />
          Panier
        </Header>
        <p>Portals have tons of great callback functions to hook into.</p>
        <p>To close, simply click the close button or click away</p>
      </Segment>
    </TransitionablePortal>
  );
};
export default Shop;
