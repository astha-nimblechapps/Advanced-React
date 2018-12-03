import React from "react";
import formatMoney from "../lib/formatMoney";
import styled from "styled-components";
import PropTypes from "prop-types";
import RemoveFromCart from "./RemoveFromCart";
import { Typography, Label } from "./../lib/exim-component";

const CartItemStyle = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgrey};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0px;
  }
`;

const CartItem = props => {
  if (!props.cartItem.item)
    return (
      <CartItemStyle>
        <p>This item has been removed</p>{" "}
        <RemoveFromCart id={props.cartItem.id} />
      </CartItemStyle>
    );
  return (
    <CartItemStyle>
      <img
        src={props.cartItem.item.image}
        alt={props.cartItem.item.title}
        width="100"
      />
      <div className="cart-item-details">
        <Typography useFor="subtitle">{props.cartItem.item.title}</Typography>
        <p>
          {props.cartItem.color}
          {props.cartItem.size}
        </p>
        <p>
          <Label color="green">
            {formatMoney(props.cartItem.item.price * props.cartItem.quantity)}
          </Label>
          {" - "}
          <Label color="lightNeutral">
            <em>
              {props.cartItem.quantity} &times;{" "}
              {formatMoney(props.cartItem.item.price)}
            </em>
          </Label>
        </p>
      </div>
      <RemoveFromCart id={props.cartItem.id} />
    </CartItemStyle>
  );
};

CartItem.propTypes = {
  cartItem: PropTypes.object.isRequired
};

export default CartItem;
