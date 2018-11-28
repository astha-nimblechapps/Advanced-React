import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import { LOGGED_USER } from "./User";
import { TEMP_DATA } from "./Cart";
import React, { Component } from "react";

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
          <button onClick={signout}>Sign Out</button>
        )}
      </Mutation>
    );
  }
}

export default SignOut;
