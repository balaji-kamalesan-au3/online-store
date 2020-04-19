import React, { Fragment } from 'react'
import NavBar from './NavBar'
import { connect } from 'react-redux'
import Cartcard from './Cartcard'
import {bindActionCreators} from 'redux'
import addToCart from '../Redux/action_creators'
import { Link } from 'react-router-dom'


class Cart extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            CartItems : null || this.props.cart
        }
    }
        
    render(){
        
        if(this.state.CartItems===null || this.state.CartItems.length === 0){
            return <Fragment><NavBar /> <div className="alert alert-danger">Cart is Empty please add Something</div></Fragment>
        }
        else{
            return(
                <div> 
                    <NavBar />
                    <div className="container">
                            <div className="row">
                                
                                {this.state.CartItems.map(
                                    (product) => <Cartcard key = {product.pid} {...product} onClick = {() => this.props.addtoCart(product) }/>
                                )}
                            </div>
                            <div className="row">
                            <Link to="confirmation" className="btn btn-success col-md-offset-3 col-md-6  text-center">Confirm Order</Link>
                            </div>
                         
                        </div>
                                    
                    
                </div>
            )
        }
        
    }
    
}

const mapStatetoProps = (state) => {
    return {
        cart : state.Cart
    }
}
const mapDispatchtoProps = (dispatch) => {
    return bindActionCreators({addtoCart : addToCart},dispatch)
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Cart)