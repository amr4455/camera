import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link } from "react-router-dom";
export default class Details extends Component {
    render() {
        return (
    <React.Fragment>
        <ProductConsumer>
            {(value)=> {
               const {id,company,img,info,price,title,inCart} = value.DetailProduct;
               return (
                   <div className="container py-5">
                       <div className="row detail">
                           <div className="col-md-6 mb-4">
                               <img src={img} className="img-fluid" alt=""/>
                           </div>
                           <div className="col-md-6">
                               <h1><span className="product-info">product name :</span> {title}</h1>
                               <p><span className="product-info">company :</span> {company}</p>
                               <p className="text-muted"><span className="product-info">info :</span><br/>{info}</p>
                               <p><span className="product-info mb-6"> price :</span> {price} $</p>
                               <Link to="/product" className="btn btn-secondary">back to products</Link>
                               <button className="btn btn-primary float-right" disabled = {inCart ? true : false}
                        onClick ={()=>{
                            value.addToCart(id);
                            value.openModal(id);
                            }}> {
                            inCart ? 
                            (<p className="text-capitalize mb-0" disabled>in cart</p>)
                            : (<span>add to cart <i className="fas fa-cart-plus"></i></span>)
                        }</button>
                           </div>
                       </div>
                   </div>
               )
            }}
        </ProductConsumer>
    </React.Fragment>
        )
    }
}

