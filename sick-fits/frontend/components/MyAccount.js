import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import User, { LOGGED_USER } from "./User";
import Permission from "./Permission";
import Error from "./ErrorMessage";
import MyAccountStyle from "./styles/MyAccountStyle";
import Head from "next/head";
import { Typography} from "./../lib/exim-component"; 
import { from } from "zen-observable";

const UPDATE_USER = gql`
  mutation UPDATE_USER($id: ID!, $name: String, $email: String) {
    updateUser(id: $id, name: $name, email: $email) {
      id
      name
    }
  }
`;

class MyAccount extends Component {
  constructor(porps) {
    super(porps);
    this.state = {
      edit: true,
      name: "",
      email: ""
    };

    this.name = React.createRef();
  }

  updateUser = async (e, updateUser, val) => {
    e.preventDefault();
    console.log(val);

    if (this.state.edit) {
      console.log("True");
      this.setState({
        edit: false,
        email: val.email,
        name: val.name
      });
    } else {
      console.log("False");
      this.setState({
        edit: true
      });
    }

    if (this.state.email || this.state.name) {
      const user = await updateUser({
        variables: {
          id: val.id,
          ...this.state
        }
      });

      console.log(user);
    }
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <User>
        {({ data: { me } }) => {
            console.log(me)
            console.log(me.permissions.includes("ADMIN"))
          if (!me) return <p> No Details Found </p>;
          return (
            <Mutation
              mutation={UPDATE_USER}
              refetchQueries={[{ query: LOGGED_USER }]}
            >
              {(updateUser, { error, loading }) => {
                return (
                  <MyAccountStyle>
                    <Head>
                      <title>My Account Details</title>
                    </Head>

                    <p>
                      <Typography useFor="caption">Name:</Typography>
                      <span>
                        {this.state.edit ? (
                          me.name
                        ) : (
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="name"
                            required
                            ref={this.name}
                            disabled={this.state.edit}
                            defaultValue={me.name}
                            onChange={this.handleChange}
                          />
                        )}
                      </span>
                      <div style={{ float: "right", padding: 0 }}>
                        <button
                          style={{ border: "none" }}
                          onClick={e => this.updateUser(e, updateUser, me)}
                        >
                          {this.state.edit ? "Edit" : "Update"}
                        </button>
                      </div>
                    </p>
                    <p>
                      <span>Email:</span>
                      <span>
                        {this.state.edit ? (
                          me.email
                        ) : (
                          <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            required
                            disabled={this.state.edit}
                            defaultValue={me.email}
                            onChange={this.handleChange}
                          />
                        )}
                      </span>
                    </p>
                  
                        {
                            me.permissions.includes("ADMIN") &&  <p> <span>Permission:</span>
                      <Permission /> </p>
                        }
                     
               
                  </MyAccountStyle>
                );
              }}
            </Mutation>
          );
        }}
      </User>
    );
  }
}

export default MyAccount;
