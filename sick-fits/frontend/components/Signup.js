import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error, { ErrorStyles } from "./ErrorMessage";
import Router from "next/router";
import SingIn from "./SignIn";
import {
  Label,
  Input,
  InputGroup,
  ButtonLink,
  Button,
  Card
} from "../lib/exim-component";
import { LOGGED_USER } from "./User";
import SignIn from "./SignIn";

const SIGNUP = gql`
  mutation SIGNUP($email: String!, $name: String!, $password: String!) {
    singup(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

class Signup extends Component {
  state = {
    email: {
      value: "",
      isValid: false,
      errorMessage: ""
    },
    name: {
      value: "",
      isValid: false,
      errorMessage: ""
    },
    password: {
      value: "",
      isValid: false,
      errorMessage: ""
    },
    isFormValid: false,
    isVissible: false,
    errorMessage: ""
  };

  saveToState = e => {
    let name = e.target.name;
    let value = e.target.value;
    let isValid = false;
    let errorMessage = "";
    switch (name) {
      case "email":
        isValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        !isValid &&
          (errorMessage = value
            ? "Invalid email address"
            : "Email is required");
        break;
      case "password":
        isValid = value.length >= 6;
        !isValid &&
          (errorMessage = value
            ? "Minimum 6 character required."
            : "Password is required");
        break;
      case "name":
        isValid = value.match(/^[A-Za-z\s]+$/);
        !isValid &&
          (errorMessage = value
            ? "Only characters allowed."
            : "Name is required");
        break;
      default:
        break;
    }
    this.setState(
      {
        [name]: {
          value,
          isValid,
          errorMessage
        }
      },
      this.validateForm
    );
  };

  validateForm = () => {
    let { email, password, name } = this.state;
    this.setState({
      isFormValid: email.isValid && password.isValid && name.isValid
    });
  };

  renderStatus = async (e, singup) => {
    e.preventDefault();
    await singup();
    this.setState({
      email: {
        value: "",
        isValid: false,
        errorMessage: ""
      },
      name: {
        value: "",
        isValid: false,
        errorMessage: ""
      },
      password: {
        value: "",
        isValid: false,
        errorMessage: ""
      },
      isFormValid: false,
      isVissible: false
    });
  };

  render() {
    let { email, password, name, isFormValid } = this.state;
    return (
      <div>
        <Mutation
          mutation={SIGNUP}
          variables={{
            email: email.value,
            name: name.value,
            password: password.value
          }}
          refetchQueries={[
            {
              query: LOGGED_USER
            }
          ]}
        >
          {(singup, { error, loading }) => {
            return (
              <Card>
                <Form
                  method="post"
                  onSubmit={async e => {
                    this.renderStatus(e, singup);
                  }}
                >
                  <Error error={error} />

                  <fieldset disabled={loading} aria-busy={loading}>
                    <h6 style={{ marginTop: "8px", marginBottom: "8px" }}>
                      Sign Up for an account
                    </h6>
                    <Label size="small">Email:</Label>

                    <InputGroup
                      validationMessage={email.errorMessage}
                      validationState={email.isValid ? "" : "error"}
                    >
                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email.value}
                        onChange={this.saveToState}
                      />
                    </InputGroup>

                    <Label size="small">Name:</Label>

                    <InputGroup
                      validationMessage={name.errorMessage}
                      validationState={name.isValid ? "" : "error"}
                    >
                      <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={name.value}
                        onChange={this.saveToState}
                      />
                    </InputGroup>

                    <Label size="small">Password:</Label>
                    <InputGroup
                      validationMessage={password.errorMessage}
                      validationState={password.isValid ? "" : "error"}
                    >
                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={password.value}
                        onChange={this.saveToState}
                      />
                    </InputGroup>

                    <ButtonLink
                      onClick={() =>
                        this.state.isVissible
                          ? this.setState({ isVissible: false })
                          : this.setState({ isVissible: true })
                      }
                    >
                      {" "}
                      If you already registered.? Login Here
                    </ButtonLink>
                    <br />
                    <Button
                      type="submit"
                      loader={loading}
                      disabled={!isFormValid}
                    >
                      Sign Up!
                    </Button>
                  </fieldset>
                </Form>
              </Card>
            );
          }}
        </Mutation>
        {this.state.isVissible && <SingIn />}
      </div>
    );
  }
}

export default Signup;
export { SIGNUP };
