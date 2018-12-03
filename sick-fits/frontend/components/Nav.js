import React from "react";
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
import { ButtonLink, Avatar } from "./../lib/exim-component";

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
    };
  }

  componentDidMount() {
    if (localStorage.getItem("randomId")) {
      this.setState({
        tokenId: localStorage.getItem("randomId").toString()
      });
    } else {
      if (!localStorage.getItem("randomId")) {
        const min = 1;
        const max = 100;
        const rand = min + Math.random() * (max - min);
        localStorage.setItem("randomId", rand);
        this.setState({
          tokenId: rand.toString()
        });
      }
    }
  }

  render() {
    return (
      <User>
        {({ data: { me } }) => (
          <NavStyles data-test="nav">
            {/* {me && (
              <>
                <Link href="/myaccount">
                  <ButtonLink>
                    <Avatar />
                    My Account
                  </ButtonLink>
                </Link>
              </>
            )} */}

            <Link href="/items">
              <ButtonLink> Products </ButtonLink>
            </Link>
            {me && (
              <>
                {me.permissions.includes("ADMIN") && (
                  <Link href="/sell">
                    <ButtonLink> Sell </ButtonLink>
                  </Link>
                )}
                <Link href="/orders">
                  <ButtonLink> My Orders </ButtonLink>
                </Link>
                <Mutation mutation={TOOGLE_CART}>
                  {toogleCart => (
                    <ButtonLink onClick={toogleCart}>
                      My Cart
                      <CartCount
                        count={me.cart.reduce(
                          (tally, cartItem) => tally + cartItem.quantity,
                          0
                        )}
                      />
                    </ButtonLink>
                  )}
                </Mutation>
                <SignOut />
                <Link href="/myaccount">
                  <ButtonLink>
                    <Avatar />
                    My Account
                  </ButtonLink>
                </Link>
              </>
            )}
            {!me && (
              <>
                <Link href="/singup">
                  <ButtonLink> Signup </ButtonLink>
                </Link>
                <Query
                  query={TEMP_DATA}
                  variables={{ token: this.state.tokenId }}
                >
                  {({ data, loading, error }) => {
                    const cart = data.tempCartItem;
                    //console.log(cart)
                    if (!cart) return null;
                    return (
                      <Mutation mutation={TOOGLE_CART}>
                        {toogleCart => (
                          <ButtonLink onClick={toogleCart}>
                            Cart
                            <CartCount
                              count={cart.reduce(
                                (tally, cartItem) => tally + cartItem.quantity,
                                0
                              )}
                            />
                          </ButtonLink>
                        )}
                      </Mutation>
                    );
                  }}
                </Query>
              </>
            )}
          </NavStyles>
        )}
      </User>
    );
  }
}

export default Nav;
