import React, { Component } from 'react'
import CartItem from './cartItem';
export default function cartList({value}) {
    const {cart} = value;
        return (
            <div className="container">
                {cart.map(item => {
                    return <CartItem key={item.id} item =  {item} value = {value}/>
                })}
            
            </div>
        )
  
}
