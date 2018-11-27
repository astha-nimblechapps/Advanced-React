import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Head from 'next/head';
import AddCart from './AddCart';
import Router from 'next/router';
import Cart from './Cart';

const SINGLE_ITEM = gql`
    query SINGLE_ITEM($id: ID!){
        item( where: {id:$id}){
            id
            title
            description
            largeImage
            image
        }
    }
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
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: inline-flex;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  min-height: 800px;
  img {
    width: 50%;
    height: 50%;
    object-fit: contain;
  }
  .details {
    margin: 0 0 0 15px;
    font-size: 2rem;
    h2 {
        margin: 0;
    }
    button{
        border : 1px solid;
    }
  }
`;

class SingleItem extends Component {
    state = {
        color:'',
        size:'',
        item:'',
      };
      handleChange = e => {
        console.log(e.target.value)
        const { name, type, value } = e.target;
        const val = type === 'number' ? parseFloat(value) : value;
        this.setState({ [name]: val });
      };

      addToCart = (val,color,size) =>{
          console.log(val)
          this.setState({ item: val })
      }
    
    render() {
        return (
            <div>
                <Query query={SINGLE_ITEM} variables={{ id: this.props.id }}>
                    {
                        ({data,loading,error}) =>{
                            if(loading) return <p>Loading.....</p>
                            if(!data.item) return <p> No item found</p>
                            const item = data.item
                            return<SingleItemStyles>
                            <Head>
                              <title>Sick Fits | {item.title}</title>
                            </Head>
                            <img src={item.largeImage} alt={item.title} />
                            <div className="details">
                              <h2>Viewing {item.title}</h2>
                              <p>{item.description}</p>
                              <label htmlFor="color">
                                Select Color :
                                <select 
                                    name="color"
                                    value={this.state.color} 
                                    onChange={this.handleChange}  >
                                    <option value="none">Please Select Color</option>
                                <option value="Red">Red</option>
                                    <option value="Black">Black</option>
                                    <option value="White">White</option>
                                </select>
                                </label>
                                <br/>
                                <label htmlFor="size">
                                Select Size :
                                <select 
                                    name="size"
                                    value={this.state.size} 
                                    onChange={this.handleChange} >
                                    <option value="none">Please Select Size</option>
                                <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                </select>
                                </label>
                              <AddCart id={item.id} color={this.state.color} size={this.state.size}></AddCart>
                            </div>
                            
                          </SingleItemStyles>
                        }
                    }
                </Query>   
            </div>
        );
    }
}

export default SingleItem;
export { SINGLE_ITEM }