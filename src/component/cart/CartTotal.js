import React from 'react'
import {Link } from "react-router-dom";
export default function CartTotal({value}) {
    const { cartTax,cartTotal,cartSubTotal,clearCart} = value;

    return (
       <React-fragment>
           <div className="container">
               <div className="row">
                   <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
                        <Link to='/product'>
                        <button className="btn btn-outline-danger mb-3" onClick={()=> clearCart()}>clear cart</button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal : </span>
                            <strong>{cartSubTotal} $</strong>
                        </h5>
                        <h5>
                            <span className="text-title">cartTax : </span>
                            <strong>{cartTax} $</strong>
                        </h5>
                        <h5>
                            <span className="text-title">Total : </span>
                            <strong>{cartTotal} $</strong>
                        </h5>
                   </div>
               </div>
           </div>
       </React-fragment>
    )
}
