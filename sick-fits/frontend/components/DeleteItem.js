import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { ALL_ITEMS_QUERY } from './Items';
import styled from 'styled-components';
import { GET_ALL_ITEMS } from './Items'
const DeleteBtn = styled.button`
    width: 100%;
    border: 1px solid;
    text-align: center;
    font-family: none;
`;

const DELETE_ITEMS = gql`
  mutation DELETE_ITEMS($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

class DeleteItem extends Component {
  update = (cache, payload) => {
    const data = cache.readQuery({ query: GET_ALL_ITEMS });
    console.log(data, payload);
    data.items = data.items.filter(item => item.id !== payload.data.deleteItem.id);
    cache.writeQuery({ query: GET_ALL_ITEMS, data });
  };
  render() {
    return (
      <Mutation
        mutation={DELETE_ITEMS}
        variables={{ id: this.props.id }}
        update={this.update}
      >
        {(deleteItem, { error }) => (
          <DeleteBtn
            onClick={() => {
              if (confirm('Are you sure you want to delete this item?')) {
                deleteItem().catch(err => {
                  alert(err.message);
                });
              }
            }}
          >
            {this.props.children}
          </DeleteBtn>
        )}
      </Mutation>
    );
  }
}

export default DeleteItem;
