import * as React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
  InputOnChangeData,
  FormProps,
} from "semantic-ui-react";

import validator from "validator";

interface Props {
  onFinish: (values: any) => void;
}

interface StateType {
  emailError?: string;
  passwordError?: string;
  email?: string;
  password?: string;
}

const LoginForm: React.FC<Props> = React.memo(({ onFinish }) => {
  const initialState: StateType = {};
  const [state, setState] = React.useState<StateType>(initialState);

  const handleChange = (e: React.ChangeEvent, data: InputOnChangeData) => {
    console.log(state);
    validateData(data);
  };
  const validateData = (data: InputOnChangeData) => {
    const { value } = data;
    if (data.name === "email") {
      if (validator.isEmail(data.value))
        setState({ ...state, email: value, emailError: "" });
      else {
        setState({ ...state, emailError: "Please enter a correct email" });
      }
    }
  };

  const handleSubmit = (e: React.FormEvent, data: FormProps) => {
    console.log(state);
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Header as="h2" color="blue" textAlign="center">
          Log-in to your account
        </Header>
        <Form size="small" onSubmit={handleSubmit}>
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
              onChange={handleChange}
              value={state.email}
              name="email"
              iconPosition="left"
              placeholder="E-mail address"
            />
            <Form.Input
              fluid
              required
              error={
                state.passwordError
                  ? {
                      content: state.passwordError,
                    }
                  : null
              }
              icon="lock"
              iconPosition="left"
              name="password"
              value={state.password}
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
});

export default LoginForm;
