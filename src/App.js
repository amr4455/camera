import React , {Component}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.css';
import { BrowserRouter, Route,Switch} from "react-router-dom";
import Nav from './component/nav/navbar';
import Home from './component/home/home';
import Details from './component/Details/details';
import Product from './component/product/product';
import Cart from './component/cart/cart';
import Modal from './component/modal/modal'
import './App.css';
class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
       <Nav/>
       <Switch>
       <Route exact path='/' component={() => <Home title={`see by new eyes`} />} />
       <Route path='/Product' component={Product}/>
       <Route path='/cart' component={Cart}/>
       <Route path='/details' component={Details}/>
       </Switch>
       <Modal/ >
      </div>
      </BrowserRouter>
    )
  }        
}

export default App;
