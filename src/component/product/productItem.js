import React, { Component } from 'react'
import {ProductConsumer} from '../context';
import {Link } from "react-router-dom";
export default class productItem extends Component {
    render() {
        const {id , title,  img,inCart,price} = this.props.product;
        return (
            <ProductConsumer>
                {value => (
                    <div className="card col-md-6 col-lg-4 col-12">
                        
                    <img src={img} className = "card-img-top"  alt="product"/>
               
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text"><span className="price">price : </span> <span className="dollar">{price}$</span></p>
                        <Link to="/details" onClick={()=> value.handleDetail(id)} className="btn btn-secondary">learn more</Link>

                        <button className="btn btn-primary float-right" disabled = {inCart ? true : false}
                        onClick ={()=>{
                            value.addToCart(id);
                            value.openModal(id);
                            }}> {
                            inCart ? 
                            (<p className="text-capitalize mb-0" disabled>in cart</p>)
                            : (<i className="fas fa-cart-plus"></i>)
                        }</button>
                    </div>
                </div>
                )}
            </ProductConsumer>
                
           
        )
    }
}
