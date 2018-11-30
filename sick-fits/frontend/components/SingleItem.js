import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import styled from "styled-components";
import Head from "next/head";
import AddCart from "./AddCart";
import {
  Card,
  Typography,
  Divider,
  Label,
  Icon
} from "./../lib/exim-component";

const SINGLE_ITEM = gql`
  query SINGLE_ITEM($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      largeImage
      image
    }
  }
`;

const AddCartContainer = styled.div`
  position: absolute;
  bottom: 0;
  text-align: center;
  bottom: 10px;
  left: 0;
  right: 0;
`;

const ADDCART = styled.button`
  width: 30%;
  /* border: 1px solid; */
  text-align: center;
  font-family: none;
  border: none;
`;

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 500px;
  h5 {
    margin: 10px 0;
  }
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
  .divider {
    border-top: 1px solid #f0f2f4;
  }
  .details {
    position: relative;
    width: 100%;
    margin: 0 15px;
    font-size: 2rem;
    h2 {
      margin: 0;
    }
    button {
      border: 1px solid;
    }
    label {
      min-width: 75px;
      padding: 4px 8px;
      margin-right: 5px;
      text-align: center;
      cursor: pointer;
    }
    label > span {
      display: block;
    }
    .label-outline {
      border: 1px solid #393939;
    }
  }
`;

class SingleItem extends Component {
  availableColors = ["red", "green", "blue"];
  availablSize = [20, 24, 28];
  state = {
    color: "",
    size: "",
    item: ""
  };

  onSizeChange = val => {
    console.log(val);
    this.setState({ size: val });
  };

  onColorChange = val => {
    console.log(val);
    this.setState({ color: val });
  };

  addToCart = (val, color, size) => {
    this.setState({ item: val });
  };

  render() {
    let { color, size } = this.state;
    let { id } = this.props.id;
    console.log(color, size);
    return (
      <Query query={SINGLE_ITEM} variables={{ id: this.props.id }}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading.....</p>;
          if (!data.item) return <p> No item found</p>;
          const item = data.item;
          return (
            <Card>
              <SingleItemStyles>
                <Head>
                  <title>Sick Fits | {item.title}</title>
                </Head>
                <img src={item.largeImage} alt={item.title} />
                <div className="details">
                  <Typography h5 className="title">
                    Viewing {item.title}
                  </Typography>
                  <Typography useFor="content">{item.description}</Typography>
                  <Divider />
                  <div>
                    <Typography useFor="subtitle">Choose colors</Typography>
                    {this.availableColors.map((c, i) => (
                      <Label key={i} color={c}>
                        <span onClick={this.onColorChange.bind(this, c)}>
                          {c == color ? <Icon for="add" /> : null}
                          {c}
                        </span>
                      </Label>
                    ))}
                  </div>
                  <div>
                    <Typography useFor="subtitle">Choose size</Typography>
                    {this.availablSize.map((s, i) => (
                      <Label key={i} outline>
                        <span onClick={this.onSizeChange.bind(this, s)}>
                          {s == size ? <Icon for="add" /> : null}
                          {s}
                        </span>
                      </Label>
                    ))}
                  </div>
                  <AddCartContainer>
                    <Divider />
                    <AddCart
                      disabled={!color || !size}
                      id={item.id}
                      color={this.state.color}
                      size={this.state.size}
                    />
                  </AddCartContainer>
                </div>
              </SingleItemStyles>
            </Card>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
export { SINGLE_ITEM };
