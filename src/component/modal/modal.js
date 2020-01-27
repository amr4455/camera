import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link } from "react-router-dom";
export default class MSodal  extends Component {
    render() {
        return (
           <ProductConsumer>
               {(value) => {
                   const {modalOpen,closeModal} = value;
                   const {count, title, price} = value.modalProduct;
                   if( !modalOpen) {
                       return null;
                   } else {
                       return (
                        <div className="container text-center ">
                            <div className="row">
                                <div className="my-modal col-lg-4 col-7">
                                   <h2 className="color-success">Added to cart</h2>
                                   
                                   <h3>model : {title}</h3>
                                   <h5>price : {price} $</h5>
                                   <h5>count : {count} </h5>
                                  
                                   <Link to="/product"  onClick = {() => {value.closeModal()}} className="btn btn-primary mb-2 float-left">contenio shoping</Link>
                                   <Link to="/cart" onClick = {() => {value.closeModal()}} className="btn btn-info float-right">go to cart</Link>
                                </div>
                            </div>
                        </div>
                       );
                   }

               }}
           </ProductConsumer>
        )
    }
}
