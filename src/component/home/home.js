import React from 'react';
import {Link } from "react-router-dom";
const Home = ({title}) => {
    return(
  <React.Fragment>
  
     <header className="header row ">
     <div className="header-img col-md-6">
       <img src="https://amr4455.github.io/camera/public/img/home-img.png" alt="camera"/>
     </div>
     <div className="header-content col-md-6">
       <h1 className="display-3">{title}</h1>
       <p className="mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsum repellat sapiente qui vel aliquam quisquam!</p>
          <Link className="btn btn-outline-primary mb-3" to="/product" role="button">our product</Link>
     </div>
     
     </header>
    
  </React.Fragment>
    );
}
export default Home;