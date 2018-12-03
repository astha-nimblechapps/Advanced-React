import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { LOGGED_USER } from "./User";
import { TEMP_DATA } from "./Cart";
import React, { Component } from "react";
import Router from "next/router";
import { ButtonLink } from "./../lib/exim-component";

const SIGNOUT = gql`
  mutation SIGNOUT {
    signout {
      message
    }
  }
`;

class SignOut extends Component {
  state = {
    tokenId: ""
  };

  signOut = async (e, signout) => {
    e.preventDefault();
    await signout();
    Router.push({
      pathname: "/items"
    });
  };

  componentDidMount() {
    if (localStorage.getItem("randomId")) {
      this.setState({ tokenId: localStorage.getItem("randomId").toString() });
      localStorage.clear();
    }
  }
  render() {
    return (
      <Mutation
        mutation={SIGNOUT}
        refetchQueries={[
          { query: LOGGED_USER },
          {
            query: TEMP_DATA,
            variables: {
              token: this.state.tokenId ? this.state.tokenId : "123"
            }
          }
        ]}
      >
        {(signout, { error, loading }) => (
          <ButtonLink onClick={e => this.signOut(e, signout)}>
            Sign Out
          </ButtonLink>
        )}
      </Mutation>
    );
  }
}

export default SignOut;
