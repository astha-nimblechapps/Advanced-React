import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { format } from "date-fns";
import Head from "next/head";
import gql from "graphql-tag";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";
import OrderStyles from "./styles/OrderStyles";
import { Label, Typography, Avatar, Button } from '../lib/exim-component';

const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      charge
      total
      createdAt
      user {
        id
      }
      items {
        id
        title
        description
        price
        image
        quantity
      }
    }
  }
`;

class Order extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };
  render() {
    return (
      <Query query={SINGLE_ORDER_QUERY} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          const order = data.order;
          return (
            <OrderStyles>
              <Head>
                <title>Sick Fits - Order {order.id}</title>
              </Head>
              <Typography useFor="subtitle">
                <Label>Order ID:</Label>
                <Label>{this.props.id}</Label>
              </Typography>
              <Typography useFor="subtitle">
                <Label>Charge:</Label>
                <Label>{order.charge}</Label>
              </Typography>
              <Typography useFor="subtitle">
                <Label>Date:</Label>
                <Label>{format(order.createdAt, "MMMM d, YYYY h:mm a")}</Label>
              </Typography>
              <Typography useFor="subtitle">
                <Label>Order Total:</Label>
                <Label>{formatMoney(order.total)}</Label>
              </Typography>
              <Typography useFor="subtitle">
                <Label>Item Count:</Label>
                <Label>{order.items.length}</Label>
              </Typography>
              <div className="items">
                {order.items.map(item => (
                  <div className="order-item " key={item.id}>
                    <Avatar src={item.image}/>
                    <div className="item-details">
                      <h6 style={{marginTop: '8px', marginBottom: '0px'}}>{item.title}</h6>
                      <Label>Qty: {item.quantity}</Label>
                      <Label>Each: {formatMoney(item.price)}</Label>
                      <Label>SubTotal: {formatMoney(item.price * item.quantity)}</Label>
                      <Label>{item.description}</Label>
                    </div>
                  </div>
                ))}
              </div>
            </OrderStyles>
          );
        }}
      </Query>
    );
  }
}

export default Order;
