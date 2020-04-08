import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';

export default class App extends React.Component{
  render(){

    return(
        <div>
          <Switch>
            <Route exact path="/" component={Home} /> 
            <Route path="/cart" component={Cart} />
          </Switch>
        </div>

    )

  }
}


