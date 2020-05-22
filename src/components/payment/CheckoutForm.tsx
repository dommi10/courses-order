import React from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import CardSection from "./CardSelection";
import axios from "axios";
import { Form, Button, Message, Icon } from "semantic-ui-react";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState("");

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
    setHasError(false);

    const card = elements.getElement(CardElement);

    // if (card) result = await stripe.createToken(card);
    const response = await axios.get("/api/payment/secret");
    if (response.status !== 200) {
      // Show error to your customer.
      console.log(response.data.error);
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
      setLoading(false);
      if (result.error) {
        setHasError(true);
        // Show error to your customer (e.g., insufficient funds)
        console.log(result.error.message);
        setError(result.error.message);
      } else {
        // The payment has been processed!
        if (result.paymentIntent.status === "succeeded") {
          // Show a success message to your customer
          // There's a risk of the customer closing the window before callback
          // execution. Set up a webhook or plugin to listen for the
          // payment_intent.succeeded event that handles any business critical
          // post-payment actions.
        }
      }
    }
  };

  return (
    <div>
      {hasError && (
        <Message error header="Your payment was an error" content={error} />
      )}
      <Form onSubmit={handleSubmit} loading={loading}>
        <Form.Field>
          <CardSection />
        </Form.Field>

        <Button primary disabled={!stripe}>
          <Icon name="payment" />
          Confirm pay
        </Button>
      </Form>
    </div>
  );
}
