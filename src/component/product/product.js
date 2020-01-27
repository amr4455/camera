import React, { Component } from 'react'
import Title from '../title/title';
import ProductItem from './productItem';
import {ProductConsumer} from '../context';
export default class product extends Component {
    render() {
        return (
    <React.Fragment>
        <div className="py-5">
            <div className ="container">
                <Title name="our" title = "products"/>
                <div className="row">
                    <ProductConsumer>
                        {value => {
                           return value.products.map(product => {
                               return <ProductItem key={product.id} product={product}/>;
                           })
                          
                        }}
                    </ProductConsumer>
                </div>
            </div>
        </div>
    </React.Fragment>
        )
    }
}
