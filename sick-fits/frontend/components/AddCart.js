import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import User, { LOGGED_USER } from "./User";

const ADDCART = styled.button`
  width: 30%;
  /* border: 1px solid; */
  text-align: center;
  font-family: none;
  border: none;
`;

const ADD_TO_CART = gql`
  mutation ADD_TO_CART($id: ID!) {
    addToCart(id: $id) {
      id
      quantity
    }
  }
`;

const ADD_TO_TEMP_CART = gql`
  mutation ADD_TO_TEMP_CART(
    $id: ID!
    $token: String!
    $color: String
    $size: String
  ) {
    addToTempCart(id: $id, token: $token, color: $color, size: $size) {
      id
      quantity
      color
      size
    }
  }
`;
/**
 * e.preventDefault();
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
    console.log("Updated..!!!");
 */

class AddCart extends React.Component {
  addTempCart = async (e, addTempCart) => {
    e.preventDefault();
    if (this.props.color === '' && this.props.size === '' && this.props.color === 'none' && this.props.size === 'none') {
      alert("Please Select Color and Size both")
    } else {
      if (localStorage.getItem("randomId")) {
        console.log("true");
        await addTempCart({
          variables: {
            id: this.props.id,
            token: localStorage.getItem("randomId"),
            color: this.props.color,
            size: this.props.size
          }
        });
      } else {
        console.log("false");
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        // console.log(rand)
        this.setState({ token: rand });
        localStorage.setItem("randomId", rand);
        // console.log(JSON.stringify(localStorage.getItem("randomId")))
        await addTempCart({
          variables: {
            id: this.props.id,
            token: localStorage.getItem("randomId"),
            color: this.props.color,
            size: this.props.size
          }
        });
      }
    }
  };

  render() {
    const id = this.props.id;

    return (
      <User>
        {({ data: { me } }) => {
          if (me)
            return (
              <Mutation
                mutation={ADD_TO_CART}
                variables={{
                  id
                }}
                refetchQueries={[{ query: LOGGED_USER }]}
              >
                {(addToCart, { loading }) => (
                  <ADDCART disabled={loading} onClick={addToCart}>
                    Add{loading && "ing"}To Cart
                  </ADDCART>
                )}
              </Mutation>
            );
          else {
            return (
              <Mutation mutation={ADD_TO_TEMP_CART}>
                {(addToTempCart, { loading }) => (
                  <ADDCART
                    disabled={loading}
                    onClick={e => this.addTempCart(e, addToTempCart)}
                  >
                    Add{loading && "ing"}To Cart
                  </ADDCART>
                )}
              </Mutation>
            );
          }
        }}
      </User>
    );
  }
}

export default AddCart;
export { ADD_TO_CART, ADDCART };
