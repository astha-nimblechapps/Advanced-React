import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error, { ErrorStyles } from "./ErrorMessage";
import { LOGGED_USER } from "./User";
import Link from "next/link";
import {
  Label,
  Input,
  ButtonLink,
  Modal,
  Button,
  Card,
} from "../lib/exim-component";

const SIGNIN = gql`
  mutation SIGNIN($email: String!, $password: String!, $token: String!) {
    signin(email: $email, password: $password, token: $token) {
      id
      email
      name
    }
  }
`;

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      token: "",
      isVissible: true,
      errorMessage: ""
    };
  }

  componentDidMount() {
    if (localStorage.getItem("randomId")) {
      this.setState({ token: localStorage.getItem("randomId").toString() });
      // localStorage.clear();
    }
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderStatus = async (e, signin) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      this.setState({ errorMessage: "All Fields are required.!!" });
    } else if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      console.log("True")
      this.setState({ errorMessage: "Please Enter Valid Email Address" });
    } else {
      await signin();
      this.setState({
        email: "",
        password: "",
        isVissible: false,
        errorMessage: ""
      });
    }
  };

  render() {
    return (
      <div>
        <Modal
          className="modal-signin"
          show={this.state.isVissible}
          onHide={() => this.setState({ isVissible: false })}
          closeOnOutsideClick={() => this.setState({ isVissible: false })}
        >
          <Modal.Body>
            <Mutation
              mutation={SIGNIN}
              variables={this.state}
              refetchQueries={[
                {
                  query: LOGGED_USER
                }
              ]}
            >
              {(signin, { error, loading }) => {
                return (
                  <Form
                    style={{
                      borderWidth: 1,
                      borderColor: "#393939",
                      borderStyle: "solid",
                      boxShadow: "none"
                    }}
                    method="post"
                    onSubmit={async e => {
                      this.renderStatus(e, signin);
                    }}
                  >
                    {this.state.errorMessage ? (
                      <ErrorStyles>
                        <p data-test="graphql-error">
                          <strong>Shoot!</strong>
                          {this.state.errorMessage}
                        </p>
                      </ErrorStyles>
                    ) : (
                      <Error error={error} />
                    )}

                    <fieldset disabled={loading} aria-busy={loading}>
                      <h6 style={{ marginTop: "8px", marginBottom: "8px" }}>
                        Sign In for an account
                      </h6>
                      <Label size="small">Email</Label>

                      <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.saveToState}
                      />

                      <Label size="small">Password</Label>

                      <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.saveToState}
                      />

                      <ButtonLink href="./reset">Forgot Password.?</ButtonLink>
                      <br />
                      <Button loader={loading} disabled={loading} type="submit">
                        Sign In!
                      </Button>
                    </fieldset>
                  </Form>
                );
              }}
            </Mutation>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default SignIn;
