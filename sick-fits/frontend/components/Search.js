import React, { Component } from 'react';
import Downshift, {resetIdCounter} from 'downshift';
import Router from 'next/router'; 
import { ApolloConsumer } from 'react-apollo';
import gql from 'graphql-tag';
import debounce from 'lodash.debounce';
import { DropDown, DropDownItem, SearchStyles } from './styles/DropDown';

const SEARCH_ITEM = gql`
    query SEARCH_ITEM($searchTerm: String!){
        items(where:{ OR: [{title_contains: $searchTerm}, {description_contains: $searchTerm}]}){
            id
            title
            image
        }
    }
`;

class Search extends Component {

    state = {
        items:[],
        loading: false,
    }

    routeToItem(item){
        console.log(item)
        Router.push({
            pathname:'/item',
            query:{
                id: item.id,
            }
        })
    }

    onChange = debounce(async (e,client) => {
        this.setState({loading: true});
        const res = await client.query({
            query: SEARCH_ITEM,
            variables: { searchTerm: e.target.value }
        });
        this.setState({items: res.data.items, loading: false,})
        console.log(res)
    }, 350);

    render() {
        resetIdCounter();
        return (
           <SearchStyles>
               <Downshift onChange={this.routeToItem} itemToString={item =>(item === null ? '' : item.title)}>
                   {
                       ({getInputProps,getItemProps,isOpen,inputValue,highlightedIndex}) => (

                      
               <div>
                   <ApolloConsumer>
                        {(client) => (
                            <input type="search"
                                {...getInputProps({
                                    type: 'search',
                                    placeholder: 'Search Anything', 
                                    id:'search',
                                    className: this.state.loading ? 'loading' : '',
                                    onChange: e => {
                                        e.persist();
                                        this.onChange(e,client)
                                    }
                                })}
                            ></input>
                        )}                        
                   </ApolloConsumer>
                   {
                       isOpen && (
                    <DropDown>
                        {
                            this.state.items.map((item,index) => <DropDownItem 
                                {...getItemProps({item})}
                                key={item.id} highlighted={index === highlightedIndex}>
                                <img width={50} src={item.image} alt={item.title}/>
                                {item.title}
                            </DropDownItem>)
                        }
                        {
                            !this.state.items.length && !this.state.loading && <DropDownItem>
                                No Item Found For Your Serach
                            </DropDownItem> 
                        }
                    </DropDown>
                    )
                }
               </div>
                )
            }
        </Downshift>
           </SearchStyles>
        );
    }
}

export default Search;