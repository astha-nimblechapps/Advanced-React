import React, { Component } from 'react';
import {Mutation} from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error, {ErrorStyles} from './ErrorMessage';
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
        errorMessage:'',
      };
      saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
      };
      
      renderStatus = async (e, resetPassword) => {
        e.preventDefault();
        if (!this.state.password || !this.state.confirmPassword) {
          this.setState({ errorMessage: "All Fields are required.!!" });
        } else if (this.state.confirmPassword !== this.state.password) {
          console.log("True")
          this.setState({ errorMessage: "Password Does not match" });
        } else {
          await resetPassword();
          this.setState({ password: '', confirmPassword: '', errorMessage:''});
        }
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
                    this.renderStatus(e, resetPassword);
                }
            }>
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