import * as React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import CardSection from "./CardSelection";
import { Form, Button, Message, Icon, Grid } from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { StateType } from "../../store/types";
import { subscribeToACourse, getSecretKey } from "../../actions";
import { deleteToCard } from "../../store/actions";

interface Props {
  onClose: () => void;
  onLoading: (loading: boolean) => void;
}

const CheckoutForm: React.FC<Props> = ({ onClose, onLoading }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState("");
  const [title, setTitle] = React.useState("");
  const { data } = useSelector((state: StateType) => state.card);
  const dispacth = useDispatch<any>();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make  sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setLoading(true);
    onLoading(true);
    setError("");
    setHasError(false);
    setSuccess(false);

    const card = elements.getElement(CardElement);

    // if (card) result = await stripe.createToken(card);
    const response = await getSecretKey();
    if (response.status !== 200) {
      // Show error to your customer.
      setLoading(false);
      setHasError(true);
      onLoading(false);
      // Show error to your customer (e.g., insufficient funds)
      setError(response.data.error);
      setTitle("Your payment was an error");
    } else {
      // Send the token to your server.
      // This function does not exist yet; we will define it in the next step.
      //   stripeTokenHandler(result.token);
      let result: any;
      if (card)
        result = await stripe.confirmCardPayment(response.data.client_secret, {
          payment_method: {
            card,
            billing_details: {
              name: "Jenny Rosen",
            },
          },
        });
      if (result.error) {
        setLoading(false);
        setHasError(true);
        onLoading(false);
        // Show error to your customer (e.g., insufficient funds)
        setError(result.error.message);
        setTitle("Your payment was an error");
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === "succeeded") {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
          //save all subscrition to
          setSuccess(true);
          if (data) {
            for (const course of data) {
              const response = await subscribeToACourse(course);

              if (response.status === 200) {
                dispacth(deleteToCard(course));
              } else {
                setSuccess(false);
                setTitle("Your subscription was an error");
                setError(response.data.error);
                setHasError(true);
              }
            }
            onLoading(false);
            setLoading(false);
            // if (!hasError) onClose();
          }
        }
      }
    }
  };

  return (
    <div>
      {hasError && error.length > 0 && (
        <Message error header={title} content={error} />
      )}
      {!success ? (
        <Form onSubmit={handleSubmit} loading={loading}>
          <Form.Field>
            <CardSection />
          </Form.Field>

          <Button primary disabled={!stripe}>
            <Icon name="payment" />
            Confirm pay
          </Button>
        </Form>
      ) : (
        <Form loading={loading} onSubmit={onClose}>
          <Grid container textAlign="center">
            <Grid.Column mobile={16} tablet={8} computer={1} />
            <Grid.Column mobile={16} tablet={16} computer={8}>
              <Button color="green">
                <Icon name="check circle" />
                Payment Success
              </Button>
            </Grid.Column>
          </Grid>
        </Form>
      )}
    </div>
  );
};
export default CheckoutForm;
