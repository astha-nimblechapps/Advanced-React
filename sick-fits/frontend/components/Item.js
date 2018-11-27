import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link'
import Title from './styles/Title';
import PriceTag from "./styles/PriceTag";
import ItemStyle from './styles/ItemStyles';
import formatMoney  from '../lib/formatMoney';
import DeleteItem from './DeleteItem'
import AddCart from './AddCart'

class Item extends Component {

    state = {
        tokenId: "",
    }

    componentDidMount() {
        if(localStorage.getItem("randomId")){
          this.setState({
            tokenId: localStorage.getItem("randomId").toString()
          })
        }
        // this.setState({
        //   randomUser: localStorage.getItem("randomId")
        // });
      }
    
    render() {
        const { item } = this.props;
        return (
            <ItemStyle>
                {
                    item.image && <img src={item.image} alt={item.title}/>
                }
                <Title>
                    <Link href={{ pathname:'/item', query: { id: item.id } }}>
                        <a>{ item.title }</a>
                    </Link>
                    
                </Title>
                <PriceTag>
                    {formatMoney(item.price)}
                </PriceTag>
                <p>{ item.description }</p>
              
                <div className="buttonList">
                    <Link href={{ pathname:'/update', query: { id: item.id } }}>
                        <a> Edit </a>
                    </Link>
                    <AddCart id={item.id}></AddCart>
                    <DeleteItem id={item.id}>Delete</DeleteItem>
              
                </div>
                 
            </ItemStyle>
        );
    }
}

Item.propTypes = {
    item: PropTypes.object.isRequired
};

export default Item;