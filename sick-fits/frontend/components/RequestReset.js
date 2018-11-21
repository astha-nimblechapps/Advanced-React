import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';



const RESET_REQUEST = gql`
  mutation RESET_REQUEST($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;


class RequestReset extends Component {
    state = {
        name: '',
        email: '',
        password: '',
      };
      saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      
    render() {
        return (
            <Mutation mutation={RESET_REQUEST} variables={ this.state }>
                {
                    (requestReset,{error,loading,called}) => {

                    return(
            <Form method='post' onSubmit={
                async (e) => {
                    e.preventDefault();
                    await requestReset();
                    this.setState({ email: ''});
                }
            }>
                <Error error={error} />
                {
                    !error  && !loading && called && <p> Success check your email fro reset link..!</p>
                }
                <fieldset disabled={loading} aria-busy={loading}>
                    <h2>Password Reset</h2>
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

                    <button type="submit">Reset</button>

                </fieldset>
            </Form>
                    )
            }
        }
    </Mutation>
        );
    }
}

export default RequestReset;