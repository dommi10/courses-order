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
  confirmPasswords?: string;
}

interface StateType {
  email: string;
  passwords: string;
  confirmPasswords: string;
  errors?: ErrorsType;
}

const SignUpForm: React.FC<Props> = React.memo(({ onSubmit }) => {
  const initialState: StateType = {
    email: "",
    passwords: "",
    confirmPasswords: "",
  };
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
          passwords: value,
          errors: { ...state.errors, passwords: "" },
        });
      else {
        setState({
          ...state,
          passwords: value,
          errors: { ...state.errors, passwords: "short password" },
        });
      }
    } else {
      if (validator.equals(value, state.passwords))
        setState({
          ...state,
          confirmPasswords: value,
          errors: { ...state.errors, confirmPasswords: "" },
        });
      else {
        setState({
          ...state,
          confirmPasswords: value,
          errors: {
            ...state.errors,
            confirmPasswords: "passwords doesn't much",
          },
        });
      }
    }
  };

  const isValid = (values: ErrorsType): boolean => {
    if (
      validator.isEmpty(values?.email ?? "") &&
      validator.isEmpty(values?.passwords ?? "") &&
      validator.isEmpty(values?.confirmPasswords ?? "")
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
        <Header as="h2" color="blue" textAlign="center">
          CS Sign Up
        </Header>

        <Form size="small" onSubmit={handleSubmit}>
          <Segment stacked>
            <Form.Input
              error={
                state.errors?.email
                  ? {
                      content: state.errors.email,
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
                state.errors?.passwords
                  ? {
                      content: state.errors.passwords,
                    }
                  : null
              }
              onChange={handleChange}
              icon="lock"
              iconPosition="left"
              name="password"
              value={state.passwords}
              placeholder="Password"
              type="password"
            />
            <Form.Input
              fluid
              required
              error={
                state.errors?.confirmPasswords
                  ? {
                      content: state.errors.confirmPasswords,
                      pointing: "left",
                    }
                  : null
              }
              icon="lock"
              onChange={handleChange}
              iconPosition="left"
              name="confirmPassword"
              value={state.confirmPasswords}
              placeholder="Confirm Password"
              type="password"
            />

            <Button primary={true} fluid size="large">
              Sign Up
            </Button>
          </Segment>
        </Form>
        <Message>
          Have you already accout ? <a href="/login">Log in</a>
        </Message>
      </Grid.Column>
    </Grid>
  );
});

export default SignUpForm;
