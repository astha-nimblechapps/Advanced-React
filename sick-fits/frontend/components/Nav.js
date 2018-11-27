import React from 'react'
import Link from "next/link";
import { Mutation, Query } from "react-apollo";
import styled from "styled-components";
import NavStyles from "./styles/NavStyles";
import NProgress from "nprogress";
import Router from "next/router";
import User from "./User";
import SignOut from "./SignOut";
import { TOOGLE_CART, TEMP_DATA } from "./Cart";
import CartCount from "./CartCount";
import gql from "graphql-tag";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const NavDiv = styled.div`
  margin-left: 10px;
`;

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tokenId: ""
    }
  }


  componentDidMount() {
    if(localStorage.getItem("randomId")){
      this.setState({
        tokenId: localStorage.getItem("randomId").toString()
      })
    }
    // this.setState({
    //   randomUser: localStorage.getItem("randomId")
    // });
  }
  
  render() {
    return (
      <User>
      {({ data: { me } }) => (
        
        <NavStyles data-test="nav">
          {me && (
            <>
              <Link href="/">
                <a> {me.name}</a>
              </Link>
            </>
          )}
  
          <Link href="/items">
            <a> Item </a>
          </Link>
          {me && (
            <>
              <Link href="/sell">
                <a> Sell </a>
              </Link>
              <Link href="/orders">
                <a> My Orders </a>
              </Link>
              <SignOut />
              <Mutation mutation={TOOGLE_CART}>
                {toogleCart => (
                  <button onClick={toogleCart}>
                    Cart
                    <CartCount
                      count={me.cart.reduce(
                        (tally, cartItem) => tally + cartItem.quantity,
                        0
                      )}
                    />
                  </button>
                )}
              </Mutation>
            </>
          )}
          {!me && (
            <>
            <Link href="/singup">
              <a> Signup </a>
            </Link>
            <Query query={TEMP_DATA} variables={{ token: this.state.tokenId }}>
              {
                ({data, loading, error}) =>{
                  const cart = data.tempCartItem;
                  console.log(cart)
                  if(!cart) return <button>
                  Cart
                  <CartCount count={0}></CartCount>
                </button>;
                  return  <Mutation mutation={TOOGLE_CART}>
                  {toogleCart => (
                    <button onClick={toogleCart}>
                      Cart
                      <CartCount count={cart.reduce(
                        (tally, cartItem) => tally + cartItem.quantity,
                        0
                      )}></CartCount>
                    </button>
                  )}
                </Mutation>
                }
              }
            </Query>
           
    
            </>
          )}
        </NavStyles>
      )}
    </User>
  
    )
  }
}

export default Nav;