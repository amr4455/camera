import React from 'react'

export default function cartItem({item, value}) {
    const {id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} =  value;
    return (
       <div className="row mt-1 text-center d-flex align-content-center">
       <div className="col-10 mx-auto col-lg-2">
           <img src={img} alt="cart" className="img-fluid"/>
       </div>
       <div className="col-10 mx-auto col-lg-2 mt-2">
        <span className="d-md-none">product : </span>  {title}
       </div>
       <div className="col-10 mx-auto col-lg-2 mt-2">
       <span className="d-md-none">price : </span> {price} $
       </div>
       <div className="col-10 mx-auto col-lg-2 mt-2">
        <div className="d-flex justify-content-center">
            <span className="btn btn-black mx-1" onClick={() => {decrement(id)}}>-</span>
            <span className="btn btn-black mx-1">{count}</span>
            <span className="btn btn-black mx-1" onClick={() => {increment(id)}}>+</span>
        </div>
       </div>
       <div className="col-10 mx-auto col-lg-2 mt-2">
       <div className="d-flex justify-content-center">
            <span className="btn  mx-1" onClick={() => {removeItem(id)}}><i class="fas fa-trash"></i></span>
        </div>
       </div>
       <div className="col-10 mx-auto col-lg-2 mt-2">
       <span className="d-md-none">total : </span>  {total} $
       </div>
       </div>
    )
}

