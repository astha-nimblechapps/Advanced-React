import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { LOGGED_USER } from "./User";
import Link from "next/link";
import { Label, Input, ButtonLink, Modal, Button } from '../lib/exim-component';

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
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      password: "",
      token: "",
      isVissible: true,
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

  render() {
    return (
<div>
      <Modal show={this.state.isVissible}>
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
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                await signin();
                this.setState({ email: "", password: "", isVissible: false });
              }}
            >
              <Error error={error} />
              <fieldset disabled={loading} aria-busy={loading}>
                <h6 style={{marginTop: '8px', marginBottom: '8px'}}>Sign In for an account</h6>
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
                
                <ButtonLink href="./reset">
                  Forgot Password.?
                </ButtonLink>
                <br />
                <Button
                  disabled={loading}
                  type="submit"
                >
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
