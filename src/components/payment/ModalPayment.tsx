import * as React from "react";
import { Modal, Icon, GridColumn, Grid, Menu } from "semantic-ui-react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import CheckoutForm from "../payment/CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_eslF3xrwPCuHzx8P6RUiKydC");

interface Props {
  open: boolean;
  onClose: () => void;
}

const PaymentPage: React.FC<Props> = ({ open, onClose }) => {
  const [isLoading, setLoading] = React.useState(false);
  return (
    <Modal
      size="tiny"
      open={open}
      onClose={onClose}
      closeOnDimmerClick={false}
      closeOnEscape={false}
    >
      <Modal.Header>
        <Grid>
          <GridColumn width="14">Confrim Your Payment </GridColumn>
          <GridColumn width="2">
            {!isLoading && (
              <Menu.Item onClick={onClose}>
                <Icon name="close" flipped="horizontally" color="blue" link />
              </Menu.Item>
            )}
          </GridColumn>
        </Grid>
      </Modal.Header>
      <Modal.Content>
        <Elements stripe={stripePromise}>
          <CheckoutForm
            onClose={onClose}
            onLoading={(loading: boolean) => {
              setLoading(loading);
            }}
          />
        </Elements>
      </Modal.Content>
    </Modal>
  );
};
export default PaymentPage;
