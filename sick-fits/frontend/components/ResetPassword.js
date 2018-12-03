import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';
import PropTypes from 'prop-types';
import { LOGGED_USER } from './User';
import { Label, Input, ButtonLink, Button, Card } from '../lib/exim-component';

const RESET_PASSWORD = gql`
  mutation RESET_PASSWORD($resetToken: String!,$password: String!, $confirmPassword: String!) {
    resetPassword(resetToken: $resetToken,password: $password, confirmPassword: $confirmPassword) {
      id
      email
      name
    }
  }
`;


class ResetPassword extends Component {
    static propTypes={
        resetToken: PropTypes.string.isRequired,
    };

    state = {
        password: '',
        confirmPassword: '',
      };
      saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      
    render() {
        return (
            <Mutation mutation={RESET_PASSWORD} variables={{ 
                resetToken: this.props.resetToken,
                password: this.state.password,
                confirmPassword: this.state.confirmPassword
             }} refetchQueries={[{
                 query: LOGGED_USER
             }]} >
                {
                    (resetPassword,{error,loading,called}) => {

                    return(
                        <Card>
            <Form method='post' onSubmit={
                async (e) => {
                    e.preventDefault();
                    await resetPassword();
                    this.setState({ password: '', confirmPassword: ''});
                }
            }>
                <Error error={error} />
                
                <fieldset disabled={loading} aria-busy={loading}>
                <h6 style={{marginTop: '8px', marginBottom: '8px'}}>Change Password</h6>
                  
                <Label size="small">Password</Label>
               
                        <Input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.saveToState}
                        />
                

                  <Label size="small">  Confirm Password</Label>
                        <Input
                        type="password"
                        name="confirmPassword"
                        placeholder="confirmPassword"
                        value={this.state.confirm}
                        onChange={this.saveToState}
                        />
                    

                    <Button type="submit" loader={loading}>Reset</Button>

                </fieldset>
            </Form>
            </Card>
                    )
            }
        }
    </Mutation>
        );
    }
}

export default ResetPassword;