import React from "react";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { adopt } from "react-adopt";
import CloseButton from "./styles/CloseButton";
import Supreme from "./styles/Supreme";
import SickButton from "./styles/SickButton";
import CartStyles from "./styles/CartStyles";
import User from "./User";
import CartItem from "./CartItem";
import calcTotalPrice from "../lib/calcTotalPrice";
import formatMoney from "../lib/formatMoney";
import Payment from "./Payment";
import Router from 'next/router';

const LOCAL_STATE = gql`
  query {
    cartOpen @client
  }
`;

const TOOGLE_CART = gql`
  mutation {
    toogleCart @client
  }
`;

const TEMP_DATA = gql`
  query($token: String) {
    tempCartItem(token: $token) {
      id
      color
      size
      quantity
      item {
        image
        id
        price
        description
        title
      }
    }
  }
`;



class Cart extends React.Component {
  
  
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

  goToLogin = async(toogleCart) =>{
    await toogleCart();
    Router.push({
      pathname:'/signin'
    })
  }
  
  render() {
    const Composed = adopt({
      user: ({ render }) => <User>{render}</User>,
      toogleCart: ({ render }) => (
        <Mutation mutation={TOOGLE_CART}>{render}</Mutation>
      ),
      localState: ({ render }) => <Query query={LOCAL_STATE}>{render}</Query>,
      tempCart: ({ render }) => <Query query={TEMP_DATA} variables={{ token : this.state.tokenId}}>{render}</Query>
    });
    return (
      <Composed>
        {({ user, toogleCart, localState, tempCart }) => {
          const me = user.data.me;
          const cart = tempCart.data.tempCartItem;
          console.log(cart)
          if (!me){ 
            if(!cart) return <p> No item</p>
            return ( 
            <CartStyles open={localState.data.cartOpen}>
            <header>
              <CloseButton onClick={toogleCart} title="close">
                &times;
              </CloseButton>
              <Supreme>Your Cart</Supreme>
              <p>
                You have {cart.length} itme
                {cart.length === 1 ? "" : "s"} in your cart
              </p>
            </header>
            <ul>
              {cart.map(cartItem => (
              //  console.log(cartItem)
                <CartItem key={cartItem.id} cartItem={cartItem} />
              ))}
            </ul>
            <footer>
              <p>{formatMoney(calcTotalPrice(cart))}</p>
           
              {
                cart.length ? <Payment cart={cart}>
                <SickButton onClick={() => this.goToLogin(toogleCart)}>Checkout</SickButton>
              </Payment> : null
              }
              {/* {cart.length && (
                <Payment>
                  <SickButton>Checkout</SickButton>
                </Payment>
              )} */}
            </footer>
            </CartStyles>
          )
        }
          return (
            <CartStyles open={localState.data.cartOpen}>
              <header>
                <CloseButton onClick={toogleCart} title="close">
                  &times;
                </CloseButton>
                <Supreme>Your Cart</Supreme>
                <p>
                  You have {me.cart.length} itme
                  {me.cart.length === 1 ? "" : "s"} in your cart
                </p>
              </header>
              <ul>
                {me.cart.map(cartItem => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </ul>
              <footer>
                <p>{formatMoney(calcTotalPrice(me.cart))}</p>
                {me.cart.length && (
                  <Payment>
                    <SickButton>Checkout</SickButton>
                  </Payment>
                )}
              </footer>
            </CartStyles>
          );
        }}
      </Composed>
    );
  }
}

export default Cart;
export { TOOGLE_CART, LOCAL_STATE, TEMP_DATA };
