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
  onSubmit: (values: any) => void;
}

interface ErrorsType {
  email?: string;
  passwords?: string;
}

interface StateType {
  email: string;
  password: string;
  errors?: ErrorsType;
}

const LoginForm: React.FC<Props> = React.memo(({ onSubmit }) => {
  const initialState: StateType = { email: "", password: "" };
  const [state, setState] = React.useState<StateType>(initialState);

  const handleChange = (e: React.ChangeEvent, data: InputOnChangeData) => {
    validateData(data);
  };
  const validateData = (data: InputOnChangeData) => {
    const { name, value } = data;
    if (name === "email") {
      if (validator.isEmail(value))
        setState({
          ...state,
          email: value,
          errors: { ...state.errors, email: "" },
        });
      else {
        setState({
          ...state,
          email: value,
          errors: { ...state.errors, email: "Please enter a correct email" },
        });
      }
    } else if (name === "password") {
      if (validator.isLength(value, { min: 4 }))
        setState({
          ...state,
          password: value,
          errors: { ...state.errors, passwords: "" },
        });
      else {
        setState({
          ...state,
          password: value,
          errors: { ...state.errors, passwords: "short password" },
        });
      }
    }
  };

  const isValid = (values: ErrorsType): boolean => {
    if (
      validator.isEmpty(values?.email ?? "") &&
      validator.isEmpty(values?.passwords ?? "")
    )
      return true;
    return false;
  };

  const handleSubmit = (e: React.FormEvent, data: FormProps) => {
    if (isValid(state?.errors ?? {})) onSubmit(state);
    else setState({ ...state });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Header as="h3" color="blue" textAlign="center">
          C S Sign In
        </Header>
        <Form size="small" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              error={
                state?.errors?.email
                  ? {
                      content: state?.errors?.email,
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
                state?.errors?.passwords
                  ? {
                      content: state?.errors?.passwords,
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
