import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { LOGGED_USER } from "./User";
import Link from "next/link";

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
  state = {
    name: "",
    email: "",
    password: "",
    token: ""
  };

  componentDidMount() {
    if (localStorage.getItem("randomId")) {
      this.setState({ token: localStorage.getItem("randomId").toString() });
      localStorage.clear();
    }
  }
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
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
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signin();
                this.setState({ email: "", password: "" });
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign In for an account</h2>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <Link href="./reset">
                  <a>Forgot Password.?</a>
                </Link>
                <br />
                <button style={{ marginTop: 10 }} type="submit">
                  Sign In!
                </button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default SignIn;
