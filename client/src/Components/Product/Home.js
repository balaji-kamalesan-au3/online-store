import React, { Fragment } from 'react'
import NavBar from './NavBar'
import Product from './Product'
import { Link } from 'react-router-dom'


 class Home extends React.Component{
    
    render(){
        
        return(
            <Fragment>
                 
                <div className="container" style={{height:window.innerHeight-200}}> 
                <div className="row" style={{marginTop : window.innerHeight/8}}>
                <h1 className="display-4">Welcome to Online Store !!</h1>
                    <p className="lead row">
                        About  : <br />
                        A Small functional e-commerce web app using React The goal of the Simple Online Store is to give your users the capability of selecting a product to purchase, viewing purchase information, adding it to an online shopping cart, and finally, actually purchasing the products in the shopping cart.
                        <br />
                        Technologies Used : ReactJS, Redux, Bootstrap
                        <br />
                        <br />
                        <div className="col-lg-6">
                        <Link to="/signup" className="btn btn-warning btn-lg btn-block " >New User? Register here</Link>
                        </div>
                        <div className="col-lg-6">
                        <Link to="/login" className="btn btn-warning btn-lg btn-block " >Have an Account? Login here </Link>
                        </div>
                        
                    </p>
                </div>
                   
                </div>

            </Fragment>
           
        )
    }
    
}


export default Home