import React, { Component } from "react";
import { Mutation } from "react-apollo";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import Router from "next/router";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";
import { from } from "zen-observable";
import { Label, Input, Avatar, Button } from '../lib/exim-component';

const SIGNLE_ITEM_QUERY = gql`
  query SIGNLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
      image
    }
  }
`;

const UPDATE_ITEMS = gql`
  mutation UPDATE_ITEMS(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
      price
      title
      description
    }
  }
`;

class UpdateItem extends Component {
  state = {};
  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === "number" ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  updateItem = async (e, updateItemMutation) => {
    e.preventDefault();
    const res = await updateItemMutation({
      variables: {
        id: this.props.id,
        ...this.state
      }
    });
   // console.log("Updated..!!!");
  };

  render() {
    return (
      <Query
        query={SIGNLE_ITEM_QUERY}
        variables={{
          id: this.props.id
        }}
      >
        {({ data, loading }) => {
          if (loading) return <p>Loading.....</p>;
          if (!data.item) return <p> No item found </p>;
          return (
            <Mutation mutation={UPDATE_ITEMS}>
              {(updateItem, { loading, error }) => (
                <Form
                  data-test="form"
                  onSubmit={e => this.updateItem(e, updateItem)}
                >
                  <Error error={error} />
                  <fieldset disabled={loading} aria-busy={loading}>
                  <h6 style={{marginTop: '8px', marginBottom: '8px'}}>Edit Item Detail</h6>
                  <Avatar src={data.item.image}></Avatar>
                  <Label size="small"> Title:</Label>
                     
                      <input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        defaultValue={data.item.title}
                        onChange={this.handleChange}
                      />
                 
                 <Label size="small"> Price:</Label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        placeholder="Price"
                        required
                        defaultValue={data.item.price}
                        onChange={this.handleChange}
                      />
               

                   <Label size="small"> Description:</Label>
                    
                      <textarea
                        id="description"
                        name="description"
                        placeholder="Enter A Description"
                        required
                        defaultValue={data.item.description}
                        onChange={this.handleChange}
                      />
                   
                    <Button type="submit">Update</Button>
                  </fieldset>
                </Form>
              )}
            </Mutation>
          );
        }}
      </Query>
    );
  }
}

export default UpdateItem;
export { UPDATE_ITEMS };
