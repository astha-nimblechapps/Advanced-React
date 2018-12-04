import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error,{ErrorStyles} from './ErrorMessage';
import { Label, Input, ButtonLink, Button, Card } from '../lib/exim-component';

const RESET_REQUEST = gql`
  mutation RESET_REQUEST($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

class RequestReset extends Component {
  state = {
    email: '',
    errorMessage:'',
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  renderStatus = async (e, reset) => {
    e.preventDefault();
    if (!this.state.email) {
      this.setState({ errorMessage: "All Fields are required.!!" });
    } else if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      console.log("True")
      this.setState({ errorMessage: "Please Enter Valid Email Address" });
    } else {
      await reset();
      this.setState({
        email: "",
        errorMessage: ""
      });
    }
  };


  render() {
    return (
      <Mutation mutation={RESET_REQUEST} variables={this.state}>
        {(reset, { error, loading, called }) => (
          <Card>
          <Form
            method="post"
            data-test="form"
            onSubmit={async e => {
              this.renderStatus(e, reset);
            }}
          >
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
              <h6 style={{marginTop: '8px', marginBottom: '8px'}}>Request a password reset</h6>
              <Error error={error} />
              {!error && !loading && called && <p>Success! Check your email for a reset link!</p>}
              <Label size="small">Email</Label>
               
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
             

              <Button type="submit" loader={loading}>Request Reset</Button>
            </fieldset>
          </Form>
          </Card>
        )}
      </Mutation>
    );
  }
}

export default RequestReset;
export { RESET_REQUEST };
