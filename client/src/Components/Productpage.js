import React from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import addToCart from '../Redux/action_creators'
import { Link } from 'react-router-dom'

const ProductPage = (props) => {
    console.log(props)

    if(props.product === null){
        return(
            <div>
                <NavBar />
                <div className="alert alert-danger">No Product selected !!</div>
            </div>
        )
    }

    else {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="display-4 row" >
                        {props.product.Name}
                        
                    </div>
                    <div className="row">
                        <h3>{props.product.Price} INR /- || Seller : {props.product.Seller}</h3>
                    </div>
                    <div className="row">

                        <img src ={props.product.Image} alt ={`Product Image ${props.product.Name}`}  className="img-fluid col-lg-4"  />
                    </div>

                    
                    <div className="row jumbotron lead">
                        <div className="row lead">
                            A Product by : {props.product.Manufacturer} 
                        </div>
                        <div>
                            Description: <br /> {props.product.Description}
                        </div>
                        
                        <div>
                            <br />
                            <button className="btn btn-warning" onClick ={()=> props.addtoCart(props.product)}>Add to Cart</button>
                            <Link to="/cart" className="btn btn-success">View Cart</Link>
                        </div>
                        
                    </div>

                </div>
            </div>
        )
    }
  
}


const mapStatetoProps = (state) => {
    return {
        product : state.CurrentProduct
    }
}

const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators ({
        addtoCart : addToCart
    },dispatch)
}

export default connect(mapStatetoProps,mapDispatchtoProps)(ProductPage)