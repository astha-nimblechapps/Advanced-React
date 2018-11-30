import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import Router from "next/router";
import Title from "./styles/Title";
import PriceTag from "./styles/PriceTag";
import ItemStyle from "./styles/ItemStyles";
import formatMoney from "../lib/formatMoney";
import DeleteItem from "./DeleteItem";
import AddCart, { ADDCART } from "./AddCart";
import User from "./User";
import { Card, Typography, ButtonLink, Icon } from "./../lib/exim-component";

class Item extends Component {
  state = {
    tokenId: ""
  };

  componentDidMount() {
    if (localStorage.getItem("randomId")) {
      this.setState({
        tokenId: localStorage.getItem("randomId").toString()
      });
    }
  }

  addToCart = val => {
    Router.push({
      pathname: "/item",
      query: { id: val }
    });
  };

  render() {
    const { item } = this.props;
    return (
      <ItemStyle>
        <Card>
          {item.image && <img src={item.image} alt={item.title} />}
          <Title>
            <Link href={{ pathname: "/item", query: { id: item.id } }}>
              <ButtonLink style="link">{item.title}</ButtonLink>
            </Link>
          </Title>
          <PriceTag>{formatMoney(item.price)}</PriceTag>
          <Typography useFor="subtitleSmall">{item.description}</Typography>
          {
            <User>
              {({ data: { me } }) => {
                let isAdmin = !!me && me.permissions.includes("ADMIN");
                return (
                  <div className="buttonList">
                    {isAdmin && (
                      <Link
                        href={{ pathname: "/update", query: { id: item.id } }}
                      >
                        <ButtonLink className="button">Edit</ButtonLink>
                      </Link>
                    )}
                    <Link href={{ pathname: "/item", query: { id: item.id } }}>
                      <ButtonLink className="button">
                        <Icon for={"add"} />
                        Add to cart
                      </ButtonLink>
                    </Link>
                    {isAdmin && (
                      <ButtonLink className="button">
                        <DeleteItem id={item.id}>
                          <Icon for={"close"} />
                          Delete
                        </DeleteItem>
                      </ButtonLink>
                    )}
                  </div>
                );
              }}
            </User>
          }
        </Card>
      </ItemStyle>
    );
  }
}

Item.propTypes = {
  item: PropTypes.object.isRequired
};

export default Item;
