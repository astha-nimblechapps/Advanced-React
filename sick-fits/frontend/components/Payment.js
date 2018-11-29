import React, { Component } from "react";
import { Mutation } from "react-apollo";
import PropTypes from "prop-types";
import calcTotalPrice from "../lib/calcTotalPrice";
import Error from "./ErrorMessage";
import User, { LOGGED_USER } from "./User";
import gql from "graphql-tag";
import StripeCheckout from "react-stripe-checkout";
import Router from "next/router";
import NProgress from "nprogress";
import { totalmem } from "os";

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

const CREATE_ORDER = gql`
  mutation CREATE_ORDER($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

class Payment extends Component {
  onToken = async (res, createOrder) => {
    NProgress.start();
   // console.log("On Token Called!");
   // console.log(res);
   // console.log(res.id);
    const order = await createOrder({
      variables: {
        token: res.id
      }
    }).catch(err => {
      alert(err.message);
    });
   // console.log(order);
    Router.push({
      pathname: "/order",
      query: { id: order.data.createOrder.id }
    });
  };

  render() {
    return (
      <User>
        {({ data: { me }, loading }) => {
          if (loading) return <p>Loading</p>;
          if (!me) {
           return <p>{ this.props.children }</p>
          } else {
            return (
              <Mutation
                mutation={CREATE_ORDER}
                refetchQueries={[
                  {
                    query: LOGGED_USER
                  }
                ]}
              >
                {(createOrder, {}) => {
                  return (
                    <StripeCheckout
                      amount={calcTotalPrice(me.cart)}
                      name="DemoAstha"
                      description={`Order of ${totalItems(me.cart)} items`}
                      image={
                        me.cart.length &&
                        me.cart[0].item &&
                        me.cart[0].item.image
                      }
                      stripeKey="pk_test_Nle1djKXpUrjnf4IIXqR5q4h"
                      currency="USD"
                      email={me.email}
                      token={res => this.onToken(res, createOrder)}
                    >
                      {this.props.children}
                    </StripeCheckout>
                  );
                }}
              </Mutation>
            );
          }
        }}
      </User>
    );
  }
}

export default Payment;
export { CREATE_ORDER };
