import React from 'react';
import './navbar.css';
import {Link } from "react-router-dom";
const Nav = () => {
    return(
   <React.Fragment>
    <nav className="navbar navbar-dark navbar-expand-md bg-dark">
    <Link className="navbar-brand" to="/"> <i className="fas fa-camera"></i> camera </Link>
    <button className="navbar-toggler shadow-none" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ml-auto ">
      <li className="nav-item">
        <Link className="nav-link" to="/">Home</Link>
      </li>
      <li className="nav-item">
       <Link className="nav-link" to="/product">product</Link>
      </li>
     
      <li className="nav-item">
       <Link className="nav-link" to="/cart"><i className="fas fa-cart-plus"></i> cart</Link>
      </li>
      </ul>
    </div>
    </nav>
    </React.Fragment>
    );
}
export default Nav;