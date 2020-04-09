import React, { Fragment } from 'react'
import NavBar from './NavBar'
import Product from './Product'
import { Link } from 'react-router-dom'


 class Home extends React.Component{
    
    render(){
        
        return(
            <Fragment>
                 <NavBar />
                <div className="container-fluid jumbotron"> 
                    <h1 className="display-4 row">Welcome to Online Store !!</h1>
                    <p className="lead">
                        About  : <br />
                        A Small functional e-commerce web app using React The goal of the Simple Online Store is to give your users the capability of selecting a product to purchase, viewing purchase information, adding it to an online shopping cart, and finally, actually purchasing the products in the shopping cart.
                        <br />
                        Technologies Used : ReactJS, Redux, Bootstrap
                        <br />
                        <br />
                        <Link to="/product" className="btn btn-warning btn-lg btn-block " >Click here to Shop</Link>
                    </p>
                </div>

            </Fragment>
           
        )
    }
    
}


export default Home