import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Confirmation from './Components/Confirmation';
import ProductPage from './Components/Productpage';
import Product from './Components/Product';
import NotFound from './Components/Notfound';

export default class App extends React.Component{
  render(){

    return(
        <div>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/cart" component={Cart} />
            <Route path="/confirmation" component={Confirmation} />
            <Route path="/productdetails" component={ProductPage} />
            <Route path="/product" component={Product} />
            <Route component={NotFound} />
          </Switch>
        </div>

    )

  }
}


