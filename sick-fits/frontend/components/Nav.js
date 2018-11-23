import Link from "next/link";
import { Mutation } from "react-apollo";
import styled from "styled-components";
import NavStyles from "./styles/NavStyles";
import NProgress from "nprogress";
import Router from "next/router";
import User from "./User";
import SignOut from "./SignOut";
import { TOOGLE_CART } from "./Cart";
import CartCount from "./CartCount";

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

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles data-test="nav">
        {me && (
          <Link href="/">
            <a> {me.name}</a>
          </Link>
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
          <Link href="/singup">
            <a> Signup </a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
