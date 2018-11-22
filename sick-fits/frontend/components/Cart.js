import React from 'react';
import {Query, Mutation} from 'react-apollo';
import  gql from 'graphql-tag';
import { adopt } from 'react-adopt';
import CloseButton from './styles/CloseButton';
import Supreme from './styles/Supreme';
import SickButton from './styles/SickButton';
import CartStyles from './styles/CartStyles';
import User from './User'
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import Payment from './Payment';

const LOCAL_STATE = gql`
    query{
        cartOpen @client
    }
`;

const TOOGLE_CART = gql`
    mutation{
        toogleCart @client
    }
`;

const Composed = adopt(
    {
        user: ({render}) => <User>{render}</User>,
        toogleCart: ({render}) => <Mutation mutation={TOOGLE_CART}>{render}</Mutation>,
        localState: ({render}) => <Query query={LOCAL_STATE}>{render}</Query>
    }
);

const Cart = props => (
    <Composed>
        {
            ({user: { data: {me} }, toogleCart, localState}) => {
                //const me = user.data.me
                if(!me) return null;
                console.log(me)
                return (
                                    <CartStyles open={localState.data.cartOpen}>
                                    <header>
                                        <CloseButton onClick={toogleCart} title="close">
                                            &times;
                                        </CloseButton>
                                        <Supreme>Your Cart</Supreme>
                                        <p>You have {me.cart.length} itme{me.cart.length === 1 ? '' : 's'} in your cart</p>
                                    </header>
                                    <ul>
                                        {
                                            me.cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem}></CartItem>)
                                        }
                                    </ul>
                                    <footer>
                                        <p>{formatMoney(calcTotalPrice(me.cart))}</p>
                                        {
                                            me.cart.length && <Payment>
                                            <SickButton>Checkout</SickButton>
                                        </Payment>
                                        }
                                        
                                    </footer>
                            </CartStyles> 
                                )
        }
    }
    </Composed>
    
)

export default Cart;
export { TOOGLE_CART, LOCAL_STATE };