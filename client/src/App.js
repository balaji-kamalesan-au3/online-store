import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Home from './Components/Product/Home';
import Cart from './Components/Product/Cart';
import Confirmation from './Components/Product/Confirmation';
import ProductPage from './Components/Product/Productpage';
import Product from './Components/Product/Product';
import setAuthToken from './Redux/Utils/setAuthToken';
import {setCurrentUser, logoutUser} from './Redux/actions/authActions'
import store from './Redux/store'
import NavBar from './Components/Product/NavBar';
import Signup from './Components/Auth/Signup';
import Login from './Components/Auth/Login';


if (localStorage.jwtToken) {
  const token = localStorage.jwtToken;
  setAuthToken(token);
  const decoded = jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  const currentTime = Date.now() / 1000; 
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = "./login";
  }
}



export default class App extends React.Component{
  render(){

    return(
        <div>
            <NavBar />
            <Route exact path="/" component={Home} /> 
            <Route exact path="/confirmation" component={Confirmation} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Switch>
              <Route exact path="/productdetails" component={ProductPage} />
              <Route exact path="/product" component={Product} />
              <Route exact path="/cart" component={Cart} />
              
            </Switch>
          
         
        </div>

    )

  }
}


