import * as React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

interface Props {
  onFinish: (values: any) => void;
}

interface ErrorType {
  emailError?: string;
  passwordError?: string;
}

const LoginForm: React.FC<Props> = ({ onFinish }) => {
  const errors: ErrorType = {};

  const [state, setstate] = React.useState<ErrorType>(errors);

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Header as="h2" color="blue" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              error={
                state.emailError
                  ? {
                      content: state.emailError,
                      pointing: "below",
                    }
                  : null
              }
              fluid
              icon="user"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              error={
                state.passwordError
                  ? {
                      content: state.passwordError,
                      pointing: "below",
                    }
                  : null
              }
              icon="lock"
              iconPosition="left"
              placeholder="Password"
              type="password"
            />

            <Button primary={true} fluid size="large">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="/signup">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
};

export default LoginForm;
