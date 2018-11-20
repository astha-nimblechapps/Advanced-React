import React, { Component } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import Head from 'next/head';

const SINGLE_ITEM = gql`
    query SINGLE_ITEM($id: ID!){
        item( where: {id:$id}){
            id
            title
            description
            largeImage
        }
    }
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
  }
`;

class SingleItem extends Component {
    render() {
        return (
            <div>
                Astha
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