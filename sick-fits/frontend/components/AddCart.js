import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import { LOGGED_USER } from './User';

const ADDCART = styled.button`
    width: 30%;
    /* border: 1px solid; */
    text-align: center;
    font-family: none;
    border: none;
`;

const ADD_TO_CART = gql`
    mutation ADD_TO_CART($id:ID!)  {
        addToCart(id:$id){
            id
            quantity
        }
    }
`;

class AddCart extends React.Component{

    render(){
        const  id  = this.props.id;

        return (
        <Mutation mutation={ADD_TO_CART} variables={{
            id
        }} refetchQueries={[{ query: LOGGED_USER }]}> 
        { (addToCart,{loading}) => (
        <ADDCART disabled={loading} onClick={addToCart}>Add {loading && 'ing'} To Cart</ADDCART>
        )} 
        </Mutation>)
    }

}

export default AddCart;