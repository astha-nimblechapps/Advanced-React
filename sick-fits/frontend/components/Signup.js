import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import Link from 'next/link';
import { LOGGED_USER } from './User'

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
        email: '',
        name: '',
        password: '',
      };
      saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      
    render() {
        return (
            <Mutation mutation={SIGNUP} variables={ this.state } refetchQueries={[
                {
                    query: LOGGED_USER
                }
            ]}>
                { 
                    (singup,{error,loading}) => {

                    return(
            <Form method='post' onSubmit={
                async (e) => {
                    e.preventDefault();
                    await singup();
                    this.setState({ name: '', email: '', password: '' });
                }
            }>
                <Error error={error} />
                <fieldset disabled={loading} aria-busy={loading}>
                    <h2>Sign Up for an account</h2>
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
                    <label htmlFor="name">
                        Name
                        <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
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
                    <Link href='./signin'>
                        <a>Login Here</a>
                    </Link>
                    <br/>
                    <button style={{ marginTop: 10 }} type="submit">Sign Up!</button>

                </fieldset>
            </Form>
                    )
            }
        }
    </Mutation>
        );
    }
}

export default Signup;
export { SIGNUP };