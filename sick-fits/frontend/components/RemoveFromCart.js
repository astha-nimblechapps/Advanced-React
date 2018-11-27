import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { LOGGED_USER } from './User';
import styled from 'styled-components';
import  PropTypes  from 'prop-types';

const DELETE_BUTTON = styled.button`
    font-size: 2rem;
    background: none;
    border:0;
    &:hover{
        color: ${props => props.theme.red};
        cursor: pointer
    }
`;

const REMOVE_ITEM = gql`
    mutation REMOVE_ITEM($id: ID!){
        removeFromCart(id:$id){
            id
        }
    }
`;

class RemoveFromCart extends Component {
    
    static propTypes = {
        id: PropTypes.string.isRequired,
    };

    update = (cache, payload) =>{
        console.log('Running....')
        const data = cache.readQuery({
            query: LOGGED_USER
        });
        console.log(data)
        const cartItemId = payload.data.removeFromCart.id;
        data.me.cart = data.me.cart.filter(
            cartItem => cartItem.id!==cartItemId
        );
        cache.writeQuery({ query: LOGGED_USER, data })
    }

    render() {
        return (
            <Mutation mutation={REMOVE_ITEM} variables={{id: this.props.id}} update={this.update} optimisticResponse={{
                __typename: 'CartItem',
                id:this.props.id
            }}>
                {
                    (removeFromCart,{loading}) => (
                        <DELETE_BUTTON title="DELETE_BUTTON" onClick={() => {
                            removeFromCart().catch(err => alert(err.message));
                        }} disabled={loading}>
                            &times;
                        </DELETE_BUTTON>
                    )
                }
            </Mutation>
            
        );
    }
}

export default RemoveFromCart;
export { REMOVE_ITEM };