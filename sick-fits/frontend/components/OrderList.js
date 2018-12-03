import React from "react";
import { Query } from "react-apollo";
import { formatDistance } from "date-fns";
import Link from "next/link";
import styled from "styled-components";
import gql from "graphql-tag";
import Error from "./ErrorMessage";
import formatMoney from "../lib/formatMoney";
import OrderItemStyles from "./styles/OrderItemStyles";
import {
  List,
  Label,
  Avatar,
  Typography,
  ButtonLink,
  Card,
  Icon,
  Divider
} from "../lib/exim-component";
import Router from "next/router";

const ORDER_LIST = gql`
  query ORDER_LIST {
    orders(orderBy: createdAt_DESC) {
      id
      charge
      total
      createdAt
      items {
        id
        title
        description
        price
        image
        quantity
      }
      user {
        name
        id
        email
      }
    }
  }
`;

const orderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrderList extends React.Component {
  render() {
    return (
      <Query query={ORDER_LIST}>
        {({ data: { orders }, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading....</p>;
          if (!orders)
            return (
              <h6
                style={{ height: "100%", width: "100%", textAlign: "center" }}
              >
                You have {orders.length} orders
              </h6>
            );
          return (
            <div>
              <List className="ls-order">
                <List.Item>
                  {orders.map(order => (
                    <Card key={order.id}>
                      <OrderItemStyles key={order.id}>
                        <ButtonLink
                          onClick={() =>
                            Router.push({
                              pathname: "/order",
                              query: { id: order.id }
                            })
                          }
                        >
                          <div className="order-meta">
                            <div className="div-fir">
                              <Typography useFor="plexMonoReg">
                                <Label> {order.user.name}</Label>
                              </Typography>
                              <Typography
                                className="p-right"
                                useFor="plexMonoReg"
                              >
                                <Label>
                                  {formatDistance(order.createdAt, new Date())}
                                </Label>
                              </Typography>
                            </div>
                            <Divider />
                            <div className="div-sec">
                              <Typography useFor="plexMonoReg">
                                <h6
                                  style={{
                                    marginLeft: "8px",
                                    marginTop: "2px",
                                    marginBottom: "0px",
                                    fontSize: "13px"
                                  }}
                                >
                                  Items
                                </h6>
                                <Label>
                                  {order.items.reduce(
                                    (a, b) => a + b.quantity,
                                    0
                                  )}{" "}
                                  Items
                                </Label>
                              </Typography>

                              <Typography useFor="plexMonoReg">
                                {" "}
                                <h6
                                  style={{
                                    marginLeft: "8px",
                                    marginTop: "2px",
                                    marginBottom: "0px",
                                    fontSize: "13px"
                                  }}
                                >
                                  Total Items
                                </h6>
                                <Label>{order.items.length} Items </Label>
                              </Typography>
                              <Typography useFor="plexMonoReg">
                                <h6
                                  style={{
                                    marginLeft: "8px",
                                    marginTop: "2px",
                                    marginBottom: "0px",
                                    fontSize: "13px"
                                  }}
                                >
                                  Sub Total
                                </h6>
                                <Label> {formatMoney(order.total)}</Label>
                              </Typography>
                            </div>
                          </div>

                          <div className="images">
                            {order.items.map(item => (
                              <Avatar key={item.id} src={item.image} />
                            ))}
                          </div>
                        </ButtonLink>
                      </OrderItemStyles>
                    </Card>
                  ))}
                </List.Item>
              </List>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default OrderList;
