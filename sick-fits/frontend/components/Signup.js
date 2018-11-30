import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import Router from 'next/router';
import SingIn from './SignIn';
import { Label, Input, ButtonLink, Button } from '../lib/exim-component';
import { LOGGED_USER } from './User'
import SignIn from './SignIn';

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
        isVissible: false
      };
      saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      
     
    render() {
        return (
            <div>
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
                    <h6 style={{marginTop: '8px', marginBottom: '8px'}}>Sign Up for an account</h6>
                    <Label size="small">Email:</Label>
                        
                        <Input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.saveToState}
                        />
                  <Label size="small">Name:</Label>
                    
                      
                        <Input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.saveToState}
                        />
                   <Label size="small">Password:</Label>
                    
                        <Input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={this.state.password}
                        onChange={this.saveToState}
                        />
                  
                    <ButtonLink onClick={() =>  this.setState({ isVissible: true })}> If you already registered.? Login Here</ButtonLink>
                    <br/>
                    <Button type="submit">Sign Up!</Button>
                   
                </fieldset>
            </Form>
                    )
            }
        }
    </Mutation>
    {
        this.state.isVissible && <SingIn></SingIn>
    }
    </div>
        );
    }
}

export default Signup;
export { SIGNUP };