import React, { Component } from 'react'
import Title from "../title/title";
import CartColumns from './cartColumns';
import EmptyCart from './emptyCart';
import {ProductConsumer} from '../context';
import CartList from './cartList';
import CartTotal from './CartTotal';
export default class cart extends Component {
    render() {
        return (
             <div className="py-4">
            <div className ="container">
                <ProductConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                           return ( 
                            <React.Fragment>
                           <Title name="your" title = "cart"/>
                           <CartColumns/>
                           <CartList value={value}/>
                           <CartTotal value={value}/>
                           </React.Fragment>
                           )
                        } else {
                            return (<EmptyCart/>)
                        }
                    }}
                </ProductConsumer>
            {/* 
             */}
            </div>
            </div>
        )
    }
}
