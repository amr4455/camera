import React, { Component } from 'react';
import {storeProduct,detailProduct} from './data';
const ProductContext = React.createContext();
class ProductProvider extends Component {
    state = {
        cart:[],
        products : [],
        DetailProduct:detailProduct,
        modalOpen : false,
        modalProduct : detailProduct,
        cartSubTotal:0,
        cartTax:0,
        cartTotal:0,
      
    };
     componentDidMount() {
         this.setProduct();
         
     }
     getItem = (id) => {
         const product = this.state.products.find(item  => item.id === id);
         return product;
     }
    setProduct = () => {
        let products = [];
        storeProduct.forEach(item => {
            const singleItem = {...item};
            products = [...products, singleItem];
        }) 
        this.setState(()=> {
            return {products};
        })
    };
    handleDetail = (id) => {
      const product = this.getItem(id);
     this.setState(() => {
       return{DetailProduct : product}
      })
    };
    addToCart = (id) => {
       let tempProducts =[...this.state.products];
       const index = tempProducts.indexOf(this.getItem(id));
       const product =tempProducts[index];
       product.inCart = true;
       product.count =1;
       const price = product.price;
       product.total = price;
       this.setState(()=> {
           return {
               products:tempProducts,
               cart:[...this.state.cart,product]
           }
       },
       ()=> {
          this.addTotal();
        }
        );
    };
    openModal = (id) => {
        const product = this.getItem(id);
        this.setState(()=> {
            return {
                modalProduct : product,
                modalOpen : true
            }
        })
    };
    closeModal = () => {
        this.setState(()=> {
           return{modalOpen: false}
        
        })
    }
    // cart 
    increment = (id) => {
        let tempCart = [...this.state.cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        const index = tempCart.indexOf(selectedProduct);
        const product = tempCart[index];
        product.count = product.count + 1;
        product.total = product.count  * product.price;
        this.setState(()=> {
            return{
                cart: [...tempCart]
            }
        },()=> {
            this.addTotal();
        })
    }
   decrement = (id) => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];
    product.count = product.count - 1;
    product.total = product.count  * product.price;
    if (product.count > 0) {
    this.setState(()=> {
        return{
            cart: [...tempCart]
        }
    },()=> {
        this.addTotal();
    })}
    else {
        this.removeItem(id);
    }
    }
    removeItem = (id) => {
        let tempProducts = [...this.state.products];
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item=> item.id !== id);
        const index =tempProducts.indexOf(this.getItem(id));
        let removedProduct = tempProducts[index];
        removedProduct.inCart = false;
        removedProduct.count =0;
        removedProduct.total = 0;
        this.setState(() => {
            return{
                cart: [...tempCart],
                products:[...tempProducts]
            }
        },()=> {
            this.addTotal();
        })
    }
    clearCart = () => {
         this.setState(() => {
             return {
                 cart:[]
             }
         },() => {
             this.setProduct();
             this.addTotal();
         })
    }
    addTotal = () => {
        let subTotal = 0 ;
        this.state.cart.map(item => {
            subTotal += item.total
        })
        const tempTax = subTotal * .1;
        const tax = parseFloat(tempTax.toFixed(2));
        const total = subTotal + tax
        this.setState(() => {
           return{ 
        cartSubTotal:subTotal,
        cartTax:tax,
        cartTotal:total,
           }
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleDetail:this.handleDetail,
                addToCart:this.addToCart,
                openModal:this.openModal,
                closeModal:this.closeModal,
                increment:this.increment,
                decrement:this.decrement,
                removeItem:this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer};