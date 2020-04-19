import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import clearCart from '../Redux/clear_cart'
import NavBar from './NavBar'

class Confirmation extends React.Component{

    constructor(props){
        super(props)
        this.state ={
            CartItems : null || this.props.cart
        }
    }

        
    render(){
        console.log(this.props)
        if(this.state.CartItems===null || this.state.CartItems.length === 0){
            return <Fragment><NavBar /> <div className="alert alert-danger">Cart is Empty please add Something</div></Fragment>
        }
        else {
            return(
                <Fragment>
                
                <NavBar />
    
                <div className="container">
                    <div className="row">
                        {this.state.CartItems.map(
                            (product) => {
                                return (<div className ="col-sm-12 alert alert-success"> <img src={product.Image} height="100px" /> {`Item :${product.Name} ---- Price :${product.Price} ---- Quantity : ${product.quantity} `} </div>)
                            }
                        )}
                    </div> 
    
                    <button className="btn btn-warning" onClick= {() => { this.props.clearCart();  alert("Order Placed"); this.props.history.push('/cart')} }>Place Order</button>
                  
                </div>
    
                </Fragment>
                
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
    return bindActionCreators({clearCart : clearCart},dispatch)
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Confirmation)